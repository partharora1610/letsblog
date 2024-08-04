"use client"

import AuthContext from "@/contexts/AuthContext"
import { GoogleOAuthProvider } from "@react-oauth/google"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <GoogleOAuthProvider clientId="">
      <AuthContext>{children}</AuthContext>
    </GoogleOAuthProvider>
  )
}

export default Providers
