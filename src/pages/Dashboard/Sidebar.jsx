import React,{useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { GrTransaction } from 'react-icons/gr'
import { BsPeopleFill , BsFillMicFill } from 'react-icons/bs'
import { MdSend } from 'react-icons/md'
import { IoMdLogOut } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
// import Popup from 'reactjs-popup';
import { UserAuth } from '../../context/AuthContext';
import { Link , Navigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Popup from 'reactjs-popup';



const Sidebar = () => {

    const { logOut, user } = UserAuth();

    const handleSignOut = async () => {
        try {
        await logOut();
        } catch (error) {
        console.log(error);
        }
    };

    // const [selected, setSelected] = useState("Pension Management");
    const navigate = useNavigate();
    const [redirectUrl, setRedirectUrl] = useState("");
    const commands = [
        {
        command: ["Go to * page", "Go to *", "Open * page", "Open *"],
        // callback: (redirectPage) => setRedirectUrl(redirectPage),
        callback: (redirectPage) => setRedirectUrl(redirectPage.replace(/ /g, "_")),
        },
    ];
    const { transcript } = useSpeechRecognition({ commands });

    useEffect(() => {
        redirectUrl && navigate(`/${redirectUrl}`)
    }, [redirectUrl])

    const pages = ["transactions", "people", "transfer" ];
    const urls = {
        transactions: "/transactions",
        people: "/people",
        transfer: "/transfermoney",
    };

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }

    let redirect = "";

      if (redirectUrl) {
        console.log(redirectUrl);
        if (pages.includes(redirectUrl)) {
          redirect = <Navigate to={urls[redirectUrl]} />;
        } else {
          redirect = <p>Could not find page: {redirectUrl}</p>;
        }
      }


  return (
    <div className='h-screen border-r-[1px] border-gray-300 p-6 flex flex-col justify-between shadow-2xl'>

        <div>
            <h1 className='text-3xl font-normal mb-10' >TSF BANK</h1>

            <ul>
                <Link to="/transactions"><li className='text-lg py-3 px-2 my-4 font-normal flex items-center gap-2 transition duration-300 rounded-lg hover:bg-[#72e485] cursor-pointer'><GrTransaction/>Transactions</li></Link>

                <Link to="/people"><li className='text-lg py-3 px-2 my-4 font-normal flex items-center gap-2 transition duration-300 rounded-lg hover:bg-[#72e485] cursor-pointer'><BsPeopleFill/>People</li></Link>

                <Link to="/transfer"><li className='text-lg py-3 px-2 my-4 font-normal flex items-center gap-2 transition duration-300 rounded-lg hover:bg-[#72e485] cursor-pointer'><MdSend/>Transfer Money</li></Link>

                <Popup trigger=
                            {<li>
                            <Link className='text-lg py-3 px-2 my-4 font-normal flex items-center gap-2 transition duration-300 rounded-lg hover:bg-[#72e485] cursor-pointer'>
                                <span className="icon">
                                <BsFillMicFill></BsFillMicFill>
                                </span>
                                <span>Voice Nav</span>
                            </Link>
                            </li>}
                            position="right center" 
                >
                  <div className="bg-[#101010] text-white pt-5 px-8 pb-5 w-full mx-16 mb-16 rounded-lg">
                    <h1 className="py-5 text-center text-xl">Voice Assisted Tab Navigation</h1>
                    <p className="py-5">Transcript: </p>
                    <span className="text-white">{transcript}</span>
                    <div className=" flex items-center justify-center">
                    <button className="bg-[#72e485] transition duration-300 hover:text-black px-5 py-2 rounded-full "
                    onClick={SpeechRecognition.startListening}>Start</button>
                    </div>
                  </div>
          </Popup>
          
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