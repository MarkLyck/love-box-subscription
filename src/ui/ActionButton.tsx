import React from 'react'

export const ActionButton = ({ children }) => {
  return (
    <button w:bg="blue-600 hover:blue-800" w:p="y-2 x-4" w:border="rounded" w:text="white">
      {children}
    </button>
  )
}
