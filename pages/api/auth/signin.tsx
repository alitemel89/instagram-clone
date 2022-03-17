import React from 'react'

import {
  signIn as signIntoProvider,
  signOut,
  useSession,
} from 'next-auth/react'

const SignIn = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div>
          Signed in as {session?.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <div>
          Not signed in <br />
          <button onClick={() => signIntoProvider()}>Sign in</button>
        </div>
      )}
    </div>
  )
}

export default SignIn


import { getSession } from "next-auth/react"

