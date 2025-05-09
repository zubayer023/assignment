import React from 'react'


export default function Logo({ img, title, href,alt }) {
  return (
    <>
    <a href={href} className="flex items-center">
        <img src={img} className="h-6 mr-3 sm:h-9" alt={alt} />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            {title}
        </span>
    </a>
    </>
  )
}
