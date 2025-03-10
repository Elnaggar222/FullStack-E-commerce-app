import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ISignInField, ISignUpField } from "../interfaces";

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
