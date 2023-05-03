import React from 'react'
import Sidebar from './Sidebar'
import TransactionsTable from './TransactionsTable'

const Transactions = () => {
  return (
    <div className='flex h-auto w-screen'>
        <div className='w-[16%]'><Sidebar /></div>


        <div className='w-[84%] p-10'>
            
            <div className='flex items-center gap-20 mb-10'>
                <h1 className='text-5xl font-normal'>Your Transactions</h1>

                <form className='w-[50%]'>   
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>

                        </div>

                        <input type="search" id="default-search" 
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none " placeholder="Search Transactions..." required />

                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#72e485]  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                    </div>
                </form>

            </div>

            <div><TransactionsTable /></div>


        </div>

    </div>
  )
}

export default Transactions