import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Database, Layout, Server, Wrench, Search, LineChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-primary" size={24} />,
      skills: ['Python', 'R', 'JavaScript', 'SQL']
    },
    {
      title: 'AI / Machine Learning',
      icon: <Brain className="text-secondary" size={24} />,
      skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Transformers', 'RL (PPO, GRPO)', 'PEFT/LoRA']
    },
    {
      title: 'NLP / RAG',
      icon: <Search className="text-primary" size={24} />,
      skills: ['Hugging Face', 'LangChain', 'LlamaIndex', 'FAISS', 'Embeddings', 'NER']
    },
    {
      title: 'Data Science',
      icon: <LineChart className="text-secondary" size={24} />,
      skills: ['NumPy', 'Pandas', 'Power BI', 'Tableau', 'Matplotlib', 'Seaborn']
    },
    {
      title: 'Web Development',
      icon: <Layout className="text-primary" size={24} />,
      skills: ['React', 'HTML/CSS', 'Tailwind CSS', 'Vite']
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-secondary" size={24} />,
      skills: ['Flask', 'FastAPI', 'Node.js', 'Express.js']
    },
    {
      title: 'Databases',
      icon: <Database className="text-primary" size={24} />,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Vector Databases']
    },
    {
      title: 'Tools & MLOps',
      icon: <Wrench className="text-secondary" size={24} />,
      skills: ['Git/GitHub', 'Docker', 'AWS (EC2, S3)', 'GitHub Actions', 'MLflow']
    }
  ];

  return (
    <section id="skills" className="section-padding bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2">Technical Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-slate-800 card-hover group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-darker rounded-lg group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-slate-200">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
