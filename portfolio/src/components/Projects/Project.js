import React from 'react'
import movietime from '../../assets/images/movietime.png'

function Project() {
  return (
    <div className='my-12'>
        <img src={movietime} className="rounded" alt='prolect'/>
        <div className='py-4'>
            <p className='font-bold text-2xl'>
                Project
            </p>
            <p className='text-gray-500 font-light'>description</p>
        </div>
    </div>
  )
}

export default Project