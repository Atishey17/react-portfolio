import React from 'react';

function Footer() {
    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling animation
        });
    };

    return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg p-5 relative">
            <div className="container mx-auto">
                <h2 className="text-center text-2xl font-bold mb-5">Atishey Jain 2024</h2>

                {/* Back to Top Button */}
                <button
                    onClick={scrollToTop}
                    className="absolute right-5 bottom-5 bg-white text-indigo-500 py-2 px-4 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300"
                    aria-label="Back to top"
                >
                    ↑ Back to Top
                </button>
            </div>
        </div>
    );
}

export default Footer;
