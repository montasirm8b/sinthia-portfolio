import React from 'react'

const Highlight = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative inline-block">
      <span className="absolute inset-x-0 bottom-0 h-1/2 bg-[#ffe872] z-0"></span>
      <span className="relative z-10">{children}</span>
    </span>
  )
}

export default Highlight