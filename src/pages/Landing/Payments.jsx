import React from 'react'
import payments from './payments.png'
import globality from './globality.png'
import integrate from './integrate.png'

const Payments = () => {


    const data = [
        {
            logo: globality,
            heading: "Globality",
            content: "Send payments to the person in front of you and the rest of the world."
        },
        {
            logo: integrate,
            heading: "Integrate",
            content: "We work with local banks and overseas banks so you don't have to worry."
        }
    ]

  return (
    <div className='md:flex items-center justify-center md:gap-16 p-20'>

        <div>
            <h1 className='text-4xl font-bold md:leading-[60px]'>Manage regular<br /> payments easily 🤑</h1>

            <div className='flex items-center justify-center my-10 gap-11'>
                
                {data.map((data) => (
                <div>
                    <img src={data.logo} alt="logo" className='h-10 mb-10'/>

                    <h1 className='text-2xl font-medium py-5'>{data.heading}</h1>

                    <p className='py-5 font-semibold italic text-gray-400'>{data.content}</p>
                </div>
                ))}

            </div>

        </div>

        <img src={payments} alt='bank accounts image' className='shadow-2xl'/>

        

    </div>
  )
}

export default Payments