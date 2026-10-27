import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Comment from '../../../components/Comments'

const NoahPw = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const PASSWORD = ["beforehecheats", "before he cheats", "before_he_cheats", "before-he-cheats"]

    const handleChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    };

    const handleSubmit = ( e) => {
        e.preventDefault();

        if (PASSWORD.includes(password.toLowerCase())) {
            setError('')
            navigate('/whereHeWas', { replace: true })
        } else {
            setError('Incorrect. Try again');
            setPassword('')
        }
    };

    return (
        <div style={{backgroundImage: "url('arg/images/ShowThemAll.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}> 
            <div className='w-screen flex justify-center items-center min-h-screen'>
                <div className="flex flex-col gap-4 items-center">
                    <Comment comments={["What did the secretary sing?"]}/>
                    <p class='flex flex-col items-center text-2xl font-bold'>The song that marked the Betrayer's loss (NAME ONLY)</p>
                    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center">
                        <input
                            type="password"
                            placeholder={'Enter'}
                            value={password}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', backgroundColor: 'grey'}}
                            required
                    />  
                    {error && (<p style={{ color: 'red', fontSize: '12px', marginTop: '4px', textAlign: 'center' }}></p>)}
                        <motion.button
                            whileHover={{
                                backgroundColor: 'rgb(244, 126, 32, 0.6)',
                                transition: { duration: 0.3 },
                            }}
                            className='font-display hover:cursor-pointer px-3 py-1 rounded-md mt-2 text-sm border bg-black'
                            type='submit'
                            >
                            Unlock
                        </motion.button>
                    </form>
                </div>
            </div>
        </div>)
}

export default NoahPw