import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 5,
      link: 'contact'
    },
  ]

  return (
    <div className='flex justify-between items-center text-white bg-black px-4 h-20 w-full fixed'>
      <div>
        <h1 className='text-5xl ml-2 font-signature' >Yashraj</h1>
      </div>

      <ul className='hidden md:flex'>

        {links.map(({id,link})=>(
            <li key={id} className='px-4 capitalize cursor-pointer hover:scale-110 duration-200 text-gray-500 font-medium'>
            {link}
          </li>
        ))}

      </ul>

      <div onClick={()=>{setnav(!nav)}} className='cursor-pointer pr-4 z-10 text-gray-500  md:hidden'>
        {nav ? <FaTimes size={30}/> : <FaBars md-780 size={30} />}
        
      </div>
      
      {nav && (<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
      {links.map(({id,link})=>(
            <li key={id} className='px-4 capitalize cursor-pointer text-4xl py-6'>
            {link}
          </li>
        ))}
      </ul>
)}
      
    </div>
  )
}

export default Navbar