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
        <div>
            <head className='text-white
            flex justify-evenly font-bold items-center h-24 max-w-[1242px] mx-auto
            '>
                <ul className='flex hidden justify-around'>
                    <li className='p-4'>Catalog</li>
                    <li className='p-4'>Scheduling</li>
                    <li className='p-4'>About</li>
                  
                </ul>

                {/* useState to close the menu*/}
                <div onClick={handleNav} className='transform rotate-180 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-220 hover:bg-sky-500 duration-300 p-2
                    rounded-lg' >
                    {!nav ? <AiOutlineClose size={24}/> : <AiOutlineMenuFold size={24} />}
                </div>

                <div className={!nav ? 'fixed text-white text-left h-full border-r border-zinc-600 top-20 left-0 ease-in-out duration-300' : 'ease-in-out duration-300 fixed h-32 hidden'}>
                    <ul className='pt-1 pl-0.1' >
                        <li className='p-4 border-b border-zinc-600'>Catalog</li>
                        <li className='p-4 border-b border-zinc-600'>Scheduling</li>
                        <li className='p-4 border-b border-zinc-600'>About</li>
                    </ul>
                </div>

                <div>
                    <h1 className= 'text-3xl p-6 py-4 px-8 text-sky-300'>Nik Nails</h1>
                </div>

                <div>
                    <button className='transition ease-in-out delay-15 bg-sky-400 hover:-translate-y-1 hover:scale-220 hover:bg-sky-500 duration-300 p-2
                    rounded-lg
                    '
                    >
                        <AiFillContacts size={24}/>
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