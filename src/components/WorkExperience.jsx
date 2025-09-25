import aboutImg from "../assets/tma.webp";
import { ABOUT_TEXT, WORK_EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

function WorkExperience() {
  return (
    <div
      id="WorkExperienceSection"
      className="border-b border-neutral-900 pb-4"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Work Experience
      </motion.h2>
      {WORK_EXPERIENCE.map((work, index) => (
        <div key={index} className="flex flex-wrap items-center mb-16">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center">
              <img className="rounded-3xl w-100" src={aboutImg} alt="about" />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="text-left lg:text-justify lg:justify-start">
              <h1 className="text-2xl">
                {work.position} | {work.company.toUpperCase()}
              </h1>
              <h1 className="text-sm text-neutral-400">{work.duration}</h1>
              {Object.entries(work.description).map(([key, value], idx) => (
                <div key={idx} className="mt-4">
                  <h2 className="text-xl font-semibold">{key}</h2>
                  <p className="text-neutral-400 text-justify">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
