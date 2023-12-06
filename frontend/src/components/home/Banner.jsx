import React, { useContext } from 'react'
import { MyContext } from '@/contexts/PostsContext'

export default function Banner () {
  const { createDBReq } = useContext(MyContext)
  return (
    <div className='h-screen'>
      <div className='h-1/2 background-image w-full flex flex-col justify-center items-center'>
        <div className=''>
          <p className='text-white text-3xl'>Let's Start</p>
          <button
            onClick={() => {
              createDBReq()
            }}
            className='bg-indigo-800 py-2 px-3 rounded-md my-2 text-white'
          >
            Create Database
          </button>
        </div>
      </div>
    </div>
  )
}
