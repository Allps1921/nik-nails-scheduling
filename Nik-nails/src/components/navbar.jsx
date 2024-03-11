import React, {useState} from 'react';
import './navbar.css';
import {AiFillContacts, AiOutlineMenuFold, AiOutlineClose} from 'react-icons/ai';
//
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className>
            <head className='text-white
            flex justify-evenly font-bold items-center h-24 max-w-[1242px] mx-auto
            '>
                <ul className='flex hidden justify-around'>
                    <li className='p-4'>Catalog</li>
                    <li className='p-4'>Scheduling</li>
                    <li className='p-4'>About</li>
                  
                </ul>

                {/* useState to close the menu*/}
                <div onClick={handleNav} className='transform rotate-180 text-sky-300' >
                    {!nav ? <AiOutlineClose size={24}/> : <AiOutlineMenuFold size={24} />}
                </div>

                <div className={!nav ? 'fixed text-white text-left h-full border-r border-zinc-600 top-0 left-0' : 'fixed hidden'}>
                    <ul className='pt-20 pl-0.1' >
                        <li className='p-4 border-b border-zinc-600'>Catalog</li>
                        <li className='p-4 border-b border-zinc-600'>Scheduling</li>
                        <li className='p-4 border-b border-zinc-600'>About</li>
                    </ul>
                </div>

                <div>
                    <h1 className= 'text-3xl p-6 py-4 px-8 text-sky-300'>Nik Nails</h1>
                </div>

                <div>
                    <button className='flex g-1 items-center ml-2 bg-zinc-100 text-sky-300
                        hover:bg-sky-400 pr-2 pl-2 rounded-lg p-1 
                        '
                    >
                        <AiFillContacts size={30}/>
                    </button>
                </div> 
            </head>
            <div>
                <main>

                </main>
            </div>
            <div>
                <footer>

                </footer>
            </div>
        </div>
    )
}

export default Navbar;