import React from 'react';
import './navbar.css';
import {AiFillContacts} from 'react-icons/ai';
//
const Navbar = () => {
    return (

        <div className='text-white
         flex justify-evenly font-bold items-center h-24 max-w-[1240px] mx-auto
                  '>
                

                <ul className='flex justify-around'>
                    <li className='p-4'>Products</li>
                    <li className='p-4'>Scheduling</li>
                    <li className='p-4'>About</li>
                </ul>
                <div>
                    <h1 className= 'text-4xl p-6 py-4 px-8 text-pink-400'>Nik Nails</h1>
                </div>

                <div>
                    <button className='flex  items-center ml-2 bg-pink-300
                    hover:bg-pink-400 pr-5 pl-5 rounded-lg
                    '
                    >
                         <AiFillContacts size={32}/>Contact
                    </button>
                </div> 
                <div>
                   
                </div>
            <div>
                
            </div>
        </div>
    )
}

export default Navbar;