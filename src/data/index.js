export const HERO_CONTENT =
  "Building scalable systems from code to cloud. DevOps & Cloud Engineer | Full-Stack Developer. Passionate about automating deployments, optimizing cloud infrastructure, and developing robust web applications with modern technologies.";

export const ABOUT_TEXT =
  "I design, automate, and deploy systems that turn code into production-grade reality. My journey began with full-stack development—building web apps with Java, React, and Node.js. Over time, that foundation evolved into a passion for DevOps and Cloud Engineering, where I now focus on crafting scalable infrastructure, clean CI/CD pipelines, and resilient deployments. I work across AWS and OCI, orchestrate containers with Docker and Kubernetes, and define infrastructure with Terraform and automation scripts. Behind the command line, I’m equally comfortable in version control and workflow automation, using Git, GitHub, and GitLab CI/CD to bridge collaboration and delivery. For me, DevOps isn’t just about speed—it’s about precision, repeatability, and creating systems that empower developers to ship confidently and innovate faster.";

export const SKILLS = [
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'OCI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'GitLab CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Oracle SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
];

export const PROJECTS = [
  {
    title: 'Amazon Clone — EKS & ArgoCD Deployment',
    image: 'https://images.unsplash.com/photo-1631183054802-6e1f01a8b6b3?q=80&w=2000',
    description:
      'Deployed a production-grade Amazon Clone on AWS EKS with full GitOps automation via ArgoCD. Integrated CI/CD pipelines using GitHub Actions, containerized microservices with Docker, and managed configuration using Kustomize for seamless auto-sync deployments.',
    technologies: [
      'AWS EKS',
      'Kubernetes',
      'ArgoCD',
      'GitHub Actions',
      'Kustomize',
      'Docker',
      'Terraform',
    ],
    category: 'devops',
    githubLink: 'https://github.com/neerajnakka/amazon-clone-k8s-eks-argoCD',
    websiteLink: '',
  },
  {
    title: 'Next.js CI/CD Pipeline with Docker & Kubernetes',
    image: 'https://images.unsplash.com/photo-1612831455543-9b1b19b9ad3c?q=80&w=2000',
    description:
      'Developed and containerized a Next.js application, deploying it to Kubernetes clusters using GitHub Actions for automated CI/CD. Implemented multi-stage Docker builds, health probes, resource limits, and rolling updates for high availability.',
    technologies: ['Next.js', 'Docker', 'Kubernetes', 'GitHub Actions', 'GHCR'],
    category: 'devops',
    githubLink: 'https://github.com/neerajnakka/nextjs-docker-kubernetes-app',
    websiteLink: '',
  },
  {
    title: 'Realtime Chat App — MERN + Socket.IO',
    image: 'https://images.unsplash.com/photo-1590608897129-79da98d159ab?q=80&w=2000',
    description:
      'Developed a real-time chat application using the MERN stack with Socket.IO for instant communication. Implemented custom hooks and Zustand for efficient state management. Dockerized for deployment.',
    technologies: ['React', 'Node', 'Express', 'MongoDB', 'Socket.IO', 'Zustand', 'Docker'],
    category: 'fullstack',
    githubLink: 'https://github.com/neerajnakka/Mern_ChatApp',
    websiteLink: 'https://mern-chatapp-rfj5.onrender.com/',
  },
  {
    title: 'Cloud Infrastructure Automation',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000',
    description:
      'Automated AWS infrastructure provisioning using Terraform with reusable modules for EC2, VPC, and S3. Integrated CI/CD with GitHub Actions for continuous deployment of cloud environments.',
    technologies: ['AWS', 'Terraform', 'GitHub Actions', 'EC2', 'S3'],
    category: 'devops',
    githubLink: 'https://github.com/neerajnakka',
    websiteLink: '',
  },
  {
    title: 'Netflix Clone using React',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2000',
    description: 'Built a Netflix clone with React, Tailwind CSS, and Firebase. Integrated React Router for seamless navigation and Firebase for authentication.',
    technologies: ['React', 'Tailwind CSS', 'Firebase'],
    category: 'fullstack',
    githubLink: 'https://github.com/neerajnakka/NetflixReact_Clone',
    websiteLink: 'https://netflix-clone-wi5g.onrender.com/',
  },
  {
    title: 'Modern Portfolio with 3D Animations',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2000',
    description:
      'Designed and developed a modern portfolio website featuring smooth animations, 3D effects powered by Three.js, and a sleek user interface. Leveraged Tailwind CSS for responsive design, React for dynamic interactivity, and Zustand for state management. The site incorporates Framer Motion for fluid transitions.',
    technologies: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'HTML', 'CSS'],
    category: 'fullstack',
    githubLink: 'https://github.com/neerajnakka/Neeraj_Portfolio',
    websiteLink: 'https://neerajnakka.onrender.com/',
  },
  {
    title: 'Portfolio Website',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000',
    description: 'Dynamic React portfolio showcasing projects with Tailwind CSS design and Framer Motion animations.',
    technologies: ['Tailwind CSS', 'React.js', 'React Router Dom', 'Framer Motion'],
    category: 'fullstack',
    githubLink: 'https://github.com/neerajnakka/PortFolio_React/tree/master',
    websiteLink: 'https://neerajchandra.onrender.com/',
  },
];

export const CONTACT = {
  address: 'Hyderabad, Telangana, India',
  phoneNo: '+91 9876543210',
  email: 'neeraj@example.com'
};
