
import './App.css'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Navbar from './components/navbar/Navbar'

function App() {
  const { user, isLoaded, isSignedIn } = useUser()
  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />
  } else {
    console.log({ user })
  }
  return (
    <>
      {isSignedIn ?
        <Navbar />
        : ""}
      <div className='rounded-3xl shadow-xl'>
        <Outlet />
      </div>
    </>
  )
}

export default App
