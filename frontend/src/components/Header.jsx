import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '@/contexts/AuthContext'

export default function Header () {
  const { isAuthenticated, user, handleLogout } = useContext(AuthContext)

  return (
    <div className='bg-gradient-to-b from-blue-500 to-blue-500 w-full py-5'>
      <div className='w-11/12 mx-auto flex justify-between items-center'>
        <Link to='/'>
          <p className='text-4xl text-white font-bold'>StackIt</p>
        </Link>
        <div>
          {!isAuthenticated && (
            <React.Fragment>
              <Link to='/register'>
                <button className='bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded-md text-white font-bold mx-1'>
                  Register
                </button>
              </Link>
              <Link to='/login'>
                <button className='bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded-md text-white font-bold mx-1'>
                  Login
                </button>
              </Link>
            </React.Fragment>
          )}
          {isAuthenticated && (
            <div className='flex items-center'>
              <p className='text-gray-300 mr-4'>Welcome, {user.username}!</p>
              <button
                onClick={handleLogout}
                className='bg-red-500 hover:bg-red-600 px-3 py-2 rounded-md text-white font-bold mx-1'
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
