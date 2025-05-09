import React from 'react'

export default function TrialButton({ href, lable }) {
  return (
    <>
      <a
        href={href}
        
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
      >
        {lable}
      </a>
    </>
  )
}
