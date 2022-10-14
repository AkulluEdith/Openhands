import React from 'react'
import SelectsCard from './SelectsCard';

import diff from '../assets/diff.jpg';
import Mo from '../assets/Mo.webp';
import flames from '../assets/flames.avif';
import teams from '../assets/teams.jpg';
import unity from '../assets/unity.avif';
import joy from '../assets/joy.avif';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={joy} text='Bora Bora' />
    <SelectsCard bg={unity} text='Maldives' />
    <SelectsCard bg={teams} text='Antigua' />
    <SelectsCard bg={flames} text='Cozumel' />
    <SelectsCard bg={Mo} text='Jamaica' />
    <SelectsCard bg={diff} text='Key West' />
    
        
    </div>
  )
}

export default Selects