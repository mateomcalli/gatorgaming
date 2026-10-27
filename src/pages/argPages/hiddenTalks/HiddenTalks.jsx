
import { IoIosArrowBack } from 'react-icons/io'
import { useState, useEffect} from 'react'
import Comment from '../../../components/Comments'

const HiddenTalks = () => {
    return (
    <div style={{backgroundImage: "url('arg/images/ShowThemAll.png')"}}>
        <Comment comments={["The traitor planted his seeds.", "Can you find them?"]}/>
        <div class="flex flex-col justify-center items-center min-h-screen gap-4">
            <audio controls src="arg/audio/Officer_01.wav" ></audio>
            <audio controls src="arg/audio/Officer_02.wav" ></audio>
            <audio controls src="arg/audio/placeholder3.wav" ></audio>
            <audio controls src="arg/audio/Officer_04.wav" ></audio>
            <audio controls src="arg/audio/kaiden_audio.wav" ></audio>
            <audio controls src="arg/audio/Officer_06.wav" ></audio>
            <audio controls src="arg/audio/Officer_07.wav" ></audio>
            <audio controls src="arg/audio/Officer_08.wav" ></audio>
            <Comment comments={["cringe", "_", "wall"]}/>
        </div>
    </div>)
}

export default HiddenTalks