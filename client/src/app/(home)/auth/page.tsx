"use client"

import React, { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"

const Page = () => {
  const searchParams = useSearchParams()
  const mode = searchParams.get("mode")

  return (
    <div>{mode === "signup" ? <SignupComponent /> : <LoginComponent />}</div>
  )
}

const LoginComponent = () => {
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  // const onSubmit = async () => {
  //   await login(username, password)
  // }

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>
            Enter your credentials to access your account.
          </CardDescription>
          <Link href="/auth?mode=signup" prefetch={false}>
            Signup
          </Link>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href="#"
                className="text-sm font-medium underline underline-offset-4 hover:text-primary"
                prefetch={false}
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            // onClick={onSubmit}
            className="w-full bg-primary-700 hover:bg-primary-800 transition-all"
          >
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

const SignupComponent = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // const onSubmit = async () => {
  //   await register(email, password, confirmPassword, username)
  // }

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="confirm-password">Confirm Password</Label>
            </div>
            <Input
              onChange={(e) => setConfirmPassword(e.target.value)}
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            // onClick={onSubmit}
            className="w-full bg-primary-700 hover:bg-primary-800 transition-all"
          >
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Page
