export const portfolioData = {
  profile: {
    name: 'Sahaya Christhu Dhas',
    title: 'MERN Stack & Full Stack Developer',
    location: 'Based in India',
    email: 'sahayadhas2811@gmail.com',
    phone: '+91 9025370688',
    rawPhone: '9025370688',
    resumeUrl: '/Sahaya_Christhu_Dhas_Resume.pdf',
    photo: '/images/profile.png',
    intro: 'I craft secure, scalable and elegant software products across the full web stack — from frontend experience to APIs, data models and delivery workflows.',
  },
  stats: [
    { value: '5+', label: 'Years Overall Experience' },
    { value: '4+', label: 'Years in Software Development' },
    { value: '10+', label: 'Projects Delivered' },
    { value: '10+', label: 'Core Technologies' }
  ],
  about: {
    bio: 'Full Stack Developer with 5+ years of overall IT experience, including 4+ years developing and delivering production applications using React.js, Node.js, Express.js, and MongoDB (MERN stack). Currently at Prodapt, designing and developing Verizon\'s mission-critical telecom platforms — building RESTful APIs and React.js interfaces, with ongoing enhancement and maintenance to ensure platform stability and performance. Experienced across the full SDLC: authentication and authorization, reusable component architecture, microservices integration, containerized deployments, CI/CD pipelines, and cross-functional Agile collaboration. Recognized for reducing production defects and improving release quality on business-critical systems.',
    story: 'I enjoy turning product ideas into clean, responsive and maintainable digital experiences. My engineering approach blends frontend craft, API design, data modeling, debugging, release support and continuous learning in AI-assisted development workflows.',
  },
  skills: [
    {
      category: 'Languages',
      icon: '01',
      skills: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'TypeScript']
    },
    {
      category: 'Frontend',
      icon: '02',
      skills: ['React.js', 'Redux Toolkit', 'React Router', 'Material UI', 'Tailwind CSS', 'Next JS']
    },
    {
      category: 'Backend & APIs',
      icon: '03',
      skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'JWT Authentication', 'Middleware', 'bcrypt']
    },
    {
      category: 'Databases',
      icon: '04',
      skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'MySQL']
    },
    {
      category: 'DevOps & Cloud',
      icon: '05',
      skills: ['Docker', 'Kubernetes', 'Jenkins CI/CD', 'Deployment Support', 'Release Support']
    },
    {
      category: 'Tools & Platforms',
      icon: '06',
      skills: ['Git', 'GitHub', 'Jira', 'Postman', 'VS Code', 'Power BI']
    },
    {
      category: 'AI Tools',
      icon: '07',
      skills: ['GitHub Copilot', 'Google Gemini', 'ChatGPT']
    },
    {
      category: 'Core Concepts',
      icon: '08',
      skills: ['Authentication & Authorization', 'RESTful API Design', 'Component-Based Architecture', 'Responsive Web Design', 'Agile Development', 'Application Maintenance & Enhancement', 'Debugging & Root Cause Analysis', 'Code Reviews']
    }
  ],
  experience: [
    {
      company: 'Prodapt',
      role: 'Senior Software Engineer',
      period: 'Jan 2025 — Present',
      client: 'Verizon',
      achievements: [
        'Design and develop enterprise telecom applications using React.js, Node.js, Express.js, NestJS, and Redux Toolkit for Verizon mission-critical IOP, ECHO, and WFM platforms.',
        'Build full-stack features by creating React.js components, designing RESTful APIs, and extending existing application functionality based on business requirements.',
        'Create reusable React components and enhance existing modules to improve code maintainability, UI consistency, and product experience across applications.',
        'Design, develop, and enhance RESTful APIs using Node.js, Express.js, and NestJS to support core platform capabilities and new business functionalities.',
        'Perform ongoing maintenance and enhancement with root-cause analysis and issue resolution to keep applications stable and production-ready.',
        'Collaborate with product owners, QA engineers, architects, and cross-functional teams through development, testing, deployment, and maintenance cycles.',
        'Execute Jenkins CI/CD deployments and release validation to ensure successful production rollouts.',
        'Contribute to code reviews and continuous improvement using clean coding and enterprise development standards.'
      ]
    },
    {
      company: 'HCL Technologies',
      role: 'Software Engineer',
      period: 'Nov 2020 — Nov 2024',
      client: 'Applied Materials',
      achievements: [
        'Developed and maintained enterprise web applications for Applied Materials using React.js, Node.js, Express.js, and MongoDB within a microservices architecture.',
        'Built reusable React.js UI components and integrated REST APIs for sprint-based feature enhancements and production bug fixes.',
        'Designed and enhanced backend REST APIs to support core business workflows and application functionality.',
        'Implemented role-based authentication and authorization and built responsive, maintainable user interfaces.',
        'Partnered with product owners, QA engineers, and cross-functional teams through Agile development, sprint planning, and production support.',
        'Participated in code reviews, defect resolution, and continuous improvement initiatives to raise code quality.'
      ]
    }
  ],
  projects: [
    {
      title: 'Enterprise Helpdesk & Ticket Management Platform',
      category: 'HCL Project',
      image: '/images/project-dashboard.svg',
      summary: 'Enterprise IT support and ticket lifecycle management platform for employee service workflow operations.',
      details: 'Built an enterprise helpdesk platform enabling employees to raise, track, and resolve IT support requests. Includes React.js interfaces for ticket creation, categorization, status tracking, dashboard reporting, role-based JWT auth, reusable UI components, and REST API integration across a microservices architecture.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Material UI', 'REST APIs'],
      company: 'HCL Technologies',
      client: 'Applied Materials',
      link: '#',
      mode: 'hcl'
    },
    {
      title: 'Enterprise Asset Tracking System',
      category: 'HCL Project',
      image: '/images/project-commerce.svg',
      summary: 'Asset lifecycle administration and hardware/software tracking application for IT operations teams.',
      details: 'Built an asset tracking application to manage registration, assignment, status tracking, and maintenance of IT hardware and software assets. Supported asset lifecycle management through REST APIs and dashboards for administrators and support teams in a sprint-based delivery model.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Material UI', 'REST APIs'],
      company: 'HCL Technologies',
      client: 'Applied Materials',
      link: '#',
      mode: 'hcl'
    },
    {
      title: 'Hospital Management System',
      category: 'HCL Project',
      image: '/images/project-cms.svg',
      summary: 'MERN hospital operations platform for managing patients, doctors, appointments, and billing workflows.',
      details: 'Built a full-stack MERN application for patient, doctor, appointment, and billing management with JWT-based role access for admins, doctors, receptionists, and patients. Designed RESTful APIs and responsive React.js interfaces following an MVC architecture.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Material UI'],
      company: 'HCL Technologies',
      client: 'Applied Materials',
      link: '#',
      mode: 'hcl'
    }
  ],
  personalProjects: [
    {
      title: 'Enterprise Helpdesk System',
      repoName: 'Enterprise-Helpdesk-System',
      category: 'Repository Project',
      image: '/images/project-dashboard.svg',
      summary: 'Repository-based enterprise helpdesk workflow with ticket intake, handling and team support records.',
      details: 'Public GitHub repository showcasing an enterprise helpdesk and support ticketing workflow with role-aware operations and service request management patterns.',
      tech: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
      company: 'Personal Project',
      client: 'GitHub Repository',
      link: 'https://github.com/Sahayadhas2811/Enterprise-Helpdesk-System',
      mode: 'personal',
      language: 'JavaScript'
    },
    {
      title: 'Full Stack MERN Practice',
      repoName: 'FullStackMern',
      category: 'Repository Project',
      image: '/images/project-commerce.svg',
      summary: 'Full-stack MERN learning workspace covering frontend, backend and API integration patterns.',
      details: 'Public GitHub repository focused on full-stack MERN application structure, API design, reusable UI patterns, and practical frontend-backend integration work.',
      tech: ['TypeScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
      company: 'Personal Project',
      client: 'GitHub Repository',
      link: 'https://github.com/Sahayadhas2811/FullStackMern',
      mode: 'personal',
      language: 'TypeScript'
    },
    {
      title: 'Portfolio Website',
      repoName: 'Portfolio',
      category: 'Repository Project',
      image: '/images/project-cms.svg',
      summary: 'A portfolio repository for personal brand, experience, skills, projects and contact moments.',
      details: 'Public GitHub repository for the current portfolio website showcasing developer experience, software delivery projects and frontend engineering capability.',
      tech: ['React.js', 'Vite', 'Tailwind CSS', 'GSAP'],
      company: 'Personal Project',
      client: 'GitHub Repository',
      link: 'https://github.com/Sahayadhas2811/Portfolio',
      mode: 'personal',
      language: 'JavaScript'
    },
    {
      title: 'Student Portal',
      repoName: 'Sastra_project-student-portal',
      category: 'Repository Project',
      image: '/images/project-dashboard.svg',
      summary: 'Student portal repository for maintaining academic and student identity information.',
      details: 'Public GitHub project showcasing a student portal user flow for maintaining student details, academic portal coordination and access records.',
      tech: ['JavaScript', 'React.js', 'Node.js', 'MongoDB'],
      company: 'Personal Project',
      client: 'GitHub Repository',
      link: 'https://github.com/Sahayadhas2811/Sastra_project-student-portal',
      mode: 'personal',
      language: 'JavaScript'
    },
    {
      title: 'Student Register Portal',
      repoName: 'Student-Register-Portal',
      category: 'Repository Project',
      image: '/images/project-commerce.svg',
      summary: 'Repository for a student registration portal and academic record intake workflow.',
      details: 'Public GitHub repository for a student register portal supporting student information capture, enrollment workflow and access to student operational records.',
      tech: ['JavaScript', 'React.js', 'Node.js', 'Express.js'],
      company: 'Personal Project',
      client: 'GitHub Repository',
      link: 'https://github.com/Sahayadhas2811/Student-Register-Portal',
      mode: 'personal',
      language: 'JavaScript'
    },
    {
      title: 'Ticketing Tool',
      repoName: 'Ticketing',
      category: 'Repository Project',
      image: '/images/project-cms.svg',
      summary: 'A ticketing application repository for issue intake, tracking and workflow coordination.',
      details: 'Public GitHub repository showcasing a ticketing tool used for service request lifecycle coordination, issue categorization and status-driven operations.',
      tech: ['TypeScript', 'React.js', 'Node.js', 'REST APIs'],
      company: 'Personal Project',
      client: 'GitHub Repository',
      link: 'https://github.com/Sahayadhas2811/Ticketing',
      mode: 'personal',
      language: 'TypeScript'
    },
    {
      title: 'Deploy Test',
      repoName: 'DeployTest',
      category: 'Repository Project',
      image: '/images/project-dashboard.svg',
      summary: 'Deployment test repository for validating a build and release workflow.',
      details: 'Public GitHub repository focusing on deployment smoke testing, build validation and application release workflow confidence.',
      tech: ['TypeScript', 'Node.js', 'CI/CD'],
      company: 'Personal Project',
      client: 'GitHub Repository',
      link: 'https://github.com/Sahayadhas2811/DeployTest',
      mode: 'personal',
      language: 'TypeScript'
    }
  ],
  achievements: [
    {
      id: 'ach-1',
      title: 'Certificate of Achievement',
      issuer: 'Prodapt & Verizon',
      date: 'Sep 2025',
      badge: 'Defect Reduction Excellence',
      metric: 'Double → Single Digits',
      image: '/images/ach-1.jpeg',
      description: 'Awarded by Prodapt and Verizon for exceptional engineering impact: reduced production defects from double to single digits, actively supported cross-functional engineering teams, and significantly improved release quality across mission-critical telecom platforms.',
      tags: ['Quality Engineering', 'Defect Resolution', 'Prodapt', 'Verizon', 'Platform Stability']
    },
    {
      id: 'ach-2',
      title: 'Rising Rookie Award of the Month',
      issuer: 'Prodapt (Nominated by Karthik Kumar B)',
      date: 'Aug 2025',
      badge: 'Rising Rookie of the Month',
      metric: '53 Critical Defects Resolved',
      image: '/images/ach-2.jpeg',
      description: 'Honored with the Rising Rookie Award for excelling in business-critical platforms including WFM, IOP, and ECHO. Demonstrated unparalleled dedication and analytical prowess by resolving 53 defects in PEDS and NSSEC, significantly enhancing application stability and functionality.',
      tags: ['WFM', 'IOP', 'ECHO', 'PEDS', 'NSSEC', 'Analytical Problem Solving']
    }
  ],
  socials: {
    github: 'https://github.com/Sahayadhas2811',
    linkedin: 'https://www.linkedin.com/in/sahayachristhudhas/',
    phone: '+91 9025370688',
    email: 'sahayadhas2811@gmail.com'
  }
}
