import React from 'react'
import cashflow from './cash_flow.png'
import {AiOutlineArrowRight} from 'react-icons/ai'

const CashFlow = () => {
  return (
    <div className='md:flex items-center justify-center md:gap-16 p-20'>

        <img src={cashflow} alt='bank accounts image ' className='shadow-2xl ' />

        <div>
            <h1 className='text-4xl font-bold md:leading-[60px]'>Keep your cash flow clear 💸and keep increasing 🚀</h1>
            <p className='text-xl font-normal italic text-gray-400 py-5'>See it all at a glance when you link your cash <br/>accounts, credit cards, investments, and bills.</p>
            <button className='flex items-center justify-center gap-4 px-5 py-2 my-5 text-xl font-medium rounded-2xl bg-[#72e485] group '> Try for now <AiOutlineArrowRight className='transition duration-700 group-hover:translate-x-1 ' /></button>
        </div>

    </div>
  )
}

export default CashFlow