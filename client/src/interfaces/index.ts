<<<<<<< HEAD
=======
import { ReactNode } from "react";

>>>>>>> add-login-register
export interface IProduct {
  description: string;
  discountPercentage: number;
  documentId: string;
  price: number;
  rating: number;
  title: string;
  thumbnail: {
    url: string;
  };
  images: {
    url: string;
  }[];
  stock: number;
  category: {
    title: string;
  };
}

export interface IErrorResponse {
  error: {
    message: string;
    status: number;
  };
}
<<<<<<< HEAD
=======
export interface ISignUpField {
  name: "username" | "email" | "password";
  type: string;
  label: string;
  icon: ReactNode;
  placeholder: string;
  hasToggle?: boolean;
}
>>>>>>> add-login-register
