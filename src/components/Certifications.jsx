import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    { title: "Introduction to Python", platform: "DataCamp", year: "2024", link: "#" },
    { title: "Supervised Learning with scikit-learn", platform: "DataCamp", year: "2024", link: "#" },
    { title: "Understanding Cloud Computing", platform: "DataCamp", year: "2024", link: "#" },
    { title: "Understanding Data Engineering", platform: "DataCamp", year: "2024", link: "#" },
    { title: "Working with the OpenAI API", platform: "DataCamp", year: "2025", link: "#" },
    { title: "Working with Hugging Face", platform: "DataCamp", year: "2025", link: "#" },
  ];

  return (
    <section id="certifications" className="section-padding bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2">Licenses & Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-colors flex items-start gap-4 group"
              >
                <div className="p-3 bg-darker rounded-lg border border-slate-700/50 group-hover:scale-110 transition-transform">
                  <Award className="text-secondary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-200 mb-1 leading-snug group-hover:text-primary transition-colors">{cert.title}</h3>
                  <p className="text-sm text-slate-400 mb-2">{cert.platform} • {cert.year}</p>
                  <a href={cert.link} className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-secondary transition-colors">
                    View Credential <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
