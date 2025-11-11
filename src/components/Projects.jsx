import React from 'react';

const Projects = () => {
    // Project data
    const projectData = [
        {
            title: "SCEE DTU Web Portal",
            description:
                "Developed a responsive web portal for the Society of Civil and Environmental Engineers at DTU using React.js. Improved accessibility by 40% and streamlined deployment workflows via GitHub CI/CD.",
            imgSrc: "https://placehold.co/600x400/0D9488/F0FDFA?text=SCEE+DTU+Portal",
            tags: ["React.js", "JavaScript", "GitHub Actions", "NPM"],
            liveUrl: "https://scee-website-4zj1.vercel.app/",
            githubUrl: "https://github.com/Param-gupta03/SCEE_DTU",
        },
        {
            title: "Netflix-GPT (Video Streaming App)",
            description:
                "An AI-powered video streaming app built with React and Redux. Integrated ChatGPT-driven search, Google Firebase authentication, and optimized load times by 35% for a seamless viewing experience.",
            imgSrc: "https://placehold.co/600x400/0F172A/E0F2FE?text=Netflix-GPT+App",
            tags: ["React", "Redux", "Firebase", "Tailwind CSS", "AI"],
            liveUrl: "https://netflixgpt-ef03d.web.app/", 
            githubUrl: "https://github.com/Param-gupta03/netflix_gpt", 
        },
        {
            title: "Foodie (Food Ordering App)",
            description:
                "A high-performance food ordering platform built using React and ParcelJS, with real-time Swiggy API integration. Optimized performance with Shimmer UI, lazy loading, and automated Vercel CI/CD deployments.",
            imgSrc: "https://placehold.co/600x400/1E293B/CFFAFE?text=Foodie+Ordering+App",
            tags: ["React", "ParcelJS", "Vercel", "Tailwind CSS", "API"],
            liveUrl: "https://foodie-pink-beta.vercel.app/",
            githubUrl: "https://github.com/Param-gupta03/foodie",
        },
        {
           title: "Trash-into-treasure",
           description:
             "Developed an AI-powered waste upcycling app. Users can upload a photo or use their device camera to identify a waste item. The app then calls the Google Gemini API to generate creative DIY project ideas and video tutorials for turning that 'trash' into 'treasure'.",
            imgSrc: "https://placehold.co/600x400/16A34A/EBFBEF?text=Trash-into-Treasure",
            tags: ["React.js", "Tailwind CSS", "JavaScript", "Google Gemini API","Youtube API"],
            liveUrl: "https://trash-into-treasure.vercel.app/",
            githubUrl: "https://github.com/Param-gupta03/Trash-into-Treasure",
      }
        
    ];

    return (
        <section id="projects" className="bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Projects</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">
                        A showcase of my work in building responsive, scalable, and performance-driven web apps.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project) => (
                        <div
                            key={project.title}
                            className="bg-gray-50 dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl dark:hover:shadow-cyan-500/10"
                        >
                            <img
                                src={project.imgSrc}
                                alt={`Screenshot of ${project.title}`}
                                className="w-full h-48 object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://placehold.co/600x400/gray/white?text=Image+Unavailable';
                                }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300 px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-6 flex gap-4">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200"
                                    >
                                        Live
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
