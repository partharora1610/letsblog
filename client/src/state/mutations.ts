import { useMutation, useQueryClient } from "@tanstack/react-query"
import AxiosClient from "./http"

export const useSendCode = () => {
  const queryClient = useQueryClient()

  const mut = useMutation({
    mutationKey: ["code"],

    mutationFn: (code: string) =>
      AxiosClient.post("/auth/google/callback", {
        code,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] })
    },
  })

  return mut
}

export const useLogOut = () => {
  const queryClient = useQueryClient()

  const mut = useMutation({
    mutationKey: ["user"],
    mutationFn: () => AxiosClient.get("/user/logout"),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["user"] })
    },
  })
  return mut
}
