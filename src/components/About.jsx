import React from 'react';

const About = () => (
    <section id="about" className="bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="w-full text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
                <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-lg mt-1">
                    MERN Stack Developer | Environmental Engineering Student | Tech Innovator
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                    Hi! I'm a passionate <span className="font-semibold">MERN Stack Developer</span> and Environmental Engineering undergraduate at 
                    <span className="font-semibold"> Delhi Technological University (DTU)</span>. I love building fast, scalable, and visually 
                    appealing web applications that solve real-world problems.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                    I specialize in <span className="font-semibold">MongoDB, Express.js, React.js, and Node.js</span>, along with modern tools like 
                    <span className="font-semibold"> Tailwind CSS</span>, <span className="font-semibold">Redux</span>, and <span className="font-semibold">Firebase</span>. 
                    My projects — including <span className="font-semibold">Netflix-GPT</span>, an AI-powered streaming app, and 
                    <span className="font-semibold">Foodie</span>, a performance-optimized food ordering platform — reflect my focus on 
                    responsive design, optimized performance, and smooth user experiences.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                    I also have experience in <span className="font-semibold">GitHub CI/CD automation</span>, 
                    improving deployment efficiency and ensuring reliable, production-ready workflows.
                    I enjoy integrating AI tools, automation, and clean UI design to push my projects beyond the basics.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                    Outside of development, I led a team in the <span className="font-semibold">Smart India Hackathon (SIH)</span>, 
                    creating a <span className="font-semibold">Roblox-based water conservation game</span>. 
                    I’m driven by curiosity, creativity, and the goal of building meaningful digital solutions 
                    that combine engineering and technology.
                </p>
            </div>
        </div>
    </section>
);

export default About;
