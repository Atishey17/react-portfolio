import React, { useState, useEffect, useRef } from 'react';
import './Projects.css'; // Ensure your CSS file is properly set up

// Dummy data for project images and descriptions
const projects = [
    {
        id: 1,
        src: 'project1.jpg',
        alt: 'Project 1',
        title: 'Project 1 Title',
        videoUrl: 'https://youtu.be/0Xtk5qArI2Q?si=HvffjpOX2lohSiZ6',
        tools: ['Tool 1', 'Tool 2', 'Tool 3'],
        description: 'Description for Project 1'
    },
    {
        id: 2,
        src: 'project2.jpg',
        alt: 'Project 2',
        title: 'Project 2 Title',
        videoUrl: 'https://www.youtube.com/embed/your-video-id',
        tools: ['Tool A', 'Tool B', 'Tool C'],
        description: 'Description for Project 2 lorem'
    },
    // Add more projects here...
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
                        <div>
                            <h4 className="text-xl font-semibold">Description</h4>
                            <p>{selectedProject.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;
