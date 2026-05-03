import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2">Get In Touch</h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card p-6 rounded-xl border border-slate-800 flex items-center gap-4 group hover:border-primary/50 transition-colors">
                <div className="p-4 bg-darker rounded-full text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-400 mb-1">Email</h3>
                  <a href="mailto:sivajanthan@gmail.com" className="text-slate-200 font-medium hover:text-primary transition-colors">
                    sivajanthan@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-slate-800 flex items-center gap-4 group hover:border-primary/50 transition-colors">
                <div className="p-4 bg-darker rounded-full text-secondary group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-400 mb-1">Phone</h3>
                  <a href="tel:+94714531224" className="text-slate-200 font-medium hover:text-secondary transition-colors">
                    (+94) 714531224
                  </a>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border border-slate-800 flex items-center gap-4 group hover:border-primary/50 transition-colors">
                <div className="p-4 bg-darker rounded-full text-primary group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-400 mb-1">Location</h3>
                  <p className="text-slate-200 font-medium">Malabe, Sri Lanka</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <form 
                action="mailto:sivajanthan@gmail.com" 
                method="post" 
                encType="text/plain"
                className="bg-card p-8 rounded-2xl border border-slate-800 shadow-xl"
              >
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      placeholder="John Doe"
                      className="w-full bg-darker border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      placeholder="john@example.com"
                      className="w-full bg-darker border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    placeholder="Opportunity / Collaboration"
                    className="w-full bg-darker border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    required
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="5"
                    placeholder="Hello Ajanthan, I would like to talk about..."
                    className="w-full bg-darker border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
