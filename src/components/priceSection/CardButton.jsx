import React from 'react'

export default function CardButton({href,lable}) {
  return (
    <>
    <a href={href}  className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">
        {lable}
    </a>
    </>
  )
}
