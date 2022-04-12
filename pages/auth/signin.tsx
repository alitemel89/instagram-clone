import type { NextPage } from 'next'
import Login from '../../components/Login'

const signin: NextPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <Login />
    </div>
  )
}

export default signin
