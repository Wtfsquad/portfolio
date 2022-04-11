import {motion} from 'framer-motion';
import {useState} from 'react';

function App(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="App">
            <motion.div className='card'>
                <motion.h2>
                    Framer motion
                </motion.h2> 
                {isOpen && (
                    <motion.div>
                        <p>
                            blahblahblah
                        </p>
                        <p>
                            blahblahblah
                        </p>
                    </motion.div>)
                }
            </motion.div>
        </div>
    )
}

export default App
