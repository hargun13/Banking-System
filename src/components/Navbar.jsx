import React,{useState, useEffect} from 'react';
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


function Navbar() {

    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
    try {
        await googleSignIn();
    } catch (error) {
        console.log(error);
    }
    };

    useEffect(() => {
    if (user != null) {
        navigate('/DashBoard');
    }
    }, [user]);

    const [nav,setNav] = useState(false);

    const handleNav =()=>{
        setNav(!nav);
    };


  return (
    <div className='text-white flex justify-between mx-auto px-5 p-3 h-20  items-center '>

        <a href='/' className='text-4xl px-14 font-bold'>TSF Bank</a>
        
        <ul className='hidden md:flex font-thin text-xl'>
            <a href='/About'><li className='p-1 px-14 transition duration-300 hover:text-[#72e485]  cursor-pointer'>About</li></a>
            <a href='/About'><li className='p-1 px-14 transition duration-300 hover:text-[#72e485]  cursor-pointer'>Learn</li></a>
            <a href='/About'><li className='p-1 px-14 transition duration-300 hover:text-[#72e485]  cursor-pointer'>Community</li></a>

        </ul>

        <ul className='hidden md:flex font-thin text-xl'>
            <li className='p-2 px-10 transition duration-300 hover:text-[#72e485]  cursor-pointer'>
                Login
            </li>
            <li className='p-2 px-4  bg-[#72e485] rounded-xl transition duration-300 hover:text-black  cursor-pointer'>
                <button onClick={handleGoogleSignIn}>
                    Get Started
                </button>
            </li>
        </ul>    

        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu className='cursor-pointer' size={30} /> : <AiOutlineClose className='cursor-pointer' size={30}/> }
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[80%] h-screen bg-[#1b1a1a] opacity-95 p-4 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] top-0 w-[80%] h-full p-4'}>
        <a href='/' className='text-4xl px-4 font-bold'>TSF Bank</a>
            <ul className='pt-10 uppercase h-screen '>
    
                <a href='/About'><li className='py-5 px-4 text-2xl hover:text-[#72e485] cursor-pointer'>About</li></a>
                <a href='/Contact'><li className='py-5 px-4 text-2xl hover:text-[#72e485] cursor-pointer'>Contact</li></a>
                <a href='/Login'><li className='py-5 px-4 text-2xl hover:text-[#72e485] cursor-pointer'>Login</li></a>
                <a href='/Register'><li className='py-5 px-4 text-2xl hover:text-[#72e485]  cursor-pointer'>Register</li></a> 

            </ul>
        
        </div>

    </div>
  );
};

export default Navbar