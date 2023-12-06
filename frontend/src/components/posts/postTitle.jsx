import React from 'react'

export default function postTitle ({ title, id }) {
  return (
    <p className='text-xl'>
      ({id}) {title}
    </p>
  )
}
