import { useSendCode } from "@/state/mutations"
import { useGoogleLogin } from "@react-oauth/google"
import { Button } from "../ui/button"

const LoginComponent = () => {
  const sendCode = useSendCode()

  const login = useGoogleLogin({
    onSuccess: async ({ code }) => {
      await sendCode.mutateAsync(code)
    },
    flow: "auth-code",
    scope: "email profile openid",
  })

  return (
    <Button
      onClick={() => {
        login()
      }}
    >
      Sign in with Google
    </Button>
  )
}

export default LoginComponent
