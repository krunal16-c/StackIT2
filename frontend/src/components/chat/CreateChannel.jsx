import React, { useContext, useState } from 'react'
import { ChatContext } from '@/contexts/ChatContext'

export default function CreateChannel() {
  const { createChannelAction } = useContext(ChatContext)

  const [channelName, setChannelName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    createChannelAction(channelName)
    setChannelName('')
  }

  return (
    <div className='w-full my-4'>
      <div className='bg-white rounded-md shadow-md p-6'>
        <h2 className='text-xl font-bold text-gray-700 mb-4'>
          Create a New Channel
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col items-start justify-between'>
            <label htmlFor='channel-name' className='text-gray-700 font-medium mb-2'>
              Channel Name
            </label>
            <input
              type='text'
              id='channel-name'
              placeholder='Enter Channel Name'
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              className='text-gray-700 w-full px-3 py-2 rounded-lg mb-4 focus:outline-none focus:shadow-outline'
            />
            <button
              type='submit'
              className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors'
            >
              Create Channel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
