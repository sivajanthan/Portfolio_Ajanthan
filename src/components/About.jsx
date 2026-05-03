import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-card p-8 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <p className="text-slate-300 leading-relaxed text-lg mb-6 relative z-10">
                I am a diligent and adaptable Data Science undergraduate specializing in Artificial Intelligence and Machine Learning. With a strong foundation in modern NLP, RAG systems, and full-stack web development, I excel at solving real-world problems through data-driven approaches.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg relative z-10">
                My experience spans from developing robust multilingual AI models to building complete, end-to-end web applications. As a quick learner and a natural leader, I thrive in dynamic environments where I can bring diverse perspectives together to architect innovative software solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-darker p-6 rounded-xl border border-slate-800 card-hover text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">2+</h3>
                <p className="text-slate-400 font-medium">Years Experience</p>
              </div>
              <div className="bg-darker p-6 rounded-xl border border-slate-800 card-hover text-center">
                <h3 className="text-4xl font-bold text-secondary mb-2">10+</h3>
                <p className="text-slate-400 font-medium">Projects Completed</p>
              </div>
              <div className="bg-darker p-6 rounded-xl border border-slate-800 card-hover text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">AI</h3>
                <p className="text-slate-400 font-medium">NLP & RAG Focus</p>
              </div>
              <div className="bg-darker p-6 rounded-xl border border-slate-800 card-hover text-center">
                <h3 className="text-4xl font-bold text-secondary mb-2">MERN</h3>
                <p className="text-slate-400 font-medium">Full-Stack Dev</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
