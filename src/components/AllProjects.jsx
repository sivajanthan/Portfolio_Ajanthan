import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { GithubIcon as Github } from './icons';

const AllProjects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI/ML', 'RAG / NLP', 'Data Science', 'Web'];

  const projects = [
    {
      title: "Cross-Lingual Legal RAG System",
      category: "RAG / NLP",
      description: "A technically validated RAG framework for public legal guidance supporting Tamil, Sinhala, English, and Tanglish queries.",
      tech: ["Python", "FAISS", "Sentence Transformers", "LLMs", "LangChain"],
      date: "2024",
      github: "https://github.com/sivajanthan/A-Cross-Lingual-RAG-Framework-for-Public-Guidance",
    },
    {
      title: "Car Price Prediction System",
      category: "Data Science",
      description: "Developed a regression-based predictive model using Random Forest and XGBoost to estimate car prices based on make, model, year, and mileage.",
      tech: ["Python", "XGBoost", "Random Forest", "Flask"],
      date: "Nov 2024",
      github: "https://github.com/sivajanthan/car_prediction",
      demo: "https://car-pricepredictor-8.onrender.com",
    },
    {
      title: "Stroke Prediction System",
      category: "AI/ML",
      description: "Created a machine learning model using Logistic Regression, SVM, and Random Forest to predict stroke risk. Addressed class imbalance with SMOTE.",
      tech: ["Python", "Scikit-Learn", "SMOTE", "SVM"],
      date: "Sep 2024",
      github: "https://github.com/sivajanthan/Stroke-prediction",
    },
    {
      title: "Movie Recommendation System",
      category: "AI/ML",
      description: "Implemented a hybrid recommendation system combining collaborative and content-based filtering to suggest personalized movies.",
      tech: ["Python", "Cosine Similarity", "Matrix Factorization"],
      date: "Sep 2024",
      github: "https://github.com/sivajanthan/Movie-recoomendation-System",
    },
    {
      title: "Sai Photography Studio Management",
      category: "Web",
      description: "Designed and developed a full-stack web application using MERN stack to manage studio operations, bookings, and customers.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      date: "May 2024",
      github: "https://github.com/sivajanthan/ITP-project",
    },
    {
      title: "Tamil Bible Chatbot (RAG)",
      category: "RAG / NLP",
      description: "A semantic search and response generation system for the Tamil Bible using open-source LLMs and vector embeddings.",
      tech: ["LangChain", "LLMs", "FAISS", "Python"],
      date: "2024",
      github: "Add GitHub link here",
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6">Other Projects</h2>
            
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat 
                      ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                      : 'bg-card text-slate-300 hover:bg-slate-800 border border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.title}
                  className="bg-card p-6 rounded-xl border border-slate-800 card-hover flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-darker rounded-lg border border-slate-700/50">
                      <Folder className="text-secondary" size={24} />
                    </div>
                    {/* Verified: Fabric project removed and demo link logic tightened */}
                    <div className="flex gap-3">
                      <a href={project.github && project.github !== "Add GitHub link here" ? project.github : "#"} className="text-slate-400 hover:text-primary transition-colors" title="GitHub">
                        <Github size={20} />
                      </a>
                      {project.demo && project.demo !== "#" && project.demo !== "" && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-secondary transition-colors" title="Live Demo">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-200 mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="text-xs text-slate-400 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-primary font-medium whitespace-nowrap ml-2">
                      {project.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AllProjects;
