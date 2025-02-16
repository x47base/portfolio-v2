"use client";

import { useEffect, useState } from "react";
import { MdWorkOutline } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Experience() {
  const [showHeader, setShowHeader] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);

  const isResumeAvailable = false;

  const experiences = [
    {
      period: "Sept 2025",
      role: "Application Developer Intern",
      company: "Lufthansa Systems FlightNav",
      companyUrl: "https://www.lhsystems.com/company/our-subsidiaries/lufthansa-systems-flightnav",
      description: "In September 2025, I'll be joining Lufthansa Systems FlightNav as an Application Developer Intern! I’m really looking forward to diving deeper into application development and bringing what I learned at Kantonsschule Hottingen and Bildungszentrum Zürichsee to real-world projects. It's exciting to have the chance to work on aviation technology and continue growing my technical skills.",
      technologies: []
    },
    {
      period: "2022 - PRESENT",
      role: "Student",
      company: "Kantonsschule Hottingen",
      companyUrl: "https://www.ksh.ch/",
      description: "As a student at Kantonsschule Hottingen in Zurich, I am actively pursuing a path in application development. Every Wednesday, I attend specialized IT modules at Bildungszentrum Zürichsee, where I gain in-depth knowledge and practical experience in various technologies. These modules provide both theoretical and hands-on learning opportunities, enhancing my skills in programming and software development.",
      technologies: [
        "JavaScript",
        "Python",
        "React",
        "Next.js",
        "Express",
        "CSS",
        "Tailwind CSS",
        "MongoDB",
        "Amazon Web Services (AWS)",
        "VS Code",
        "Bash"
      ]
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setShowHeader(true);
    }, 200);

    setTimeout(() => {
      setHideCursor(true);
    }, 800);
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-12 pb-8 xl:gap-24 xl:w-10/12">
        <motion.div
          className="flex-1 text-center items-center xl:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className={`text-3xl mb-6 text- ${showHeader ? "typewriter-line text-accent dark:text-accent" : ""} ${hideCursor ? "hidden-cursor" : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            My Experience
          </motion.h2>
          <motion.p
            className="max-w-[500px] mb-9 text-gray-900/80 dark:text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Below is a list of my professional experiences, showcasing my roles, the companies I have worked with, and the technologies I have utilized.
          </motion.p>
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              href={isResumeAvailable ? "/assets/Lebenslauf-von-Samuel-Spink.pdf" : ""}
              target={isResumeAvailable ? "_blank" : "_self"}
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className={`uppercase flex items-center justify-center gap-2 mx-auto ${isResumeAvailable ? "" : "text-red-500 dark:text-red-500 hover:text-white dark:hover:text-gray-900"
                    }`}
                >
                  <span >
                    {isResumeAvailable ? "Download My Resume" : "Resume Unavailable"}
                  </span>
                  <MdWorkOutline
                    className={`text-xl`}
                  />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex flex-col xl:flex-row justify-between bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.8 }}
            >
              <div className="text-gray-500 dark:text-gray-400 xl:w-1/4 text-left mb-4 xl:mb-0">
                <span>{exp.period}</span>
              </div>
              <div className="xl:w-3/4">
                <Link href={exp.companyUrl}>
                  <motion.span
                    className="text-xl font-satoshi font-700 text-accent dark:text-accent hover:underline"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {exp.role} - {exp.company}
                  </motion.span>
                </Link>
                <p className="mt-2 mb-4 text-gray-900/80 dark:text-white/80">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white py-1 px-3 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
