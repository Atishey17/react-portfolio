import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
    // {
    //     id: 1,
    //     src: '../assets/project1.jpg',
    //     alt: 'Project 1',
    //     title: 'Project 1 Title',
    //     videoUrl: 'https://www.youtube.com/embed/kKzMYqHuztU?si=BXDdXMFrmNUAfTk1',
    //     tools: ['Tool 1', 'Tool 2', 'Tool 3'],
    //     description: 'Description for Project 1',
    //     githubRepo: 'https://github.com/your-username/project1',
    //     livePreview: 'https://your-live-preview-link.com/project1'
    // },
    {
        id: 2,
        src: '../assets/news_summary.png',
        alt: 'News Summarization',
        title: 'News Summarization',
        videoUrl: 'https://www.youtube.com/embed/v9kT_86fqb4?si=aITaZ-dzqRM5LaA0',
        tools: ['Python', 'NLP', 'Gradio', 'HTML/CSS'],
        description: 'This project is a web-based tool that translates and summarizes news articles from any given URL. It allows users to select a language for translation and choose between HTML or text file formats for the output. The application uses several key technologies to handle article extraction, translation, and file output, all through a simple web interface. Features include article extraction, translation of title and summary, and support for multiple languages. It saves the output in either HTML or plain text, providing flexibility and user-friendly operation.',
        githubRepo: 'https://github.com/Atishey17/NLP'
    },

    {
        id: 3,
        src: '../assets/atm.png',
        alt: 'ATM Simulator',
        title: 'ATM Simulator',
        tools: ['Java', 'OOP', 'Swing'],
        description: 'This project is an ATM simulator built using Java and Swing for the graphical user interface. It mimics the core functionalities of an Automated Teller Machine (ATM), including options for checking balance, withdrawing cash, depositing money, and exiting the system. The simulator maintains a simple user authentication system with PIN verification and keeps track of transaction history. The project follows object-oriented programming (OOP) principles, featuring classes for users, transactions, and accounts. The Swing framework is used to create an interactive and user-friendly interface, providing a realistic simulation of ATM operations.',
        githubRepo: 'https://github.com/Atishey17/ATM-SImulator'
    },
    {
        id: 4,
        src: '../assets/shoe_filter.png',
        alt: 'Shoe Filteration System',
        title: 'Shoe Filteration System',
        videoUrl: 'https://www.youtube.com/embed/4j7yVNfd2Vs?si=SBt8SRVHlzsG-pfa',
        tools: ['React', 'Node-JS', 'Full-Stack'],
        description: 'This project is a filtration system built for an e-commerce website using React.js for the frontend and Node.js for the backend. The system allows users to filter products based on various criteria such as price, category, brand, and rating. It dynamically updates the product listing without reloading the page, ensuring a smooth and responsive user experience. The state management ensures efficient handling of filtering logic, while the user interface is designed to be intuitive and responsive for seamless interaction. This project highlights the use of modern JavaScript frameworks to create an optimized shopping experience.',
        githubRepo: 'https://github.com/Atishey17/advanced-filtration'
    },
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const modalRef = useRef(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-8">
                {projects.map(project => (
                    <div
                        key={project.id}
                        className="relative cursor-pointer"
                        onClick={() => openModal(project)}
                    >
                        <img
                            src={project.src}
                            alt={project.alt}
                            className="w-full h-60 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
                        />
                        <div className="mt-2 text-center text-lg font-semibold">
                            {project.title}
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out opacity-100">
                    <div
                        ref={modalRef}
                        className="bg-white p-6 rounded-lg shadow-lg relative max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-content transition-transform duration-300 ease-in-out transform scale-100"
                        style={{ transform: selectedProject ? 'scale(1)' : 'scale(0.9)' }}
                    >
                        {/* Project Title */}
                        <h3 className="text-2xl font-semibold mb-4">{selectedProject.title}</h3>

                        {/* YouTube Video */}
                        {selectedProject.videoUrl && (
                            <div className="mb-4">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={selectedProject.videoUrl}
                                    title={`${selectedProject.title} Video`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}

                        {/* Technologies */}
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tools.map((tool, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-gray-200 rounded-full text-gray-700 text-sm font-medium"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Project Description */}
                        <div className="mb-4">
                            <h4 className="text-xl font-semibold">Description</h4>
                            <p>{selectedProject.description}</p>
                        </div>

                        {/* GitHub Repository and Live Preview Links */}
                        <div className="mt-4 flex flex-col gap-2">
                            {selectedProject.githubRepo && (
                                <a
                                    href={selectedProject.githubRepo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    GitHub Repository
                                </a>
                            )}
                            {selectedProject.livePreview && (
                                <a
                                    href={selectedProject.livePreview}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    Live Preview
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;
