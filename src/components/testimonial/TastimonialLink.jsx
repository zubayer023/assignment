import React from 'react'

export default function TastimonialLink({ Icon, text, name, role, profileImage}) {
  return (
    <figure className="max-w-screen-md mx-auto">
      {Icon && <Icon />}
      <blockquote>
        <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
          "{text}"
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3">
        <img
          className="w-6 h-6 rounded-full"
          src={profileImage}
          alt={`${name} profile`}
        />
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <div className="pr-3 font-medium text-gray-900 dark:text-white">
            {name}
          </div>
          <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
            {role}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}
