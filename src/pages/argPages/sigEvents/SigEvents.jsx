import { useState, useEffect, useRef} from 'react'
import Comment from '../../../components/Comments'

const SigEvents = () => {
    return (
    <div 
    className="w-screen h-screen max-h-screen overflow-hidden flex flex-col justify-center bg-cover bg-center"
    style={{ backgroundImage: "url('arg/images/ShowThemAll.png')" }}
    >
        <div className="flex flex-row justify-center items-center gap-4 p-4 box-border h-full max-h-full min-h-0">
            <div className="flex-1 h-full max-h-full min-h-0 flex items-center justify-center">
                <Comment comments={["He never saw the message", "Too busy playing switch"]}/>
                <img 
                    src="arg/images/sigSheet.jpg" 
                    className="max-w-full max-h-full object-contain" 
                    alt="Noah"
                />
            </div>
            <Comment comments={["Why would Zack go to Sig Events? What is there for him?"]}/>
        </div>
    </div>)
}

export default SigEvents