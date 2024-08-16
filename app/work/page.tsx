"use client";
import { useState } from "react";
import { IoChevronBack, IoChevronForward, IoLink } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";
import { Tooltip } from 'react-tooltip';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Projekte Wirtschaft - Probe IPA",
      description: "Collaboratively developed a responsive website centered on Roman economy themes. The project featured a clean, modern design with a responsive header, ensuring seamless user experience across all devices.",
      techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      images: ["/assets/project-prwr-probe-ipa-1.png"],
      link: "https://prwr.spink.dev/",
    },
    {
      id: 2,
      title: "Spoofify",
      description: "Developed a music page with features allowing immediate sound playback from a list, track liking, volume control, and real-time track position display. Utilized modern frameworks to enhance functionality and streamline development.",
      techStack: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bash"],
      images: ["/assets/project-spoofify-1.png"],
      link: "https://spoofify.spink.dev/",
    },
    {
      id: 3,
      title: "Project 3",
      description: "A brief description of Project 3.",
      techStack: ["Javascript", "HTML", "CSS", "Tailwind CSS"],
      images: ["/assets/placeholder.jpg", "/assets/placeholder.jpg"],
      link: "https://example.com/project-3",
    },
    {
      id: 4,
      title: "Project 4",
      description: "A brief description of Project 4.",
      techStack: ["Node.js", "Express"],
      images: ["/assets/placeholder.jpg"],
      link: "",
    },
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNavigate = (direction: "prev" | "next") => {
    if (!selectedProject) return;
    const imagesCount = selectedProject.images.length;
    if (direction === "prev") {
      setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : imagesCount - 1));
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex < imagesCount - 1 ? prevIndex + 1 : 0));
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const visibleTechStack = (techStack: string[], maxVisible: number) => {
    if (techStack.length > maxVisible) {
      return {
        visible: techStack.slice(0, maxVisible),
        hidden: techStack.slice(maxVisible),
      };
    }
    return { visible: techStack, hidden: [] };
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full flex flex-col items-center justify-center xl:justify-between gap-12 pb-8 xl:w-10/12">
        <div className="flex-1 text-center">
          <h2 className="text-3xl mb-6 text-accent">My Projects</h2>
          <p className="max-w-[500px] mb-9 text-muted-foreground">
            Explore a selection of my projects that highlight my expertise in application development. Click on a project to learn more.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {projects.map((project) => {
            const { visible, hidden } = visibleTechStack(project.techStack, 3);
            return (
              <div
                key={project.id}
                className="relative cursor-pointer bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 max-w-xs w-full"
                onClick={() => handleProjectClick(project)}
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={350}
                  height={200}
                  className="object-cover w-full h-36 rounded-t-lg"
                />
                <div className="p-4 h-40 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {truncateText(project.description, 60)} {/* Adjust character limit as needed */}
                    </p>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="flex flex-wrap gap-2">
                      {visible.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-700 text-white text-center py-1 px-3 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {hidden.length > 0 && (
                        <span
                          data-tooltip-id={`tooltip-${project.id}`}
                          data-tooltip-content={hidden.join(", ")}
                          className="bg-gray-700 text-white text-center py-1 px-3 rounded-full text-sm cursor-pointer"
                        >
                          +{hidden.length}
                        </span>
                      )}
                      <Tooltip id={`tooltip-${project.id}`} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <Modal onClose={handleCloseModal}>
          <div className="relative w-full h-full flex flex-col xl:flex-row p-4 xl:max-w-6xl xl:mx-auto">
            <div className="relative flex-1 flex items-center justify-center overflow-hidden mb-4 xl:mb-0">
              {selectedProject.images.length > 1 && (
                <button
                  onClick={() => handleNavigate("prev")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 shadow-lg hover:bg-gray-700 z-40"
                >
                  <IoChevronBack className="text-2xl" />
                </button>
              )}
              <div className="relative w-full h-full flex justify-center">
                <Image
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} Image ${currentImageIndex + 1}`}
                  width={800}
                  height={600}
                  className="object-contain max-h-full max-w-full rounded-lg"
                />
              </div>
              {selectedProject.images.length > 1 && (
                <button
                  onClick={() => handleNavigate("next")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 shadow-lg hover:bg-gray-700 z-40"
                >
                  <IoChevronForward className="text-2xl" />
                </button>
              )}
            </div>

            <div className="flex flex-col justify-between xl:w-1/2 xl:pl-8">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{selectedProject.title}</h2>
                <p className="mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.techStack.map((tech: any, index: any) => (
                    <span key={index} className="bg-gray-700 text-white py-1 px-3 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {selectedProject.link && (
                <div className="mt-4 xl:mt-0 flex justify-end">
                  <Link
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:text-blue-300"
                  >
                    <span className="mr-2 text-sm">View Project</span>
                    <IoLink className="text-lg" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
