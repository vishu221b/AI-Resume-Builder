import { SignIn } from "@clerk/clerk-react"

const SignInPage = () => {
  return (
    <div className='flex justify-start items-center min-h-[100vh] rounded-xl shadow-xl'>
      <SignIn
        signUpUrl="/auth/sign-up"
        appearance={{
          elements: {
            rootBox: "mx-auto"
          }
        }} />
    </div>
  )
}

export default SignInPage