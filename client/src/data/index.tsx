import { FaUser, FaLock, FaUsers, FaStore } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ISignInField, ISignUpField } from "../interfaces";
import { FiHome } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import { BsGrid3X3GapFill } from "react-icons/bs";

export const getFormSignUpFields = (showPassword: boolean): ISignUpField[] => [
  {
    name: "username",
    type: "text",
    label: "Username",
    icon: <FaUser />,
    placeholder: "Username",
  },
  {
    name: "email",
    type: "text",
    label: "Email address",
    icon: <MdEmail />,
    placeholder: "Email",
  },
  {
    name: "password",
    type: showPassword ? "text" : "password",
    label: "Password",
    icon: <FaLock />,
    placeholder: "Password",
    hasToggle: true,
  },
];
export const getFormSignInFields = (showPassword: boolean): ISignInField[] => [
  {
    name: "identifier",
    type: "text",
    label: "Email address",
    icon: <MdEmail />,
    placeholder: "Email",
  },
  {
    name: "password",
    type: showPassword ? "text" : "password",
    label: "Password",
    icon: <FaLock />,
    placeholder: "Password",
    hasToggle: true,
  },
];
export const userNavLinks = [
  { name: "Products", to: "/products" },
  { name: "Contact", to: "/contact" },
  { name: "About", to: "/about" },
];
export const adminNavLinks = [
  { name: "Home", to: "/dashboard", icon: FiHome },
  { name: "Products", to: "/dashboard/products", icon: FaStore },
  { name: "Categories", to: "/dashboard/categories", icon: BsGrid3X3GapFill },
  { name: "Users", to: "/dashboard/users", icon: FaUsers },
  { name: "Carts", to: "/dashboard/carts", icon: GiShoppingCart },
];
