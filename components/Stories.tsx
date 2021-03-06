import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import Story from './Story'

interface Suggestions {
  id: number
  name: string
  username: string
  avatar: string
  email: string
}

const Stories = () => {
  const [suggestions, setSuggestions] = useState<Suggestions[]>([])

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div
      className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm
    border border-gray-200 bg-white p-6 scrollbar-none
    scrollbar-thumb-black"
    >
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          image={profile.avatar}
          username={profile.username}
        />
      ))}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
    </div>
  )
}

export default Stories
