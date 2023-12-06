import React, { useContext, useEffect, useMemo } from 'react'
import { ChatContext } from '@/contexts/ChatContext'
import { AuthContext } from '@/contexts/AuthContext'
import { BsTrash } from 'react-icons/bs'

export default function ChatUsers () {
  const { users, chatUsers, deleteUserAction } = useContext(ChatContext)
  const { user } = useContext(AuthContext)
  const activeUsers = useMemo(() => {
    return users.map(user => {
      const isActive = chatUsers.some(chatUser => chatUser.id === user.id)
      return { ...user, status: isActive ? 'active' : 'inactive' }
    })
  }, [users, chatUsers])

  return (
    <div className='w-full'>
      <div className='bg-blue-200 rounded-md p-5'>
        <p className='text-3xl font-bold text-gray-800 mb-5'>All Users</p>
        {activeUsers.length
          ? activeUsers.map(item =>
              item.id !== user.id ? (
                <div
                  key={item.id}
                  className={`text-gray-800 flex w-full cursor-pointer items-center justify-between py-2 hover:bg-gray-200 transition duration-300`}
                >
                  <p className='text-lg'>{item.username}</p>
                  {user.type === 'admin' && (
                    <BsTrash
                      onClick={() => {
                        deleteUserAction(item.id)
                      }}
                      className='text-red-600 ml-2 hover:text-red-800'
                      size={24}
                    />
                  )}
                </div>
              ) : (
                ''
              )
            )
          : <p className='text-lg text-gray-500'>No active users at the moment.</p>}
      </div>
    </div>
  )
}
