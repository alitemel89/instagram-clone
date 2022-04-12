import React from 'react'
import Image from 'next/image'

const Login = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="w-full max-w-sm rounded border border-gray-300 bg-white py-10 px-10">
          <div className="flex justify-center">
            <Image
              src="https://links.papareact.com/ocw"
              width={256}
              height={96}
            />
          </div>

          <div className="my-2">
            <input
              className="h-2 w-full bg-gray-50 px-2 py-5 text-sm"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="my-2">
            <input
              className="mb-3 h-2 w-full bg-gray-50 px-2 py-5 text-sm"
              type="text"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              className="mb-6 w-full rounded bg-blue-200 py-1 px-4 font-bold text-white hover:bg-blue-300"
              type="submit"
            >
              Log In
            </button>

            <p className="text-center text-gray-400">OR</p>

            <button
              className="mt-5 w-full rounded bg-blue-400 py-1 px-4 font-bold text-white hover:bg-blue-300"
              type="submit"
            >
              Sign In With Google
            </button>

            <p className="my-3 text-center text-sm text-blue-700">
              Forgot Password?
            </p>
          </div>
        </div>

        <div className="text-md mt-2 w-96 rounded border border-gray-300 bg-white p-5 text-center text-gray-600">
          Don't have an account?{' '}
          <span className="mr-1 text-blue-900">Sign up</span>
        </div>
      </div>
    </>
  )
}

export default Login
