import React from 'react'
import Navbar from '../../components/Navbar'
import AppStore from './app_store.png'
import PlayStore from './play_store.png'
import Phone from './phone.png'

const Hero = () => {

    const bag2 = "https://assets.website-files.com/62cc07ca0720bd63152e1799/62cd16b4a5613c06cf9a0ff4_line-bg.svg";

  return (
    <div className='h-auto bg-[#455545] pb-20 ' style={{backgroundImage: `url(${bag2})`, backgroundSize:'cover'}}>
        <Navbar />

        <div className='md:flex w-full items-center justify-center mt-5 text-white'>


            <div className='md:w-[60%] px-16'>
                <h1 className='md:text-6xl text-5xl font-semibold py-5 md:leading-[60px]'>More Payment Options<br /> Better than Cash</h1>

                <p  className='md:text-2xl text-lg font-medium italic py-5'>With a TSF Bank  you can access the more than 240 million customers out there, as well as offering management tools, options, and payment methods.</p>

                <div className='md:flex gap-5 py-5'>
                    <img src={AppStore} alt="app store" className='h-20 my-2'/>
                    <img src={PlayStore} alt="play store" className='h-20 my-2' />
                </div>

                <p className='text-2xl font-semibold py-5'>Excellent <span className='text-[#72e485] text-2xl'>4.9 out of 5 ⭐⭐⭐⭐⭐  </span></p>
            </div>

            <div className='md:w-[40%] flex justify-center'>
                <img src={Phone} alt="app store" className='h-[33rem] my-2 rounded-2xl'/>
            </div>


        </div>


    </div>
  )
}

export default Hero