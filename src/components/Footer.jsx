import React from 'react'
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-[#101010] text-white'>

        <div className='md:flex items-center justify-between w-full p-14 border-b-2 border-gray-400'>

            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-semibold'>TSF Bank</h1>

                <div className='flex gap-3 py-8'>
                    <AiFillFacebook size={35}/>
                    <AiFillInstagram size={35}/>
                    <BsDiscord size={35}/>
                </div>
            </div>

            <div className='flex items-center justify-around gap-10 text-lg font-semibold'>
                <div className='w-52 italic'>
                    <p>Technology Park 8-14 Rabindranath Tagore Street 400050 India</p>
                </div>

                <div>
                    <ul>
                        <li>About</li>
                        <li>Learn</li>
                        <li>Community</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>Legal Mentions</li>
                        <li>Terms Of Services</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>

        </div>

        <div>
            <h1 className='text-center p-10 text-xl'>© 2022 COPYRIGHT BY TSF BANK</h1>
        </div>
    </div>
  )
}

export default Footer