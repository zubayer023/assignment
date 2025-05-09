import React from "react";

export default function IconButton({ href, Icon, className, children }) {
  return (
    <>
      <a href={href} className={className}>
        {Icon && <Icon className="w-4 h-4 mr-2" />}
        {children}
      </a>
    </>
  );
}
