import React, { useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Interest from './components/Interest';
import Contact from './components/Contact';
import Header from './components/Header';
import './components/basec.css'
function Base() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div>
            <Header />

            {/* Toggle Button for Mobile */}
            <button
                className="lg:hidden p-4"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {/* Simple hamburger icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            <div className="flex">
                {/* Left Sidebar */}
                <aside
                    className={`fixed bg-slate-200 p-5 rounded-lg lg:w-40 lg:h-screen lg:sticky top-0 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}
                >
                    <ul className="space-y-4">
                        <li>
                            <a href="#about" className="block hover:text-blue-500">About</a>
                        </li>
                        <li>
                            <a href="#projects" className="block hover:text-blue-500">Projects</a>
                        </li>
                        <li>
                            <a href="#skills" className="block hover:text-blue-500">Skills</a>
                        </li>
                        <li>
                            <a href="#interest" className="block hover:text-blue-500">Interest</a>
                        </li>
                        <li>
                            <a href="#contact" className="block hover:text-blue-500">Contact</a>
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="lg:ml-40 p-8 w-full">
                    <section id="about">
                        <About />
                    </section>
                    <section id="projects">
                        <Projects />
                    </section>
                    <section id="skills">
                        <Skills />
                    </section>
                    <section id="interest">
                        <Interest />
                    </section>
                    <section id="contact">
                        <Contact />
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Base;
