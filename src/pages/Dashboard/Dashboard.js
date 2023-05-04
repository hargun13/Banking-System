import React from 'react'
import { UserAuth } from '../../context/AuthContext';
import Sidebar from './Sidebar';
import Typical from 'react-typical'

const Dashboard = () => {

    const { logOut, user } = UserAuth();

  return (
    <div className='flex h-auto w-screen'>
        <div className='w-[20%]'><Sidebar /></div>


        <div className='w-[80%] flex items-center justify-center'>

            <h1 className='text-7xl font-thin  '>

                Welcome &nbsp;
                <Typical
                    loop = {Infinity}
                    wrapper='b'
                    steps ={[
                        user?.displayName,
                        7000,   
                        'To TSF Bank!', 
                        7000,
                        'Aboard!',
                    ]}
                    className='font-thin' 
                />

            </h1>

        </div>


    </div>
  )
}

export default Dashboard