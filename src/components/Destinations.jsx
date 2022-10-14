import React from 'react'

import children from '../assets/children.avif';
import lv from '../assets/lv.avif'
import unity from '../assets/unity.avif';
import runners from '../assets/runners.avif';
import help from '../assets/help.avif';
import flames from '../assets/flames.avif';
import feed from '../assets/feed.webp';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>Making Heaven...</h1>
        <p className='py-4'>God places Himself among poor and the humble:<br/> it is precisely with them that
         He prefers to be! <br/>Do something beautiful for God; Many people are talking about the poor, but very few people talk to the poor.
         <br/>Love them tenderly, regarding them as your masters and yourselves<br/> as their servants.</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={feed} alt="/" />
            <img className='w-full h-full object-cover' src={help} alt="/" />
            <img className='w-full h-full object-cover' src={runners} alt="/" />
            <img className='w-full h-full object-cover' src={flames} alt="/" />
            <img className='w-full h-full object-cover' src={lv} alt="/" />
        </div>
    </div>
  )
} 

export default Destinations