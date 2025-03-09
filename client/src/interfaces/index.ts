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
