import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { FaFacebook,FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa'


const Sidebar = () => {
    //var greetings=['Heaven','Home','Chestnut','Openhands']
    const [nav,setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }
    
  return (
    <div>
        {/* FULL SCREEN NAVBAR */}
        <div className='flex justify-between items-center h-10 px-4 z-10 md:visible'>
            <div className='flex'>
                <h1>Openhands</h1>
            </div>
            <ul className='flex'>
                <li>Home</li>
                <li>Info</li>
                <li>Donations</li>
                <li>Events</li>
                <li>Contact us</li>
            </ul>
            <div className='flex p-3'>
                <BiSearch className='icon'/>
                <BsPerson className='icon'/>
            </div>
        </div>
        {/* MOBILE SCREEN NAVBAR */}
        <div className='visible md:invisible z-10'>
           <div>
                <h1>Openhands.</h1>
           </div>
           <div>
                <ul className=''>
                    <li>Home</li>
                    <li>Info</li>
                    <li>Donations</li>
                    <li>Events</li>
                    <li>Contact us</li>
                </ul>
                
                <button>Search</button>
                <button>Account</button>
            </div>
            <div className='flex justify-between w-1/4 my-3'>
                <FaFacebook/>
                <FaInstagram/>
                <FaPinterest/>
                <FaTwitter/>
            </div>
        </div>
    </div>
    
  )
}

export default Sidebar