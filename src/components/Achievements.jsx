import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Project Leadership",
      description: "Led an academic project successfully as a project leader, guiding a team to deliver the final product on schedule.",
      icon: <Users className="text-primary" size={24} />
    },
    {
      title: "Mathematics Olympiad",
      description: "Competed in the Mathematics Olympiad, demonstrating strong analytical and problem-solving capabilities.",
      icon: <Target className="text-secondary" size={24} />
    },
    {
      title: "Provincial Chess Matches",
      description: "Participated in Provincial-level Chess Matches, honing strategic thinking and forward planning.",
      icon: <Trophy className="text-primary" size={24} />
    },
    {
      title: "Athletics",
      description: "Actively participated in Athletic Competitions, showcasing dedication and teamwork.",
      icon: <Star className="text-secondary" size={24} />
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2">Achievements & Leadership</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-slate-800 card-hover flex gap-5 items-start"
              >
                <div className="p-3 bg-darker rounded-lg border border-slate-700/50 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-200 mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
