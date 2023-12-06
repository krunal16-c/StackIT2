import React from 'react';

export default function LandingPage() {
  return (
    <div className='bg-gray-100 h-screen' style={{backgroundColor:'white'}}>
      <main className='container mx-auto mt-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-white rounded-lg shadow-lg'>
            <img className='object-cover h-48 w-full rounded-t-lg'  />
            <div className='p-4'>
              <h2 className='font-bold text-3xl text-purple-600 mb-4'>Ask Anything</h2>
              <p className='text-gray-800 leading-relaxed'>
              Got a programming question? Don't hesitate to ask! Our community is here to help you
              </p>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-lg'>
            <img className='object-cover h-48 w-full rounded-t-lg'  />
            <div className='p-4'>
              <h2 className='font-bold text-3xl text-black-600 mb-4'>Be a part of the programming community</h2>
              <p className='text-gray-800 leading-relaxed'>
              Be a part of our vibrant programming community.
              </p>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-lg'>
            <img className='object-cover h-48 w-full rounded-t-lg'  />
            <div className='p-4'>
              <h2 className='font-bold text-3xl text-orange-600 mb-4'>Share Your Knowledge</h2>
              <p className='text-gray-800 leading-relaxed'>
              Help others by answering their programming questions. Your expertise can make a difference
              </p>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-lg'>
            <img className='object-cover h-48 w-full rounded-t-lg'/>
            <div className='p-4'>
              <h2 className='font-bold text-3xl text-green-600 mb-4'>Your Own Space</h2>
              <p className='text-gray-800 leading-relaxed'>
              Create your own channels on topics you're passionate about. Share, discuss, and learn together
              </p>
            </div>
          </div>
        </div>
        
      </main>
    </div>
  );
}
