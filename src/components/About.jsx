import aboutImg from '../assets/me 2.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

function About() {
  return (
    <div id="AboutSection" className="border-b border-neutral-900 pb-4">
        <motion.h2 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:0.5}}
            className="my-20 text-center text-4xl">
            About Me
        </motion.h2>
        <div className="flex flex-wrap items-center">
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className='rounded-3xl w-100' src={aboutImg} alt="about" />
                </div>
            </motion.div>
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:0.5}}
                className='w-full lg:w-1/2'>
                <div className='flex justify-center text-justify lg:justify-start'>
                    <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About