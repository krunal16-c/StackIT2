import React from 'react'
import PostTitle from './postTitle'
import PostData from './postData'

export default function Post({ post }) {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <div className='bg-gradient-to-b from-blue-200 to-purple-200 p-5 border my-1 rounded-md'>
        <PostTitle title={post.topic} id={post.id} />
        <PostData data={post.data} />
      </div>
    </div>
  )
}