import React from 'react';
import { Mail, FileText, ArrowRight } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './icons';
import { motion } from 'framer-motion';

const Hero = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-primary font-medium tracking-wide uppercase mb-3">Hello, I'm</h2>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-slate-100">
              Ajanthan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Sivaanbu</span>
            </h1>
            <h3 className="text-xl lg:text-2xl text-slate-400 font-medium mb-6">
              AI/ML Engineer | Data Science Developer | Software Developer
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
              Transforming complex data into actionable insights through advanced Machine Learning, NLP, and Full-Stack Development. Passionate about building robust AI-driven solutions.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a href={`${base}cv.pdf`} download className="px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium rounded-lg flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)]">
                <FileText size={20} />
                Download CV
              </a>
              <a href="#projects" className="px-6 py-3 bg-card border border-slate-700 hover:border-primary/50 text-slate-200 font-medium rounded-lg flex items-center gap-2 transition-all hover:bg-slate-800">
                View Projects
                <ArrowRight size={20} />
              </a>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a href="https://github.com/sivajanthan" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors transform hover:scale-110">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com/in/sivajanthan" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors transform hover:scale-110">
                <Linkedin size={28} />
              </a>
              <a href="mailto:sivajanthan@gmail.com" className="text-slate-400 hover:text-primary transition-colors transform hover:scale-110">
                <Mail size={28} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full animate-spin-slow opacity-20 blur-xl"></div>
              <div className="absolute inset-2 bg-card rounded-full border-2 border-slate-800 overflow-hidden shadow-2xl">
                <img 
                  src={`${base}profile.jpg`} 
                  alt="Ajanthan Sivaanbu" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://ui-avatars.com/api/?name=Ajanthan+Sivaanbu&background=0ea5e9&color=fff&size=512";
                  }}
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
