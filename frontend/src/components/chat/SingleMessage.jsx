import React, { useContext, useEffect, useMemo } from 'react'

import {
  AiFillLike,
  AiFillDislike,
  AiOutlineLike,
  AiOutlineDislike
} from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'

import { AuthContext } from '@/contexts/AuthContext'
import { ChatContext } from '@/contexts/ChatContext'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default function SingleMessage ({ message, setReplyTo, index }) {
  const { user } = useContext(AuthContext)
  const { submitReaction, deleteMessageAction } = useContext(ChatContext)
  const { fetchRepliesAction, replies } = useContext(ChatContext);
  const messageReaction = useMemo(
    () => message?.Reactions?.find(reaction => reaction.usrId === user.id),
    [message]
  )
  
  const reactionCounts = useMemo(() => {
    const counts = { like: 0, dislike: 0 }
    message?.Reactions?.forEach(reaction => {
      counts[reaction.reactionType] += 1
    })
    return counts
  }, [message?.Reactions])

  const AddReaction = reactionType => {
    submitReaction({ reactionType, msgId: message.id, usrId: user.id })
  }
  return (
    <li
      className={`${
        index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
      } p-4 rounded-lg relative group flex items-center justify-between w-full ${
        message?.from === user?.id ? 'ml-auto' : ''
      }`}
    >
      <div className='w-full'>
        <span>{message?.sender?.username}</span>
        <p className='text-gray-600'>
          {message?.respondingMessage ? (
            <span className='flex items-center'>
              {' '}
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>
              
              :{message?.respondingMessage?.message}
            </span>
          ) : (
            ''
          )}
        </p>
        {message?.message}
        <p>{dayjs(message.createdAt).fromNow()}</p>
      </div>
      <div className='flex flex-col'>
        <div className='flex mb-2  justify-end'>
          {messageReaction?.reactionType !== 'like' && (
            <AiOutlineLike
              onClick={() => {
                AddReaction('like')
              }}
              size='25'
              className='cursor-pointer'
            />
          )}
          {messageReaction?.reactionType === 'like' && (
            <AiFillLike
              size='25'
              onClick={() => {
                AddReaction('like')
              }}
              className='cursor-pointer'
            />
          )}
          {reactionCounts.like}
          {messageReaction?.reactionType !== 'dislike' && (
            <AiOutlineDislike
              onClick={() => {
                AddReaction('dislike')
              }}
              size='25'
              className='cursor-pointer'
            />
          )}

          {messageReaction?.reactionType === 'dislike' && (
            <AiFillDislike
              size='25'
              onClick={() => {
                AddReaction('dislike')
              }}
              className='cursor-pointer'
            />
          )}

          {reactionCounts.dislike}
          {user.type === 'admin' && (
            <BsTrash
              onClick={() => {
                deleteMessageAction(message.id)
              }}
              className='ml-2 cursor-pointer'
              size={20}
            />
          )}
        </div>
        <div className='top-10 right-0 group-hover:opacity-100 opacity-0 transition-opacity duration-300'>
          <button
            onClick={() => {
              setReplyTo(message)
            }}
            className='bg-blue-500 text-white px-3 py-1 rounded text-xs flex items-center justify-centre'
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>
            Comment
          </button>
        </div>
      </div>
        
    </li>
  )
}
