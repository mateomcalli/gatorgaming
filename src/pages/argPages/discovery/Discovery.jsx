import { AnimatePresence, motion } from 'framer-motion'
import { IoIosArrowBack } from 'react-icons/io'
import { useState, useEffect, useRef} from 'react'
import Comment from '../../../components/Comments'

const Discovery = () => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const playOrPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <div className="w-full min-h-screen bg-center bg-[url('arg/images/ShowThemAll.png')] bg-cover">
            <div className="flex flex-col justify-center items-center max-w-screen h-screen p-5 overflow-hidden box-border">
            <Comment comments={["Why would he go to the locker?"]}/>
                <video 
                ref={videoRef}
                src="arg/video/HidingTheBody.mp4"
                poster="arg/images/clickMe.jpg" 
                preload="metadata"
                onClick={playOrPause}
                className="block rounded-lg cursor-pointer max-w-full max-h-full w-auto h-auto object-contain"
                />
            </div>
        </div>)
}

export default Discovery