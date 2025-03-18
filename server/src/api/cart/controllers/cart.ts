import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::cart.cart",
  ({ strapi }) => ({
    async create(ctx) {
      try {
        // Get authenticated user's ID from JWT
        const user = ctx.state.user;

        if (!user) {
          return ctx.unauthorized("You must be logged in to create a cart.");
        }

        // Extract cart data from request body
        const { data } = ctx.request.body;

        if (!data) {
          return ctx.badRequest("Missing cart data.");
        }

        // Attach authenticated user's ID to the cart
        data.user = user.id;

        // Call the default create service with modified data
        const cart = await strapi.service("api::cart.cart").create({ data });

        return ctx.created(cart);
      } catch (error) {
        return ctx.internalServerError(`Something went wrong ${error}`);
      }
    },
  })
);
