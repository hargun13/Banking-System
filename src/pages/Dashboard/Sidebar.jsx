import React from 'react'
import { GrTransaction } from 'react-icons/gr'
import { BsPeopleFill } from 'react-icons/bs'
import { MdSend } from 'react-icons/md'
import { IoMdSettings, IoMdLogOut } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
// import Popup from 'reactjs-popup';
import { UserAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom'


const Sidebar = () => {

    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
        try {
        await logOut();
        } catch (error) {
        console.log(error);
        }
    };

  return (
    <div className='h-screen border-r-[1px] border-gray-300 p-6 flex flex-col justify-between shadow-2xl'>

        <div>
            <h1 className='text-3xl font-normal mb-10' >TSF BANK</h1>

            <ul>
                <Link to="/Transaction"><li className='text-lg py-3 px-2 my-4 font-normal flex items-center gap-2 transition duration-300 rounded-lg hover:bg-[#72e485] cursor-pointer'><GrTransaction/>Transactions</li></Link>

                <Link to="/People"><li className='text-lg py-3 px-2 my-4 font-normal flex items-center gap-2 transition duration-300 rounded-lg hover:bg-[#72e485] cursor-pointer'><BsPeopleFill/>People</li></Link>

                <Link to="/TransferMoney"><li className='text-lg py-3 px-2 my-4 font-normal flex items-center gap-2 transition duration-300 rounded-lg hover:bg-[#72e485] cursor-pointer'><MdSend/>Transfer Money</li></Link>
            </ul>
        </div>

        <div>
            <ul>
            <li className='text-lg py-2 px-2 my-4 font-normal flex items-center gap-2 transition duration-300 rounded-lg hover:bg-[#72e485] cursor-pointer'><CgProfile/>{user?.displayName}</li>

            <li className='text-lg px-2 font-normal flex items-center gap-2 transition duration-300 rounded-lg hover:bg-[#72e485] border-[1px] border-black '></li>

            <li className='text-lg py-2 px-2 my-4 font-normal flex items-center gap-2 transition duration-300 rounded-lg hover:bg-[#72e485] cursor-pointer' onClick={handleSignOut}><IoMdLogOut/>Logout</li>

            </ul>
        </div>

    </div>
  )
}

export default Sidebar