import React from 'react'

const MiniProfile = () => {
  return (
    <div className="mt-11 ml-10 flex items-center justify-between w-full">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src="https://links.papareact.com/3ke"
        alt=""
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">ssssangha</h2>
        <h3 className="text-sm text-gray-500">Welcome to Instagram</h3>
      </div>

      <button className="text-sm text-blue-400 cursor-pointer">Sign Out</button>
    </div>
  )
}

export default MiniProfile
