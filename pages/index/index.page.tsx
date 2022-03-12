import React from 'react'
import { Counter } from '../../src/components/Counter'

export { Page }

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
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
}
