import { useQuery } from "@tanstack/react-query"
import AxiosClient from "./http"
import { AxiosError } from "axios"

type User = {
  id: number
  name: string
  email: string
}

type Response = {
  result: User
}

export const useGetUser = () => {
  const query = useQuery<User, AxiosError>({
    queryKey: ["user"],
    queryFn: () =>
      AxiosClient.get<Response>("/user").then((data) => data.data.result),
    retry: 1,
  })

  return query
}
