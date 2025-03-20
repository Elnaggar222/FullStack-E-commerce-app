import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::cart.cart",
  ({ strapi }) => ({
    async create(ctx) {
      try {
        // Get authenticated user's ID from JWT
        const user = ctx.state.user;
        if (!user) {
          return ctx.unauthorized(
            "You must be logged in to create a cart item."
          );
        }

        // Extract cart data from request body
        const { data } = ctx.request.body;
        if (!data) {
          return ctx.badRequest("Missing cart data.");
        }

        // Attach the authenticated user's id to the data
        data.user = user.id;

        // Check if a cart item with the same product_id already exists for this user
        const existingItems = await strapi.entityService.findMany(
          "api::cart.cart",
          {
            filters: {
              product_id: data.product_id,
              user: user.id,
            },
          }
        );

        if (existingItems && existingItems.length > 0) {
          // If the item exists, update its quantity.
          const existingItem = existingItems[0];
          // Calculate new quantity:
          // Use the quantity provided in the request (default is 1) and add it to the existing quantity.
          const newQuantity = +existingItem.quantity + (data.quantity || 1);

          const updatedCart = await strapi.entityService.update(
            "api::cart.cart",
            existingItem.id,
            {
              data: { quantity: newQuantity },
            }
          );
          return ctx.created(updatedCart);
        } else {
          // If the item does not exist, ensure quantity is set (default to 1 if not provided)
          if (!data.quantity) {
            data.quantity = 1;
          }
          const cart = await strapi.service("api::cart.cart").create({ data });
          return ctx.created(cart);
        }
      } catch (error) {
        return ctx.internalServerError(`Something went wrong: ${error}`);
      }
    },
  })
);
