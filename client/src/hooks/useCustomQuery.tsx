import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosRequestConfig } from "axios";
import axiosInstance from "../config/axios.config";

interface IUseCustomQuery {
  queryKey: string[];
  url: string;
  config?: AxiosRequestConfig;
  method?: "get" | "post" | "put" | "delete";
  body?: unknown;
  enabled?: boolean;
}

// TData and TError are optional types to send
const useCustomQuery = <TData = unknown, TError = unknown>({
  queryKey,
  url,
  config,
  method = "get",
  body,
  enabled = true,
}: IUseCustomQuery) => {
  return useQuery<TData, AxiosError<TError>>({
    queryKey,
    queryFn: async () => {
      const requestConfig = {
        ...config,
        ...(method === "post" || method === "put" ? { data: body } : {}), // Only include body for POST/PUT
      };

      const { data } = await axiosInstance.request({
        url,
        method,
        ...requestConfig,
      });

      return data;
    },
    retry: 0,
    enabled,
  });
};

export default useCustomQuery;

/* 🔹 Usage Examples
#######
 1🔹 Fetch Data (GET)
const { data, error, isLoading } = useCustomQuery<MyType, MyError>({
  queryKey: ["todos"],
  url: "/todos",
});
#######
2🔹 Create Data (POST)
const { data, error, isLoading } = useCustomQuery<MyType, MyError>({
  queryKey: ["todos"],
  url: "/todos",
  method: "post",
  body: { data: { title: "New Todo", description: "A new task" } },
});
#######
3🔹 Update Data (PUT)
const { data, error, isLoading } = useCustomQuery<MyType, MyError>({
  queryKey: ["todos"],
  url: "/todos/1",
  method: "put",
  body: { data: { title: "Updated Todo" } },
});
4🔹 Delete Data (DELETE)
const { data, error, isLoading } = useCustomQuery<MyType, MyError>({
  queryKey: ["todos"],
  url: "/todos/1",
  method: "delete",
});
*/
// ##############################################################################
/*
🔹The axiosInstance.request() method is a generic way to make an HTTP request in Axios.
Instead of calling specific methods like axios.get() or axios.post(), it allows you to pass the method dynamically.

const { data } = await axiosInstance.request({
  url: "/todos/1",
  method: "PUT",
  data: { title: "Updated Todo" },
  headers: {
    Authorization: `Bearer token_here`,
  },
});
*/
