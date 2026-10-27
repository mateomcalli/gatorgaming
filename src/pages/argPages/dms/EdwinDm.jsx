import { useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import Comment from '../../../components/Comments'

const EdwinDM = () => {
    const navigate = useNavigate()
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

    useEffect(() => {

        const timer = setTimeout(() => {
            navigate('/gr1m4ld1')
        }, 10000)

        return () => clearTimeout(timer)
    }, [navigate])


    return (
        <div className="w-full min-h-screen bg-center bg-[url('arg/images/ShowThemAll.png')] bg-cover">
            <div className="flex flex-col justify-center items-center max-w-screen h-screen gap-4 p-5 overflow-hidden box-border">
            <h3 className="text-xl text-red-800 font-extrabold">If only he had more time...</h3>
            <Comment comments={["Those who know"]}/>
                <video 
                ref={videoRef}
                src="arg/video/Matt_Edwin.mp4"
                poster="arg/images/Matt_Edwin.png" 
                preload="metadata"
                onClick={playOrPause}
                className="block rounded-lg cursor-pointer max-w-full max-h-full w-auto h-auto object-contain"
                />
            </div>
        </div>)
}

export default EdwinDM