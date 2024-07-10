import Hero from '@/components/Hero'
import { Footer } from '@/components/Footer'
import { Quickstart } from '@/components/QuickstartForm'
import { Pricing } from '@/components/Pricing'
import { Testimonials } from '@/components/Testimonials'
import { SignedOut, useUser } from '@clerk/clerk-react'
import { Navigate } from 'react-router-dom'
import { NavMenu } from '@/components/NavMenu'
import Sidebar from '@/components/sidebar/Sidebar'

type LandingPageProps = {
  doNavigation?: boolean;
}

const LandingPage = ({ doNavigation = false }: LandingPageProps) => {
  const { isSignedIn } = useUser()
  if (isSignedIn && doNavigation) {
    return <Navigate to={"/home"} />
  }
  return (
    <div className='max-w-screen m-1 pt-5 overflow-hidden'>
      <SignedOut>
        <div className='shadow-lg flex justify-around sm:justify-between border mb-10 p-3 rounded-xl gap-10 font-sans'>
          <Sidebar />
          <NavMenu>
          </NavMenu>
        </div>
      </SignedOut>
      <div className='border-0 border-gray-900 rounded-3xl'>
        <Hero />
      </div>
      <Testimonials />
      <Pricing />
      <Quickstart />
      <Footer />
    </div>
  )
}

export default LandingPage