import { useState, useEffect, useRef} from 'react'
import Comment from '../../../components/Comments'

const NoahDM = () => {
    return (
    <div 
    className="w-screen h-screen max-h-screen overflow-hidden flex flex-col justify-center bg-cover bg-center"
    style={{ backgroundImage: "url('arg/images/ShowThemAll.png')" }}
    >
        <div className="flex flex-row justify-center items-center gap-4 p-4 box-border h-full max-h-full min-h-0">
            <div className="flex-1 h-full max-h-full min-h-0 flex items-center justify-center">
                <img 
                    src="arg/images/Matt_Noah.png" 
                    className="max-w-full max-h-full object-contain" 
                    alt="Noah"
                />
            </div>
        </div>
    </div>)
}

export default NoahDM