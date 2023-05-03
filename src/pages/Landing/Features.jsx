import React from 'react'
import ap from './always_protected.png'
import fs from './free_shipping.png'
import gr from './get_reward.png'
import nhf from './no_hidden_fees.png'

const Features = () => {


    const bag2 = "https://assets.website-files.com/62cc07ca0720bd63152e1799/62cd16b4a5613c06cf9a0ff4_line-bg.svg";

    const data = [
        {
            logo: ap,
            heading:"Always Protected",
            content:"Shopping with TSF Bank is even more secure thanks to Buyer Protection."
        },
        {
            logo: gr,
            heading:"Get Reward",
            content:"You can keep using your favorite card and keep getting rewards."
        },
        {
            logo: nhf,
            heading:"No Hidden Fees",
            content:"You will only be charged when selling goods or requesting payment."
        },
        {
            logo: fs,
            heading:"Free shipping",
            content:"Changed your mind after buying? Send back the item you purchased"
        },
    ]
  return (
    <div style={{backgroundImage: `url(${bag2})`, backgroundSize:'cover'}} className='h-auto flex flex-col items-center justify-center py-5'>
        
        <h1 className='text-5xl  font-bold text-center py-5'>Safe & Convenient Transaction</h1>
        <p className='md:text-2xl text-lg italic font-semibold text-gray-500 text-center my-5 px-10'>Want to pay anything so easy with the touch of a finger. Through<br /> TSF Bank, you can make practically any transaction.</p>

        <div className='grid md:grid-cols-4 grid-cols-1 place-items-center items-center justify-center m-10 '>
            
            {data.map((data) =>(

            <div className='mx-5 p-6 bg-white rounded-2xl transition duration-700 hover:-translate-y-3 hover:bg-[#72e485] hover:text-black group shadow-xl'>

                <img src={data.logo} alt="card depiction image" className='h-16 mb-14' />
                <h1 className='text-2xl font-bold my-5'>{data.heading}</h1>
                <p className='my-5 text-lg font-bold italic text-gray-300 transition duration-700 group-hover:text-black'>{data.content}</p>

            </div>

            ))}

        </div>


    </div>
  )
}

export default Features