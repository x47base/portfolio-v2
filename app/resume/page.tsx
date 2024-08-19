"use client";
import { useEffect, useState } from "react";
import { MdWorkOutline } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Experience() {
  const [showHeader, setShowHeader] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);

  const experiences = [
    {
      period: "2022 - PRESENT",
      role: "Student",
      company: "Kantonsschule Hottingen",
      companyUrl: "https://www.ksh.ch/",
      description: "As a student at Kantonsschule Hottingen in Zurich, I am actively pursuing a path in application development. Every Wednesday, I attend specialized IT modules at Bildungszentrum Zürichsee, where I gain in-depth knowledge and practical experience in various technologies. These modules provide both theoretical and hands-on learning opportunities, enhancing my skills in programming and software development.",
      technologies: [
        // Programming Languages
        "JavaScript",
        "Python",
        
        // Web Development Frameworks
        "React",
        "Next.js",
        "Express",
        
        // Styling
        "CSS",
        "Tailwind CSS",
        
        // Database
        "MongoDB",
        
        // Cloud Services
        "Amazon Web Services (AWS)",
        
        // Development Tools
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
        <div className="flex-1 text-center xl:text-left">
          <h2 className={`text-3xl mb-6 ${showHeader ? "typewriter-line text-accent" : ""} ${hideCursor ? "hidden-cursor" : ""}`}>
            My Experience
          </h2>
          <p className="max-w-[500px] mb-9 text-white/80">
            Below is a list of my professional experiences, showcasing my roles, the companies I have worked with, and the technologies I have utilized.
          </p>
          <div className="flex flex-col gap-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <span>Download My Resume</span>
              <MdWorkOutline className="text-xl" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col xl:flex-row justify-between bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="text-gray-500 xl:w-1/4 text-left mb-4 xl:mb-0">
                <span>{exp.period}</span>
              </div>
              <div className="xl:w-3/4">
                <Link href={exp.companyUrl}>
                  <span className="text-xl font-semibold text-accent hover:underline">
                    {exp.role} - {exp.company}
                  </span>
                </Link>
                <p className="mt-2 mb-4 text-white/80">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-gray-700 text-white py-1 px-3 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
