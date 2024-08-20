"use client";
import { useState } from "react";
import { IoChevronBack, IoChevronForward, IoLink, IoVideocam, IoImage, IoCloseCircle } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { Tooltip } from 'react-tooltip';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'images' | 'video'>('images');

  const projects = [
    {
      id: 1,
      title: "Projekte Wirtschaft - Probe IPA",
      description: "Collaboratively developed a responsive website centered on Roman economy themes. The project featured a clean, modern design with a responsive header, ensuring seamless user experience across all devices.",
      techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      images: ["/assets/project-prwr-probe-ipa-1.png"],
      link: "https://prwr.spink.dev/",
      video: null,
    },
    {
      id: 2,
      title: "Spoofify",
      description: "Developed a music page with features allowing immediate sound playback from a list, track liking, volume control, and real-time track position display. Utilized modern frameworks to enhance functionality and streamline development.",
      techStack: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bash"],
      images: ["/assets/project-spoofify-1.png"],
      link: "https://spoofify.spink.dev/",
      video: "CfCZPNMv8r0", // Only the video ID part of the URL
    },
    {
      id: 3,
      title: "Authentication Backend System",
      description: "Built a secure authentication backend with session management and JWT-based authorization. The project integrates MongoDB for data storage and uses Swagger for API documentation, providing a reliable and scalable solution for user authentication in web applications.",
      techStack: ["JavaScript", "Express", "MongoDB", "Swagger-UI"],
      images: ["/assets/project-authentication-backend-1.png"],
      link: "https://github.com/x47base/authentication-backend",
      video: null,
    },
    {
      id: 4,
      title: "Digital Accessibility Hackathon 2024 - Text-to-Speech Endpoint",
      description: "Developed a text-to-speech API endpoint during the Digital Accessibility Hackathon 2024 in Zürich. This FastAPI-based service uses pyttsx3 to convert text into audio, enhancing digital accessibility by providing speech outputs for text-based content. The solution supports real-time audio generation and streaming, aimed at improving accessibility for various applications.",
      techStack: ["Python", "FastAPI", "pyttsx3"],
      images: ["/assets/project-accessiblity-hack-24-1.png"], // No image available
      link: "https://github.com/x47base/accessiblity-hack-24",
      video: null,
    },
    {
      id: 5,
      title: "LUAshell",
      description: "LUAshell is a proof-of-concept script that embeds and executes shell commands within Lua code, leveraging Lua 5.4. It automates tasks across environments and includes security measures to mitigate risks. The tool supports various command-based attacks like HTA, PowerShell, and MSBuild, making it valuable for automation and security research.",
      techStack: ["Lua"],
      images: ["/assets/project-luashell-1.png"],
      link: "https://github.com/x47base/luashell",
      video: null,
    },
    {
      id: 6,
      title: "Zypher Executor V1.10 - UI Design",
      description: "Designed and implemented the user interface for Zypher Executor V1.10, a commissioned project. The UI was developed using Xamarin in the .NET framework on Visual Studio 2019 and integrated with a backend written in C#. The project also involved connecting the application with a custom DLL provided by the client to ensure seamless functionality.",
      techStack: [".NET", "C#", "XAMARIN"],
      images: ["/assets/project-zypher-v1-10-1.png", "/assets/project-zypher-v1-10-2.png"],
      link: "",
      video: null,
    },
    {
      id: 7,
      title: "Crysisroblox - UI Design",
      description: "Created the user interface for Crysisroblox, a custom project commissioned by a client. The UI was built using Xamarin within the .NET framework on Visual Studio 2019 and integrated with a C# backend. The application was connected to a customer-provided DLL to deliver the required features.",
      techStack: [".NET", "C#", "XAMARIN"],
      images: ["/assets/project-crysisroblox-1.png"],
      link: "",
      video: null,
    },
    {
      id: 8,
      title: "Discord Bot Template 2022",
      description: "Created a versatile template for Discord bots utilizing slash commands. The template includes essential functions, event handling, and pre-defined options to streamline the development of new Discord bots. This project serves as a foundational tool for quickly setting up and deploying bots with standard features, making it a valuable resource for developers working on Discord integrations.",
      techStack: ["Python", "Discord.py"],
      images: ["/assets/project-discord-bot-template-1.png"],
      link: "https://github.com/x47base/Discord-Template-Slash-Commands-Bot",
      video: null,
    },
    {
      id: 9,
      title: "Roblox Military Game (Version 6)",
      description: "As the Lead Scripter for the upcoming Version 6 of the British Army Roblox military group, I am responsible for developing and implementing all the code, including comprehensive frontend integrations and backend systems. This version will introduce an advanced team changer, an overhead GUI system, and several other enhancements aimed at elevating gameplay and realism. The project represents a significant upgrade, showcasing cutting-edge scripting and design to deliver an immersive military role-playing experience on Roblox.",
      techStack: ["Lua", "Roblox API"],
      images: [],
      link: "https://www.roblox.com/games/7327497219/British-Army",
      video: "QNKJ8kuQ-r8", // Only the video ID part of the URL
    },
  ];

  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);

    if (project.images.length > 0) {
      setViewMode('images');
    } else if (project.video) {
      setViewMode('video');
    }
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
                {project.images.length > 0 ? (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={350}
                    height={200}
                    className="object-cover w-full h-36 rounded-t-lg"
                  />
                ) : (
                  <Image
                    src={getYouTubeThumbnail((project.video as string))}
                    alt={project.title}
                    width={350}
                    height={200}
                    className="object-cover w-full h-36 rounded-t-lg"
                  />
                )}
                <div className="p-4 h-40 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{truncateText(project.title, 32)}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {truncateText(project.description, 60)}
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
          <div className="relative w-full h-full flex flex-col xl:flex-row overflow-y-auto p-4 xl:max-w-6xl xl:mx-auto">
            <div className="relative flex-1 flex items-center justify-center mb-4 xl:mb-0">
              {viewMode === 'video' && selectedProject.video ? (
                <div className="relative w-full h-auto">
                  <YouTubeEmbed embedId={selectedProject.video} />
                </div>
              ) : (
                <>
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={() => handleNavigate("prev")}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 shadow-lg hover:bg-gray-700 z-40"
                      >
                        <IoChevronBack className="text-2xl" />
                      </button>
                      <button
                        onClick={() => handleNavigate("next")}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 shadow-lg hover:bg-gray-700 z-40"
                      >
                        <IoChevronForward className="text-2xl" />
                      </button>
                    </>
                  )}
                  <div className="relative w-full h-auto flex justify-center">
                    <Image
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} Image ${currentImageIndex + 1}`}
                      width={800}
                      height={600}
                      className="object-contain rounded-lg"
                    />
                  </div>
                </>
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

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center rounded-lg">
              <button
                onClick={() => setViewMode('images')}
                disabled={!selectedProject.images.length}
                className={`relative px-4 py-2 rounded-l-lg transition-colors ${viewMode === 'images' ? 'bg-accent text-white' : 'bg-gray-900 text-gray-400'} ${!selectedProject.images.length ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <IoImage className="text-xl" />
                {!selectedProject.images.length && (
                  <IoCloseCircle className="absolute top-1 right-1 text-red-500" />
                )}
              </button>
              <button
                onClick={() => setViewMode('video')}
                disabled={!selectedProject.video}
                className={`relative px-4 py-2 rounded-r-lg transition-colors ${viewMode === 'video' ? 'bg-accent text-white' : 'bg-gray-900 text-gray-400'} ${!selectedProject.video ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <IoVideocam className="text-xl" />
                {!selectedProject.video && (
                  <IoCloseCircle className="absolute top-1 right-1 text-red-500" />
                )}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
