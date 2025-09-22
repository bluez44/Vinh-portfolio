import { HERO_CONTENT } from "../constants"
import profilePic from '../assets/me.jpg'
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

function Hero() {
  return (
    <div id="HeroSection" className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 2 }}
              className="text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Hi!
            </motion.h1>
            <motion.h2
              variants={container(0)}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 2 }}
              className="pb-16 text-5xl font-thin tracking-tight lg:text-7xl"
            >
              I'm Quang Vinh
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              whileInView="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Front-end developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              whileInView="visible"
              className="my-2 max-w-xl py-6 font-light text-justify tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            className="flex relative justify-center rounded-2xl"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <img
              className="rounded-3xl brightness-90"
              src={profilePic}
              alt="profile"
            />
            <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-linear-to-t from-slate-900 to-transparent rounded-3xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero