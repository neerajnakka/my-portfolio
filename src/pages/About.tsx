import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '../data';
import { useInView } from 'react-intersection-observer';
import {
  Calendar,
  Briefcase,
  GraduationCap,
  CheckCircle,
} from 'lucide-react';

const experiences = [
  {
    year: '2023 - Present',
    role: 'Full Stack Developer',
    company: 'Freelance',
    description:
      'Developing scalable web applications using modern technologies like React, Node.js, and MongoDB. Collaborating with clients to deliver high-quality solutions.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Javascript'],
    icon: Briefcase,
  },
  {
    year: '2023',
    role: 'Computer Science Graduate',
    company: 'CVR College of Engineering',
    description:
      'Graduated with distinction, focusing on web development and software engineering principles.',
    technologies: ['Data Structures', 'Algorithms', 'Web Development'],
    icon: GraduationCap,
  },
];

const achievements = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Udemy',
    date: '2025',
    description:
      'Validated knowledge of AWS cloud concepts, core services, security, and architecture best practices.',
    icon: CheckCircle,
  },
  {
    title: 'DevOps Fundamentals',
    issuer: 'Udemy',
    date: '2024',
    description:
      'Completed a hands-on course covering CI/CD pipelines, Docker, GitHub Actions, and infrastructure automation principles.',
    icon: CheckCircle,
  },
  {
    title: 'Certified Full Stack Developer',
    issuer: 'Naresh I Technologies',
    date: '2024',
    description:
      'Comprehensive training in front-end and back-end development with modern frameworks and deployment strategies.',
    icon: CheckCircle,
  },
  {
    title: 'Database Programming Certification',
    issuer: 'Oracle Academy',
    date: '2022',
    description:
      'Certified in SQL and PL/SQL, demonstrating expertise in designing, implementing, and managing relational databases efficiently.',
    icon: CheckCircle,
  },
  {
    title: 'Java Programming Certification',
    issuer: 'Coursera',
    date: '2021',
    description:
      'Certified in core Java programming, covering object-oriented principles, data structures, and algorithmic problem-solving.',
    icon: CheckCircle,
  },
  {
    title: 'Frontend Web Development',
    issuer: 'Coursera',
    date: '2021',
    description:
      'Focused on HTML, CSS, JavaScript, and responsive design principles for modern, accessible interfaces.',
    icon: CheckCircle,
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gradient">About</span> <span className="text-foreground">Me</span>
            </motion.h1>
            <motion.div
              className="prose prose-lg mx-auto text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg">{ABOUT_TEXT}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">
              My Journey
            </h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="relative pl-10 border-l-4 border-primary"
                >
                  <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                    <div className="bg-primary p-2 rounded-full text-primary-foreground shadow-md">
                      <exp.icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="card-glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center text-sm text-primary mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {exp.year}
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground mb-4">{exp.company}</p>
                    <p className="text-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm text-primary bg-primary/10 rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-24"
          >
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">
              Achievements & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((ach, index) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="card-glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 relative"
                >
                  <div className="absolute -top-6 left-6 bg-gradient-to-r from-primary to-[hsl(var(--gradient-blue))] p-3 rounded-full text-primary-foreground shadow-md">
                    <ach.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
                    {ach.title}
                  </h3>
                  <p className="text-sm text-primary mb-2">
                    Issued by: {ach.issuer} • {ach.date}
                  </p>
                  <p className="text-muted-foreground mb-4">{ach.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
