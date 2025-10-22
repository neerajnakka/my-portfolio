import { motion } from 'framer-motion';
import { SKILLS } from '../data';

export default function Skills() {
  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground">Technologies I work with</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative flex flex-col items-center p-6 card-glass rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 mb-4 p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
