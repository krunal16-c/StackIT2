import React, { useContext, useState } from 'react'
import { AuthContext } from '@/contexts/AuthContext'


function LoginPage () {
  const { handleLogin } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    await handleLogin({ email, password })
  }

  return (
    <div className='flex h-screen' style={{ backgroundColor:'#f0f0f0' }}>
      <div className='m-auto w-full max-w-md'>
        <div className='bg-white p-8 rounded-lg shadow-lg' 
          style={{ backgroundColor:'#fff' }}>
          <h1 className='text-2xl font-bold mb-6 text-center' style={{ color: '#2B2D42' }}>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-gray-700 font-bold mb-2'
                style={{ color: 'black' }}
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='block w-full px-4 py-2 rounded-lg bg-gray-200 border-transparent focus:bg-white focus:ring-0 focus:border-gray-300'
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='password'
                className='block text-gray-700 font-bold mb-2'
                style={{ color: 'black  ' }}
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                className='block w-full px-4 py-2 rounded-lg bg-gray-200 border-transparent focus:bg-white focus:ring-0 focus:border-gray-300'
              />
            </div>
            <div className='flex justify-end'>
              <button
                type='submit'
                className='px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
                style={{ backgroundColor: '#2B2D42', hoverBackgroundColor: '#8D99AE' }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
