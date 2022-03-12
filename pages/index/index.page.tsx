import React from 'react'

import Hero from './Hero'

const Page = () => (
  <>
    <Hero />

    <button
      bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
      text="sm white"
      p="y-2 x-4"
      border="2 rounded blue-500"
    >
      Button
    </button>
  </>
)

export { Page }
