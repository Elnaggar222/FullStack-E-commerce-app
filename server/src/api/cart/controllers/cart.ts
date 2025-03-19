import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::cart.cart",
  ({ strapi }) => ({
    async create(ctx) {
      try {
        // Ensure the user is authenticated
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

        // Look for an existing cart item for the same product and user.
        // Note: Use the appropriate service method depending on your Strapi version.
        const existingCartItems = await strapi.entityService.findMany(
          "api::cart.cart",
          {
            filters: {
              product_id: data.product_id, // using product_id field
              user: user.id, // only the current user's cart items
            },
          }
        );

        if (existingCartItems && existingCartItems.length > 0) {
          // If the product already exists in the cart, update the quantity.
          // Here, we assume that the new item is always added with quantity 1.
          const existingItem = existingCartItems[0];
          const newQuantity = +existingItem.quantity + 1;

          const updatedCart = await strapi.entityService.update(
            "api::cart.cart",
            existingItem.id,
            {
              data: {
                quantity: newQuantity,
              },
            }
          );
          return ctx.created(updatedCart);
        } else {
          // If no existing cart item, attach the user id and create a new cart record.
          data.user = user.id;
          // Optionally ensure data.quantity is set; default to 1 if not provided.
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
