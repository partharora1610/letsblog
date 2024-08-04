import LoginComponent from "@/components/auth/LoginComponent"
import { useGetUser } from "@/state/queries"
import { FC, ReactNode } from "react"

const AuthContext: FC<{ children: ReactNode }> = ({ children }) => {
  const { isLoading, isError, data, error } = useGetUser()

  if (isLoading) return <>Loading..</>

  if (isError && (!error.response || error.response.status !== 401))
    return <>OOPS...</>

  if (!isLoading && !data) return <LoginComponent />

  return <>{children}</>
}

export default AuthContext
