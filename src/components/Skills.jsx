import React from 'react';
import { 
    SiHtml5, 
    SiCss3, 
    SiJavascript, 
    SiReact, 
    SiNodedotjs, 
    SiExpress, 
    SiMongodb,
    SiTailwindcss, 
    SiRedux, 
    SiFirebase, 
    SiGit, 
    SiFigma, 
    SiVercel, 
    SiGithubactions
} from 'react-icons/si';

const Skills = () => {
    const iconClass = "w-10 h-10 text-cyan-600 dark:text-cyan-400";

    const skillsList = [
        { name: "HTML5", icon: <SiHtml5 className={iconClass} /> },
        { name: "CSS3", icon: <SiCss3 className={iconClass} /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className={iconClass} /> },
        { name: "React.js", icon: <SiReact className={iconClass} /> },
        { name: "Node.js", icon: <SiNodedotjs className={iconClass} /> },
        { name: "Express.js", icon: <SiExpress className={iconClass} /> },
        { name: "MongoDB", icon: <SiMongodb className={iconClass} /> },
        { name: "Redux", icon: <SiRedux className={iconClass} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className={iconClass} /> },
        { name: "Firebase", icon: <SiFirebase className={iconClass} /> },
        { name: "Git & GitHub", icon: <SiGit className={iconClass} /> },
        { name: "CI/CD (GitHub Actions)", icon: <SiGithubactions className={iconClass} /> },
        { name: "Vercel", icon: <SiVercel className={iconClass} /> },
        { name: "Figma", icon: <SiFigma className={iconClass} /> },
    ];

    return (
        <section id="skills" className="bg-gray-50 dark:bg-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">
                        Tools and technologies I use to build scalable, high-performance web applications.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skillsList.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center gap-3"
                        >
                            {skill.icon}
                            <span className="font-medium text-gray-800 dark:text-gray-200 text-lg text-center">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
