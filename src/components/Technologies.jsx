import { RiReactjsLine, RiTailwindCssFill  } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb, SiSpringboot, SiPostman } from "react-icons/si"
import { DiJava, DiBootstrap, DiScrum } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoPostgresql, BiLogoTypescript, BiLogoCPlusPlus } from "react-icons/bi"
import { LuFigma } from "react-icons/lu";

import { motion } from "framer-motion"

import styles from '../styles/Teachnologies.module.css'

import LogoRound from "./LogoRound"

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1}}
            className="my-20 text-3xl text-center md:text-4xl">Technologies</motion.h1>
        <motion.div 
            initial={{x:-100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4 lg:max-w-2/3 mx-auto mb-12 md:mb-5">
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-xl sm:text-3xl md:text-5xl lg:text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-xl sm:text-3xl md:text-5xl lg:text-7xl" />
            </motion.div>
            <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-xl sm:text-3xl md:text-5xl lg:text-7xl text-green-500" />
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoCPlusPlus className="text-xl sm:text-3xl md:text-5xl lg:text-7xl text-sky-700" />
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-xl sm:text-3xl md:text-5xl lg:text-7xl text-green-600" />
            </motion.div>
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-xl sm:text-3xl md:text-5xl lg:text-7xl text-sky-700" />
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJava className="text-xl sm:text-3xl md:text-5xl lg:text-7xl text-red-500" />
            </motion.div>
            <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoTypescript className="text-xl sm:text-3xl md:text-5xl lg:text-7xl text-sky-600" />
            </motion.div>
            <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSpringboot className="text-xl sm:text-3xl md:text-5xl lg:text-7xl text-lime-500" />
            </motion.div>
            <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-xl sm:text-3xl md:text-5xl lg:text-7xl text-sky-400" />
            </motion.div>
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiBootstrap className="text-xl sm:text-3xl md:text-5xl lg:text-7xl text-violet-600" />
            </motion.div>
            <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <AiOutlineGithub className="text-xl sm:text-3xl md:text-5xl lg:text-7xl" />
            </motion.div>
            <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <div className="rounded-full bg-white">
                    <SiPostman className="text-xl sm:text-3xl md:text-5xl lg:text-7xl text-orange-500" />
                </div>
            </motion.div>
            <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiScrum className="text-xl sm:text-3xl md:text-5xl lg:text-7xl text-blue-600" />
            </motion.div>
            <motion.div 
                variants={iconVariants(1)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <LuFigma className={`${styles.figma_custom} text-xl sm:text-3xl md:text-5xl lg:text-7xl text-blue-600`} />
            </motion.div>
            
        </motion.div>
        <motion.div
            initial={{opacity:0, y:400}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1}}
            className="relative"
        >
            <LogoRound />
        </motion.div>
    </div>
  )
}

export default Technologies