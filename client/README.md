<!-- ################ -->

Using React + TypeScript + Chakra Ui + Strapi + Vite + react-router + TanStack Query + axios + react-icons

- Redux ToolKit + chakra Templates

create Products Card - Product Details Page - Adding Skeleton - Error Handling

- UI Styling using chakra Ui- Using Tanstack Query With axios - NotFound Handling
- Add routes using react-router -Generate Backend Apis using Strapi

Using chakra Templates Navbar component
using react icons for Icons

<!-- ################# -->

added SignUp and SignIn Form with validation using React-Hook-Form and Yup For validation schema

<!-- ################# -->

SignUp and SignIn Form Refactoring For more maintainable ,reusable and clean code
Install Redux Toolkit and using Create Async Thunk For SignUp and Login
using toaster from Chakra Ui

<!-- ################# -->

Added ProtectedRoute Component
universal-cookie
Navbar code Refactoring ,active NavLink ,add animation and profile menu

<!-- ################# -->

Add Cart Collection that contain each cart Product for specific user
Cart Collection has a relation one to Many with user => user can have many carts , and each cart for only one user
Create Cart Page For Authenticated Users So every user has his own cart products in the DB
Authenticated Users can add to cart and delete items from cart
loading skeleton for cart page and cart Badge Icon
Error handling for cart fetch and add to cart and delete from cart
added reusable customQuery Hook For react Query Fetchings
In Cart Page User can Decrease , Increase Quantity of each item and Delete any item with perfect Loading on every delete, update any item Quantity

<!-- ################# -->

Now Unauthenticated users can add to local cart which is persisted in local storage using redux-toolkit persistor
and when user login all userInfo is persisted too in local storage using redux-toolkit persistor .

after user login => all cart items added before login is added to user account (if product already existed quantity is increased , if not added as new item in cart) then local cart is cleared

<!-- ################# -->