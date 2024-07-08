import { SignUp } from "@clerk/clerk-react"

const SignUpPage = () => {
    return (
        <div className='flex justify-start items-center min-h-[100vh] rounded-xl shadow-xl'>
            <SignUp
                signInUrl="/auth/sign-in"
                appearance={{
                    elements: {
                        rootBox: "mx-auto"
                    }
                }} />
        </div>
    )
}

export default SignUpPage