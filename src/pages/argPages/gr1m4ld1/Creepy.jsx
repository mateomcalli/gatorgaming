import { useState, useEffect, useRef} from 'react'
import Comment from '../../../components/Comments'

const Creepy = () => {
    return (
    <div class="bg-red-700 flex items-center gap-4">
        <Comment comments={["What you need is further down"]}/>
        <img style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}} src='arg/images/Red_horror_face.webp'>
        </img>
        <Comment comments={["Keep Looking..."]}/>
        <div class="flex flex-col items-start gap-8">
            <header class="text-8xl h-full leading-none">Find what you are looking for?</header>
            <p class="text-red-700 text-3xl">/s1g_3v3nt5</p>
        </div>
    </div>)
}

export default Creepy