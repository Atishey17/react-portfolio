// import React, { useState, useEffect, useRef } from 'react';

// // Dummy skills data
// const skills = [
//     { name: 'JavaScript', level: 4 },
//     { name: 'React', level: 5 },
//     { name: 'CSS', level: 3 },
//     { name: 'Node.js', level: 4 },
//     { name: 'Python', level: 3 },
// ];

// function Skills() {
//     const [isInView, setIsInView] = useState(false); // To track if skills are in view
//     const skillsRef = useRef(null); // Reference to the skills container

//     // This hook checks if the element is in view
//     useEffect(() => {
//         const handleScroll = () => {
//             const rect = skillsRef.current.getBoundingClientRect();
//             if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//                 setIsInView(true);
//             }
//         };

//         // Listen to the scroll event
//         window.addEventListener('scroll', handleScroll);

//         // Cleanup the event listener
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div className="flex flex-col items-center justify-center p-4 md:p-8">
//             <div ref={skillsRef} className="flex flex-col items-center bg-slate-200 p-6 md:p-8 rounded-lg shadow-lg w-full">
//                 <h3 className="text-center text-4xl font-bold mb-4">My Skills</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
//                     {skills.map((skill, index) => (
//                         <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
//                             <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
//                             <div className="flex gap-1">
//                                 {[...Array(5)].map((_, i) => (
//                                     <div
//                                         key={i}
//                                         className={`w-6 h-6 rounded-full transition-all duration-1000 ease-in-out ${isInView && i < skill.level ? 'bg-blue-500' : 'bg-gray-300'
//                                             }`}
//                                         style={{
//                                             transitionDelay: `${i * 200}ms`, // Add delay to each block for smoother animation
//                                         }}
//                                     ></div>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Skills;




import React, { useState, useEffect, useRef } from 'react';

// Skills categorized into Languages, Databases, Frameworks, Developer Tools
const skillsData = {
    Languages: [
        { name: 'C++', level: 4 },
        { name: 'JavaScript', level: 5 },
        { name: 'Java', level: 4 },
        { name: 'Python', level: 3 },
        { name: 'HTML/CSS', level: 5 },
    ],
    Databases: [
        { name: 'MySQL', level: 4 },
        { name: 'PostgreSQL', level: 3 },
    ],
    Frameworks: [
        { name: 'React JS', level: 5 },
        { name: 'Node JS', level:3 },
    ],
    DeveloperTools: [
        { name: 'VS Code', level: 5 },
    ],
};

function Skills() {
    const [isInView, setIsInView] = useState(false); // To track if skills are in view
    const skillsRef = useRef(null); // Reference to the skills container

    useEffect(() => {
        // Create an IntersectionObserver to detect when skills section is in view
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.2 } // Adjust the threshold for triggering the animation
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-4 md:p-8">
            <div ref={skillsRef} className="flex flex-col items-center bg-slate-200 p-6 md:p-8 rounded-lg shadow-lg w-full">
                <h3 className="text-center text-4xl font-bold mb-4">My Skills</h3>

                {/* Languages Section */}
                <SkillCategory title="Languages" skills={skillsData.Languages} isInView={isInView} />

                {/* Databases Section */}
                <SkillCategory title="Databases" skills={skillsData.Databases} isInView={isInView} />

                {/* Frameworks Section */}
                <SkillCategory title="Frameworks" skills={skillsData.Frameworks} isInView={isInView} />

                {/* Developer Tools Section */}
                <SkillCategory title="Developer Tools" skills={skillsData.DeveloperTools} isInView={isInView} />
            </div>
        </div>
    );
}

function SkillCategory({ title, skills, isInView }) {
    return (
        <div className="w-full mb-8">
            <h4 className="text-2xl font-semibold mb-4">{title}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                        <h5 className="text-xl font-semibold mb-2">{skill.name}</h5>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-6 h-6 rounded-full transition-all duration-500 ease-in-out ${isInView && i < skill.level ? 'bg-blue-500' : 'bg-gray-300'
                                        }`}
                                    style={{
                                        transitionDelay: `${i * 150}ms`, // Add delay to each block for smoother animation
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
