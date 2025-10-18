"use client"
import { SignOutButton } from "@clerk/nextjs"
const SignOutLink = () => {
  return (
    <SignOutButton redirectUrl="/">
        <button>ออกจากระบบ</button>
    </SignOutButton>
  )
}
export default SignOutLink