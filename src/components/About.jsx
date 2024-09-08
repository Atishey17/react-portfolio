import React, { useState } from 'react';
import profileImage from '/assets/profile_pic.jpg';
import './info.css';

function About() {
    const [shadowStyle, setShadowStyle] = useState({});

    const handleMouseMove = (e) => {
        const img = e.target.getBoundingClientRect();
        const x = e.clientX - img.left - img.width / 2;
        const y = e.clientY - img.top - img.height / 2;

        setShadowStyle({
            boxShadow: `${x / 10}px ${y / 10}px 30px rgba(0, 0, 0, 0.4)`,
        });
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 md:p-8">
            <div className="flex flex-col items-center bg-slate-200 p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className=" text-center text-4xl font-bold mb-4">About me</h3>
                <img
                    src={profileImage}
                    alt="Atishey Jain"
                    className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover mb-6 md:mb-10"
                    style={shadowStyle} // Apply the dynamic shadow style
                    onMouseMove={handleMouseMove} // Track cursor position
                />
                <p className="text-center text-gray-700 text-base md:text-lg">
                    Hi, I'm <strong>Atishey Jain</strong>. I am a software engineering student at Graphic Era Hill University in Dehradun, India. Set to graduate in 2025, I have already established myself as a promising full-stack developer with a strong foundation in both front-end and back-end technologies. Currently maintaining an impressive CGPA of 7.40, my academic excellence is matched by my practical skills and project experience. My technical repertoire includes proficiency in languages such as C/C++, JavaScript, TypeScript, and Python, as well as expertise in popular frameworks like React and Node.js. My passion for web development extends beyond just coding. I have a keen eye for user experience and responsive design, implementing these principles using modern CSS frameworks like Tailwind CSS. On the back-end, i've worked in SQL and PostgreSQL databases. I'm proficient in using ORMs like Drizzle ORM to optimize database operations and ensure data integrity
                </p>
            </div>
        </div>
    );
}

export default About;
