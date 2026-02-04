import { SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import './App.css'

function App() {
 

  return (
    <>
     <SignedOut>
        <SignInButton  mode="modal"/>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton/>
    </>
  )
}

export default App
