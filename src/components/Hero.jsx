import React from 'react';

const Hero = () => (
    <section id="hero" className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="w-full text-center max-w-3xl mx-auto">
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-lg">
                    Hello, I'm Param 👋
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mt-2">
                    MERN Stack Developer & UI Enthusiast
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
                    I’m a passionate developer who loves building high-performance, responsive web applications using
                    <span className="font-semibold"> MongoDB</span>, <span className="font-semibold">Express.js</span>, 
                    <span className="font-semibold"> React</span>, and <span className="font-semibold">Node.js</span>. 
                    I focus on crafting clean UIs, scalable architectures, and seamless user experiences powered by modern tools like 
                    <span className="font-semibold"> Tailwind CSS</span>, <span className="font-semibold">Redux</span>, and <span className="font-semibold">Firebase</span>.
                </p>
                <a 
                    href="#projects" 
                    className="inline-block bg-cyan-600 text-white font-medium text-lg px-8 py-3 rounded-lg mt-8 shadow-lg shadow-cyan-500/30 dark:shadow-cyan-400/30 hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                    View My Projects
                </a>
            </div>
        </div>
    </section>
);

export default Hero;
