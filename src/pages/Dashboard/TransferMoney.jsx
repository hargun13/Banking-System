import React, { useState , useEffect } from 'react'
import Sidebar from './Sidebar'
import { UserAuth } from '../../context/AuthContext';
import { database , writeUserData } from '../../Firebase';
import { getDatabase, ref , set, get , update , remove , child , onValue} from "firebase/database";

import { uid } from 'uid';


const TransferMoney = () => {

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    

    const { logOut, user } = UserAuth();
     
    var [amount , setAmount] = useState("");
    var [recEmail , setRecEmail] = useState("");
    var senderEmail = user?.email;
    var date_Time = date+' '+time;

    const handleAmountChange = (e) => {
      setAmount(e.target.value);
    }

    const handleRecEmailChange = (e) => {
      setRecEmail(e.target.value)
    }

    const writeToDatabase = () =>{
      const uuid = uid();
      
      set(ref(database , 'Transaction/' + uuid) ,{
        TransactionId: uuid,
        amount,
        date_Time,
        recEmail,
        senderEmail
      });

      setAmount("");
      setRecEmail("");

    }
    


  return (
    <div className='flex h-auto w-screen'>
        <div className='w-[16%]'><Sidebar /></div>


        <div className='w-[84%] p-10 '>
            <h1 className='text-5xl font-thin'>Hi There! Who are we paying today?</h1>

            <div className='flex items-center justify-center h-[90%] mt-5'>


                <form action="" className='flex flex-col items-center justify-center border-[1px] border-gray-400 h-[90%] w-[85%] p-10 rounded-xl'>

                    <h1 className='text-3xl text-center '>Enter the Details below</h1>

                    <input required type='email' placeholder='Enter the Senders Email' className='w-full py-2 px-2 my-5 focus:outline-none border-b-[1px] border-black' value={user?.email}/>

                    <input required type='email' placeholder='Enter the Receivers Email' className='w-full py-2 px-2 my-5 focus:outline-none border-b-[1px] border-black'
                    name='receiverEmail' 
                    value={recEmail}
                    onChange={handleRecEmailChange}/>

                    <input required type='number'placeholder='Enter the Amount ' className='w-full py-2 px-2 my-5 focus:outline-none border-b-[1px] border-black'
                    name='amount'
                    value={amount}
                    onChange={handleAmountChange}/>

                    <span className='w-full py-2 px-2 my-5 border-b-[1px] border-black'>Current Time: <span className='text-xl font-bold text-green-500 px-2'>{date_Time}</span></span>

                    <input  type='submit' className='text-xl py-2 px-4 bg-[#72e485] rounded-xl transition duration-500 hover:-translate-y-1 cursor-pointer' value="Pay Now"
                    onClick={writeToDatabase}/>

                </form>


            </div>

        </div>

    </div>
  )
}

export default TransferMoney