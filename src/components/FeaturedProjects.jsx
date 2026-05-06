import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Activity, Languages, Database, BarChart2 } from 'lucide-react';
import { GithubIcon as Github } from './icons';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      title: "IoT-Based Water Quality Monitoring & Analytics",
      description: "An end-to-end IoT platform to monitor real-time water quality metrics and analyze trends using machine learning models.",
      impact: "Provided dynamic insights to improve water safety and public health management.",
      tech: ["ESP32", "Node.js", "Express", "MongoDB", "FastAPI", "React"],
      icon: <Activity className="w-6 h-6 text-secondary" />,
      github: "#",
      demo: null
    },
    {
      title: "Dynamic Pricing Engine",
      description: "An AI-powered pricing optimization engine tailored for retail and e-commerce platforms.",
      impact: "Adjusted prices dynamically based on demand, inventory, and competitor metrics to maximize revenue.",
      tech: ["Python", "XGBoost", "Pandas", "Flask"],
      icon: <BarChart2 className="w-6 h-6 text-primary" />,
      github: "#",
      demo: null
    }
  ];

  return (
    <section id="featured-projects" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Featured Work</h2>
              <p className="text-slate-400 mt-4 max-w-2xl text-lg">My most impactful AI and Machine Learning systems, highlighting real-world problem-solving and technical depth.</p>
            </div>
            <a href="#projects" className="text-primary hover:text-secondary transition-colors mt-4 md:mt-0 flex items-center gap-2 font-medium">
              View all projects <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-card rounded-2xl p-6 border border-slate-800 card-hover relative overflow-hidden group flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                
                <div className="bg-darker w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg border border-slate-700/50">
                  {project.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-6 p-4 bg-darker/50 rounded-lg border border-slate-800/50">
                  <p className="text-sm text-slate-300"><span className="text-primary font-medium">Impact: </span>{project.impact}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-slate-800 text-primary border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-slate-800">
                  <a href={project.github === "#" ? "#" : project.github} className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                    <Github size={18} /> GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="flex items-center gap-2 text-sm text-slate-300 hover:text-primary transition-colors">
                      <ExternalLink size={18} /> Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
