import React, { useContext } from 'react'
import { ChatContext } from '@/contexts/ChatContext'
import { AuthContext } from '@/contexts/AuthContext'

import { BsTrash } from 'react-icons/bs'

export default function Channels () {
  const {
    channels,
    activeChat,
    setActiveChat,
    joinChannelAction,
    deleteChannelAction
  } = useContext(ChatContext)
  const { user } = useContext(AuthContext)

  return (
    <div className='w-full'>
      <div className='bg-gray-100 rounded-md  p-5'>
        <p className='text-xl text-gray-500'>Channels</p>{' '}
        {channels.length
          ? channels.map(item => (
              <div
                onClick={() => {
                  setActiveChat(item)
                }}
                key={item.id}
                className={`text-gray-600 flex w-full cursor-pointer items-center justify-between px-2 my-1 ${
                  item.id === activeChat?.id ? 'bg-gray-200' : ''
                }`}
              >
                <p>{item.name}</p>
                <div className='flex items-center'>
                  {item?.participants?.some(
                    participant => participant.id === user.id
                  ) ? (
                    'Joined'
                  ) : (
                    <div
                      onClick={() => {
                        joinChannelAction({
                          userId: user.id,
                          channelId: item.id,
                          channelName: item.name
                        })
                      }}
                      className='bg-green-200 px-3 py-1 rounded-md border border-gray-400'
                    >
                      Join
                    </div>
                  )}

                  {user.type === 'admin' && (
                    <BsTrash
                      onClick={() => {
                        deleteChannelAction(item.id)
                      }}
                      className='ml-2'
                      size={20}
                    />
                  )}
                </div>
              </div>
            ))
          : ''}
      </div>
    </div>
  )
}
