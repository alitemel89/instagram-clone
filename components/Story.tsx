import React, { FC } from 'react'

interface StoryProps {
  username: string
  image: string
}

const Story: FC<StoryProps> = ({ username, image }) => {
  return (
    <div>
      <img
        className="h-14 w-14 transform cursor-pointer rounded-full
      border-2 border-red-500 object-contain
      p-[1.5px] transition duration-200 hover:scale-110"
        src={image}
        alt="user-image"
      />
      <p
        className="w-14 truncate text-center text-xs"
      >
        {username}
      </p>
    </div>
  )
}

export default Story
