import React from 'react'
import Stories from './Stories'

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
    xl:grid-cols-3 xl:max-w-6xl mx-auto bg-red-800">
      <section className='col-span-2 bg-blue-600'>
        {/* Stories */}
        <Stories />
        
        {/* Posts */}

      </section>

      <section>
        {/* Mini profile */}
        {/* Suggestions */}
      </section>
    </main>
  )
}

export default Feed
