import { AnimatePresence, motion } from 'framer-motion'
import { IoIosArrowBack } from 'react-icons/io'
import { useState, useEffect} from 'react'
import Comment from '../../../components/Comments'

const Wherabouts = () => {
    return (
    <div 
    className="w-screen h-screen max-h-screen overflow-hidden flex flex-col justify-center bg-cover bg-center"
    style={{ backgroundImage: "url('arg/images/ShowThemAll.png')" }}
    >
    <div className="flex flex-row justify-center items-center gap-4 p-4 box-border h-full max-h-full min-h-0">
        <div className="flex-1 h-full max-h-full min-h-0 flex items-center justify-center">
        <img 
            src="arg/images/noah.jpg" 
            className="max-w-full max-h-full object-contain" 
            alt="Noah"
        />
        </div>

        <div className="flex flex-shrink-0 flex-col justify-center items-start gap-16">
            <h3>5:30PM, 10/27/2026 🔺</h3>
            <Comment comments={["m3Rg3r"]} />
            <audio controls src="arg/audio/Kaiden_Meeting.wav"></audio>
        </div>

    </div>
    </div>)
}

export default Wherabouts