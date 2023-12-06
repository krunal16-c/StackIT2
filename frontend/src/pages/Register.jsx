
import React, { useContext, useState } from 'react'
import { AuthContext } from '@/contexts/AuthContext'


export default function Register() {
  const { handleRegister } = useContext(AuthContext)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    await handleRegister({ username, email, password })
  }

  return (
    <div
      className='flex flex-col items-center justify-center h-screen bg-cover'
      style={{ backgroundColor:'#f0f0f0' }}>
      <div className='bg-white p-8 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold mb-6'>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='username'
              className='block text-gray-700 font-bold mb-2'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='block w-full px-4 py-2 rounded-lg bg-gray-200 border-transparent focus:bg-white focus:ring-0 focus:border-gray-300'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 font-bold mb-2'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='block w-full px-4 py-2 rounded-lg bg-gray-200 border-transparent focus:bg-white focus:ring-0 focus:border-gray-300'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-gray-700 font-bold mb-2'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='block w-full px-4 py-2 rounded-lg bg-gray-200 border-transparent focus:bg-white focus:ring-0 focus:border-gray-300'
            />
          </div>
          <div className='flex justify-end'>
            <button
              type='submit'
              className='px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}