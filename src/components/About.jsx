import React, { useState } from 'react';
import profileImage from '../assets/profile_pic.jpg';
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
                    Hi, I'm <strong>Atishey Jain</strong>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste sed voluptatum, excepturi corporis illo voluptas exercitationem, voluptate ipsam necessitatibus magnam amet debitis beatae eius, pariatur facilis. Debitis, non laudantium.
                </p>
            </div>
        </div>
    );
}

export default About;
