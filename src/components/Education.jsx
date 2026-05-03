import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2">Education</h2>
          
          <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 mt-12 space-y-12">
            
            <div className="relative pl-8 md:pl-0">
              <div className="md:hidden absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-dark"></div>
              
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-3 hidden md:flex flex-col items-end pr-8 relative">
                  <div className="absolute -right-[9px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-dark"></div>
                  <span className="text-primary font-bold">Dec 2023 – Present</span>
                  <span className="text-slate-400 text-sm mt-1">Malabe, Sri Lanka</span>
                </div>
                
                <div className="md:col-span-9 bg-card p-6 md:p-8 rounded-2xl border border-slate-800 card-hover">
                  <div className="flex items-center gap-3 mb-2 md:hidden">
                    <Calendar size={16} className="text-primary" />
                    <span className="text-primary font-bold text-sm">Dec 2023 – Present</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-100 mb-1">BSc (Hons) in Information Technology</h3>
                  <h4 className="text-xl text-secondary font-medium mb-4">Specialization in Data Science</h4>
                  
                  <div className="flex items-center gap-2 mb-6 text-slate-300 font-medium">
                    <GraduationCap size={20} className="text-primary" />
                    <span>SLIIT – Sri Lanka Institute of Information Technology</span>
                  </div>
                  
                  <div className="bg-darker rounded-xl p-5 border border-slate-800/50">
                    <p className="text-primary font-bold mb-3 flex items-center gap-2">
                      <span className="bg-primary/10 px-3 py-1 rounded text-primary">GPA: 3.01 / 4.0</span>
                    </p>
                    <p className="text-slate-300 font-medium mb-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Machine Learning', 'Data Mining', 'Statistical Computing', 'Natural Language Processing', 'Big Data Analytics'].map((course, idx) => (
                        <span key={idx} className="bg-slate-800 text-slate-300 text-sm px-3 py-1 rounded-full border border-slate-700">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
