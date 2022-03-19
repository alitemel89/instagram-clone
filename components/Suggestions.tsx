import React, { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker'

interface Suggestions {
  id: number
  name: string
  username: string
  avatar: string
  email: string
  company: {
    name: string
  }
}

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState<Suggestions[]>([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => {
      return {
        ...faker.helpers.contextualCard(),
        id: i,
      }
    })

    setSuggestions(suggestions)
  }, [])

  console.log(suggestions)

  return (
    <div className="mt-4 ml-10 w-full">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="mt-3 flex
              items-center justify-between"
        >
          <img
            src={profile.avatar}
            alt=""
            className="h-10 w-10 rounded-full
          border p-[2px]"
          />

          <div className="ml-4 flex-1">
            <h2 className="text-sm font-semibold">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>

          <button className="text-xs font-bold text-blue-500">Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
