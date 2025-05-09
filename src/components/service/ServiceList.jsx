import React from 'react'

export default function ServiceList({ Icon, title, description }) {
  return (
    <div>
      {Icon && <Icon />}
      <h3 className="mb-2 text-2xl font-bold dark:text-white">{title}</h3>
      <p className="font-light text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}
