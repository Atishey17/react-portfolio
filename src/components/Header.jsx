import React from 'react';

function Header() {
    return (
        <header className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg p-5">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition-all">
                    <a href="#home">ATISHEY JAIN</a>
                </h1>
                <ul className="flex gap-12">
                    <li className="font-medium hover:scale-110 transition-all cursor-pointer hover:text-yellow-300">
                        <a href="#about">About</a>
                    </li>
                    <li className="font-medium hover:scale-110 transition-all cursor-pointer hover:text-yellow-300">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="font-medium hover:scale-110 transition-all cursor-pointer hover:text-yellow-300">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="font-medium hover:scale-110 transition-all cursor-pointer hover:text-yellow-300">
                        <a href="#interest">Interest</a>
                    </li>
                    <li className="font-medium hover:scale-110 transition-all cursor-pointer hover:text-yellow-300">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
