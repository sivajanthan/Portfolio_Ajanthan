import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
              Ajanthan Sivaanbu
            </h3>
            <p className="text-slate-400 text-sm">
              AI/ML Engineer | Data Science Developer
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/sivajanthan" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/sivajanthan" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:sivajanthan@gmail.com" className="text-slate-400 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {currentYear} Ajanthan Sivaanbu. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
