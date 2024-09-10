import React from 'react'
import pic from '../../assets/images/picofme.jpg'

export const Intro = () => {
  return (
    <main>
        <div className='intro'>
            <img src={pic} alt='profile' className='w-48' />
        </div>
    </main>
  )
}
