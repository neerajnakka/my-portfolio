import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Sparkles, Rocket, Code2, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_CONTENT } from '../data';
import { useInView } from 'react-intersection-observer';

const AnimatedText = ({ text, gradient }: { text: string; gradient: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`${gradient} bg-clip-text text-transparent`}
    >
      {text}
    </motion.span>
  );
};

const stats = [
  { icon: Code2, label: 'Full-Stack Projects', value: '10+', color: 'from-[hsl(var(--gradient-emerald))] to-[hsl(var(--gradient-cyan))]' },
  { icon: Rocket, label: 'Cloud Deployments', value: '5+', color: 'from-[hsl(var(--gradient-purple))] to-[hsl(var(--gradient-pink))]' },
  { icon: Terminal, label: 'Technologies', value: '25+', color: 'from-[hsl(var(--gradient-cyan))] to-[hsl(var(--gradient-blue))]' },
];

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    { icon: Github, href: 'https://github.com/neerajnakka', label: 'GitHub', color: 'hover:text-primary' },
    { icon: Linkedin, href: 'https://linkedin.com/in/neerajchandran', label: 'LinkedIn', color: 'hover:text-[hsl(var(--gradient-blue))]' },
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-[hsl(var(--gradient-blue))]/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 min-h-[calc(100vh-5rem)]">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-muted-foreground">Full-Stack & DevOps Engineer</span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-foreground">Hi, I'm</span>
                <br />
                <AnimatedText text="Neeraj" gradient="bg-gradient-to-r from-primary via-[hsl(var(--gradient-blue))] to-secondary" />
              </motion.h1>

              <motion.div
                className="flex flex-wrap items-center gap-3 text-2xl md:text-3xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="text-muted-foreground">I build</span>
                <span className="relative group cursor-pointer">
                  <span className="text-gradient-green font-bold">
                    scalable apps
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--gradient-emerald))] to-[hsl(var(--gradient-cyan))] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                </span>
                <span className="text-muted-foreground">&</span>
                <span className="relative group cursor-pointer">
                  <span className="text-gradient-purple font-bold">
                    deploy them
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--gradient-purple))] to-[hsl(var(--gradient-pink))] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                </span>
              </motion.div>
            </div>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-[hsl(var(--gradient-blue))] rounded-xl font-semibold text-primary-foreground overflow-hidden transition-all hover:scale-105 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40"
              >
                <span className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Get in touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-xl font-semibold text-foreground transition-all"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 ${link.color} transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-white/10`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Animated gradient orb background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-[hsl(var(--gradient-blue))]/20 to-secondary/20 rounded-full filter blur-3xl"></div>
              
              {/* Floating cards with 21st.dev style */}
              <div className="relative z-10 w-full max-w-md space-y-4">
                {/* Main avatar card */}
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-[hsl(var(--gradient-blue))] to-secondary rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <div className="relative card-glass rounded-2xl p-8 flex flex-col items-center space-y-4">
                    <motion.div
                      className="relative w-32 h-32"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(var(--gradient-blue))] to-secondary rounded-full p-1">
                        <div className="w-full h-full rounded-full bg-background/95 backdrop-blur-xl flex items-center justify-center">
                          <motion.div 
                            className="text-4xl font-bold text-gradient"
                            animate={{ rotate: [0, -360] }}
                            transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          >
                            NC
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold text-foreground">Neeraj Chandran</h3>
                      <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
                    </div>
                    
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                      <div className="w-2 h-2 bg-[hsl(var(--gradient-emerald))] rounded-full animate-pulse"></div>
                      <span className="text-xs text-muted-foreground">Available for work</span>
                    </div>
                  </div>
                </motion.div>

                {/* Skill badges grid */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Code2, label: 'Frontend', color: 'from-[hsl(var(--gradient-cyan))] to-[hsl(var(--gradient-blue))]' },
                    { icon: Terminal, label: 'Backend', color: 'from-[hsl(var(--gradient-purple))] to-[hsl(var(--gradient-pink))]' },
                    { icon: Rocket, label: 'DevOps', color: 'from-[hsl(var(--gradient-emerald))] to-[hsl(var(--gradient-cyan))]' },
                  ].map((skill, i) => (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="relative group cursor-pointer"
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-xl opacity-0 group-hover:opacity-75 blur transition duration-300`}></div>
                      <div className="relative card-glass rounded-xl p-4 flex flex-col items-center gap-2">
                        <div className={`p-2 bg-gradient-to-br ${skill.color} rounded-lg`}>
                          <skill.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs font-medium text-foreground">{skill.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}></div>
                <div className="relative card-glass card-hover rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
