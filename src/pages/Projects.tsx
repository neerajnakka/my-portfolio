import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Rocket, Code2, Filter } from 'lucide-react';
import { PROJECTS } from '../data';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">
              Featured Projects
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From cloud-native deployments to full-stack applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          <button
            onClick={() => setFilter('all')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-primary to-[hsl(var(--gradient-blue))] text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                : 'bg-white/5 backdrop-blur-xl border border-white/10 text-muted-foreground hover:bg-white/10 hover:border-white/20 hover:text-foreground'
            }`}
          >
            <Filter className="w-4 h-4" />
            All Projects
          </button>
          <button
            onClick={() => setFilter('devops')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              filter === 'devops'
                ? 'bg-gradient-to-r from-[hsl(var(--gradient-purple))] to-[hsl(var(--gradient-pink))] text-primary-foreground shadow-lg shadow-secondary/25 scale-105'
                : 'bg-white/5 backdrop-blur-xl border border-white/10 text-muted-foreground hover:bg-white/10 hover:border-white/20 hover:text-foreground'
            }`}
          >
            <Rocket className="w-4 h-4" />
            DevOps Projects
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              filter === 'fullstack'
                ? 'bg-gradient-to-r from-[hsl(var(--gradient-emerald))] to-[hsl(var(--gradient-cyan))] text-primary-foreground shadow-lg shadow-[hsl(var(--gradient-emerald))]/25 scale-105'
                : 'bg-white/5 backdrop-blur-xl border border-white/10 text-muted-foreground hover:bg-white/10 hover:border-white/20 hover:text-foreground'
            }`}
          >
            <Code2 className="w-4 h-4" />
            Full-Stack Projects
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative card-glass rounded-3xl overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  project.category === 'devops'
                    ? 'from-[hsl(var(--gradient-purple))]/10 to-[hsl(var(--gradient-pink))]/10'
                    : 'from-[hsl(var(--gradient-emerald))]/10 to-[hsl(var(--gradient-cyan))]/10'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="absolute top-4 right-4 z-10">
                  <Badge className={`px-4 py-2 text-xs font-bold text-primary-foreground shadow-lg ${
                    project.category === 'devops'
                      ? 'bg-gradient-to-r from-[hsl(var(--gradient-purple))] to-[hsl(var(--gradient-pink))]'
                      : 'bg-gradient-to-r from-[hsl(var(--gradient-emerald))] to-[hsl(var(--gradient-cyan))]'
                  }`}>
                    {project.category === 'devops' ? 'DevOps' : 'Full-Stack'}
                  </Badge>
                </div>

                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60"></div>
                </div>

                <div className="relative p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-white/5 backdrop-blur-xl border border-white/10 text-muted-foreground rounded-lg hover:bg-white/10 hover:border-white/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-foreground rounded-xl font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                    >
                      <Github className="h-5 w-5" />
                      View Code
                    </a>
                    {project.websiteLink && (
                      <a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-[hsl(var(--gradient-blue))] text-primary-foreground rounded-xl font-semibold hover:from-primary/90 hover:to-[hsl(var(--gradient-blue))]/90 transition-all duration-300 shadow-lg shadow-primary/25"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  project.category === 'devops'
                    ? 'from-[hsl(var(--gradient-purple))] via-[hsl(var(--gradient-pink))] to-[hsl(var(--gradient-purple))]'
                    : 'from-[hsl(var(--gradient-emerald))] via-[hsl(var(--gradient-cyan))] to-[hsl(var(--gradient-emerald))]'
                }`}></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-muted-foreground">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
