
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

function App() {
  const { user, isLoaded, isSignedIn } = useUser()
  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />
  }
  return (
    <>
      <Navbar />
      <div className='md:max-w-[80vw] border rounded-xl p-2 mx-5 shadow-lg md:mx-auto'>
        <Outlet />
      </div>
    </>
  )
}

export default App
