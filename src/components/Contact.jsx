import React from 'react';
// 2. Import the required icons from react-icons/fa (Font Awesome)
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

// Define the size class for the icons
const iconSizeClass = "w-8 h-8";

const Contact = () => (
    <section id="contact" className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">
                    I'm currently open to new opportunities and collaborations. Feel free to send me a message!
                </p>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=paramgupta0305@gmail.com"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-block bg-cyan-600 text-white font-medium text-lg px-8 py-3 rounded-lg mt-8 shadow-lg shadow-cyan-500/30 dark:shadow-cyan-400/30 hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                 Say Hello
                </a>
            </div>
            
            {/* Social Links */}
            <div className="mt-12 flex justify-center space-x-8">
                <a 
                    href="https://github.com/Param-gupta03" 
                    className="text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transform hover:scale-110 transition-all duration-300" 
                    title="GitHub"
                >
                    {/* 3. Replace local icon component with React Icon */}
                    <FaGithub className={iconSizeClass} />
                </a>
                <a 
                    href="https://www.linkedin.com/in/param-gupta-9206092b9/" 
                    className="text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transform hover:scale-110 transition-all duration-300" 
                    title="LinkedIn"
                >
                    {/* 3. Replace local icon component with React Icon */}
                    <FaLinkedinIn className={iconSizeClass} />
                </a>
                
            </div>
        </div>
    </section>
);

export default Contact;