import { Center, Grid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { IProduct } from "../interfaces";
import ErrorHandler from "../components/errors/ErrorHandler";
import ProductCardSkeleton from "../components/ProductCardSkeleton";

const ProductsPage = () => {
  /*________________states_______________*/

  /*________________react query_______________*/
  const { isLoading, error, data } = useQuery<IProduct[]>({
    queryKey: ["Products"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_SERVER_URL
        }/api/products?populate[thumbnail]=true`
      );
      return data.data;
    },
    retry: 0,
  });
  /*________________Renders_______________*/
  const renderProducts = data?.map((product) => (
    <ProductCard key={product.documentId} product={product} />
  ));
  const renderProductsSkeleton = Array.from({ length: 10 }).map((_, idx) => (
    <ProductCardSkeleton key={idx} />
  ));
  if (isLoading)
    return (
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={3}>
        {renderProductsSkeleton}
      </Grid>
    );
  if (error) return <ErrorHandler />;
  return (
    <>
      {data && data.length > 0 ? (
        <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={3}>
          {renderProducts}
        </Grid>
      ) : (
        <Center color={"red.600"}>No Products Existed</Center>
      )}
    </>
  );
};

export default ProductsPage;
