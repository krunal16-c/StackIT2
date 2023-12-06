import React, { useState, useRef, useEffect, useContext } from 'react'
import { FaReply } from 'react-icons/fa'

import { AuthContext } from '../contexts/AuthContext'
import { ChatContext } from '@/contexts/ChatContext'

import ChatUsers from '@/components/chat/ChatUsers'
import Channels from '@/components/chat/Channels'
import CreateChannel from '@/components/chat/CreateChannel'
import SingleMessage from '@/components/chat/SingleMessage'

const Chat = () => {
  const { chat, activeChat, sendMessage, channelActive, searchMessage } =
    useContext(ChatContext)
  const { user } = useContext(AuthContext)
  const [replyTo, setReplyTo] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [inputValue, setInputValue] = useState('')
  const messageListRef = useRef(null)

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  const handleSendMessage = e => {
    e.preventDefault()
    if (inputValue.trim() !== '' && user && activeChat) {
      sendMessage({
        message: inputValue,
        from: user.id,
        to: activeChat.id,
        time: new Date(),
        ...(replyTo && { replyTo: replyTo.id }),
        channelName: activeChat.name
      })
      setInputValue('')
      setReplyTo(null)
    } else {
      alert('inputvalue, user and activechat is not available')
    }
  }

  useEffect(() => {
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight
  }, [chat])

  useEffect(() => {
    searchMessage({ text: searchText, channelId: activeChat.id })
  }, [searchText])

  return (
    <div className='container mx-auto flex flex-col flex-1 px-10'>
      <div className='flex flex-1 gap-4'>
        <div className='w-4/5 mx-auto flex flex-col flex-1'>
          {activeChat && (
            <div className='flex items-center justify-between bg-gray-300'>
              <p className='text-xl p-4  rounded-md text-black'>{`${
                activeChat?.username || activeChat?.name
              }`}</p>
              <input
                onChange={e => {
                  setSearchText(e.target.value)
                }}
                value={searchText}
                className='h-8 mr-3 rounded-md px-2'
                type='text'
                placeholder='search post'
              />
              
            </div>
          )}
          {channelActive && (
            <form
              onSubmit={handleSendMessage}
              className='p-4 bg-gray-300 rounded-md mb-4'
            >
              {replyTo && (
                <div className='flex items-center'>
                  <FaReply className='mr-1' />: {replyTo.message}
                </div>
              )}
              <div className='flex items-center space-x-2'>
                <input
                  type='text'
                  className='flex-1 border border-gray-300 rounded-lg p-2'
                  placeholder='Type your Post here...'
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <button
                  className='bg-blue-500 text-white rounded-lg px-4 py-2'
                  type='submit'
                >
                  Post
                </button>
              </div>
            </form>
          )}
          <div
            className='flex-1 flex flex-col overflow-y-auto bg-gray-50'
            ref={messageListRef}
          >
            {channelActive ? (
              <ul
                className='space-y-4 flex-1 p-4 overflow-y-auto'
                style={{ maxHeight: 'calc(100vh - 250px)' }}
              >
                {chat?.length
                  ? chat.map((message, index) => (
                      <SingleMessage
                        index={index}
                        key={`Message${index}`}
                        message={message}
                        setReplyTo={setReplyTo}
                      />
                    ))
                  : ''}
              </ul>
            ) : (
              <div className='flex flex-grow flex-col justify-center items-center w-full'>
                you need to join the channel first
              </div>
            )}
          </div>
        </div>
        <div className='w-1/5'>
          <ChatUsers />
          <CreateChannel />
          <Channels />
        </div>
      </div>
    </div>
  )
}

export default Chat
