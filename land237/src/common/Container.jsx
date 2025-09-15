import React from 'react'

export default function Container({children, sx}) {
  return (
	<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={sx}>
	  {children}
	</div>
  )
}
