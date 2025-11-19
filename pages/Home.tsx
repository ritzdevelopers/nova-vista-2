import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import { fetchPrograms, fetchMeta, fetchArticles } from "../services/api";
import { Program, MetaData, Article } from "../types";
import { Link } from "react-router-dom";

export default function Home() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [meta, setMeta] = useState<MetaData | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchPrograms().then(setPrograms);
    fetchMeta().then(setMeta);
    fetchArticles().then(setArticles);
  }, []);

  const scrolltToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle hash navigation manually on load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => scrolltToSection(id), 100);
    }
  }, [programs]);

  return (
    <>
      <Hero 
        tagline="Nova Vista Education"
        headline="Empowering Growth. Elevating Futures."
        subline="A platform committed to academic recognition and personal skill enhancement."
      />

      {/* Introduction Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading mb-8">Our Mission</h2>
            <p className="text-xl md:text-2xl text-slateInk/70 leading-relaxed font-serif">
              Nova Vista Education supports individuals at different stages of their journey — from those seeking formal acknowledgment of their professional contributions to those building the confidence and communication needed for career advancement.
            </p>
          </motion.div>

          {/* Stats */}
          {meta?.stats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 border-t border-slate-100 pt-12">
              {meta.stats.map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <p className="text-5xl font-serif text-crimson mb-2">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slateInk/50 font-bold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Academic Recognition Section */}
      <section id="academic" className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="kicker mb-4">Distinction</p>
              <h2 className="section-heading mb-6">Academic Recognition</h2>
              <div className="h-1 w-20 bg-crimson mb-8"></div>
              <p className="text-lg text-slateInk/80 mb-8 leading-relaxed">
                A pathway for individuals whose work, achievements, and contributions deserve formal acknowledgment through postgraduate honorary titles. We bridge the gap between professional excellence and academic validation.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Formal acknowledgment of professional legacy",
                  "Integration with global academic standards",
                  "Postgraduate honorary title conferment",
                  "Validation of lifelong achievement"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-crimson text-xl">•</span>
                    <span className="text-slateInk/80">{item}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className="inline-flex items-center text-crimson font-semibold border-b-2 border-crimson/20 hover:border-crimson pb-1 transition-all"
              >
                Check Eligibility <span className="ml-2">→</span>
              </Link>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
               <div className="absolute inset-0 bg-crimson transform rotate-3 rounded-2xl opacity-10 translate-x-4 translate-y-4"></div>
               <img 
                 src="https://picsum.photos/800/1000?image=10" 
                 alt="Academic Ceremony" 
                 className="rounded-2xl shadow-editorial relative z-10 object-cover h-[600px] w-full"
               />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skill Development Section */}
      <section id="skills" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-20 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div 
              className="order-2 lg:order-1 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
               <div className="absolute inset-0 bg-slateInk transform -rotate-2 rounded-2xl opacity-5 -translate-x-4 translate-y-4"></div>
               <img 
                 src="https://picsum.photos/800/1000?image=20" 
                 alt="Professional Development" 
                 className="rounded-2xl shadow-editorial relative z-10 object-cover h-[600px] w-full grayscale hover:grayscale-0 transition-all duration-700"
               />
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="kicker mb-4">Excellence</p>
              <h2 className="section-heading mb-6">Skill & Personality Development</h2>
              <div className="h-1 w-20 bg-slateInk mb-8"></div>
              <p className="text-lg text-slateInk/80 mb-8 leading-relaxed">
                Structured training designed to strengthen communication, presence, grooming, and overall confidence for professional environments. We craft leaders who are not just skilled, but impactful.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="bg-parchment p-6 rounded-xl border border-slate-100">
                  <h3 className="font-serif text-xl mb-2 text-crimson">Communication</h3>
                  <p className="text-sm text-slateInk/70">Mastering the art of public speaking and persuasive rhetoric.</p>
                </div>
                <div className="bg-parchment p-6 rounded-xl border border-slate-100">
                  <h3 className="font-serif text-xl mb-2 text-crimson">Presence</h3>
                  <p className="text-sm text-slateInk/70">Cultivating an executive aura through grooming and etiquette.</p>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="px-8 py-3 bg-slateInk text-white rounded-full hover:bg-crimson transition-colors inline-block font-medium"
              >
                Enroll Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insights / News Section */}
      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="kicker mb-4">Perspectives</p>
              <h2 className="section-heading">Latest Insights</h2>
            </div>
            <Link to="#" className="hidden md:inline-block text-crimson hover:text-crimsonDark font-medium border-b border-crimson/20">View all articles</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article 
                key={article.id}
                className="card overflow-hidden group cursor-pointer flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img 
                    src={`https://picsum.photos/600/400?random=${index}`} 
                    alt="Article thumbnail" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold tracking-widest uppercase text-slateInk rounded-sm">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-xl text-slateInk mb-3 group-hover:text-crimson transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slateInk/70 mb-6 flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slateInk/40 border-t border-slate-100 pt-4 mt-auto">
                    <span className="font-medium text-slateInk/60">{article.author}</span>
                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}