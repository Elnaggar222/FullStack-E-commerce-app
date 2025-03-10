import { ReactNode } from "react";
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
export interface ISignUpField {
  name: "username" | "email" | "password";
  type: string;
  label: string;
  icon: ReactNode;
  placeholder: string;
  hasToggle?: boolean;
}
export interface ISignInField {
  name: "identifier" | "password";
  type: string;
  label: string;
  icon: ReactNode;
  placeholder: string;
  hasToggle?: boolean;
}
export interface IFormSignUpInfo {
  username: string;
  email: string;
  password: string;
}
export interface IFormSignInInfo {
  identifier: string;
  password: string;
}
