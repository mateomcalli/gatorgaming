import { useState } from 'react'
import { motion } from 'framer-motion'
import Comment from '../../../components/Comments'

const NoahGate = () => {
    const [keys, setKeys] = useState({ key1: '', key2: '', key3: ''});
    const [unlockedKeys, setUnlockedKeys] = useState({ key1: false, key2: false, key3: false })
    const [errors, setErrors] = useState('');

    const KEYS = {
        key1: 'h@ve_to_kn0w',
        key2: 'Fortnite 2',
        key3: 'incompetence',
    }

    const HINTS = ['ppl_____mu$t', 'Not Dltarn', 'full display']

    const handleChange = (e) => {
        setKeys({ ...keys, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' })
    };

    const handleSubmit = (name, e) => {
        e.preventDefault();

        if (keys[name] === KEYS[name]) {
            const updatedUnlocked = { ...unlockedKeys, [name]: true}
            setUnlockedKeys(updatedUnlocked)
            setErrors({ ...errors, [name]: ''})

            if (Object.values(updatedUnlocked).every(Boolean)) {
                window.location.href = 'https://drive.google.com/drive/folders/1e5ZRUirROyBMKBXm1D--0vQ2lNx2Hacr?usp=sharing'
            }
        } else {
            setErrors({ ...errors, [name]: 'Incorrect key'});
            setKeys({ ...keys, [name]: ''}); // Clear input
        }
    };

    return (
        <div style={{backgroundImage: "url('arg/images/lrpr.gif')", backgroundSize: 'cover', backgroundPosition: 'center'}}> 
            <div className='w-screen flex justify-center items-center min-h-screen'>
                <Comment comments={["You will find the keys", "At the end of the path", "marked with the symbol", "of Matthew's wrath"]}/>
                <div className="flex flex-row gap-4 items-start">
                    {['key1', 'key2', 'key3'].map((name, index) => (
                        <form key={name} onSubmit={(e) => handleSubmit(name, e)} className="flex flex-col items-center">
                            <input
                                type="password"
                                name={name}
                                placeholder={HINTS.at(index)}
                                value={keys[name]}
                                onChange={handleChange}
                                disabled={unlockedKeys[name]}
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', backgroundColor: 'grey'}}
                                required
                            />
                                
                            {errors[name] && (
                                <p style={{ color: 'red', fontSize: '12px', marginTop: '4px', textAlign: 'center' }}>
                                    {errors[name]}
                                </p>
                            )}

                            {unlockedKeys[name] ? (
                                <span style={{ color: 'green', fontSize: '12px', marginTop: '6px' }}>Unlocked</span>
                            ) : (
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
                            )}
                        </form>
                    ))}
                </div>
            </div>
        </div>)
}

export default NoahGate