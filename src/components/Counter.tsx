import React, { useState } from 'react'

export { Counter }

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button
      bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
      text="sm white"
      p="y-2 x-4"
      border="2 rounded blue-500"
      type="button"
      onClick={() => setCount((count) => count + 1)}
    >
      Counter {count}
    </button>
  )
}
