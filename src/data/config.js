// Single source of truth for all portfolio content.
// Shape mirrors the reference site so every section renders identically.
// Edit values here to update the whole site.

export const config = {
  developer: {
    name: 'Manoj',
    fullName: 'Maskam Manoj Kumar',
    title: 'AI & Full-Stack Developer',
    description:
      'AI & Full-Stack Developer building intelligent systems and modern web applications. Passionate about machine learning, NLP, and creating production-grade web experiences.',
  },

  // Two-letter logo shown in the navbar.
  monogram: 'MK',

  // Hero 3D — choose ONE source:
  // 1) Spline scene (recommended for a desk/character scene): design at
  //    https://spline.design, then Export -> "Code" -> "React" and paste the
  //    scene URL (ends in .splinecode) here. When set, this takes priority.
  splineUrl: '', // e.g. 'https://prod.spline.design/XXXXXXXX/scene.splinecode'

  // 2) Ready Player Me avatar (.glb) — used only when splineUrl is empty.
  //    Create one at https://readyplayer.me and paste your .glb URL.
  //    If neither loads, the hero falls back to /images/me.svg automatically.
  avatarUrl: 'https://models.readyplayer.me/64bfa15f0e72c63d7c3934a6.glb',

  social: {
    github: 'manojmaskam',
    email: 'manojmaskam@gmail.com',
    location: 'Hyderabad, India',
  },

  about: {
    title: 'About Me',
    description:
      'I am an AI & Full-Stack Developer based in Hyderabad, India. I build intelligent systems, conversational AI, and scalable web applications — pairing modern frontend engineering with hands-on machine learning. My focus areas are NLP, Retrieval-Augmented Generation (RAG), and LLM integration, alongside production React and Next.js development. Code is craft, AI is the frontier.',
  },

  // Career timeline (newest first). `period` drives the large year label:
  // "Present" -> "NOW", "2025 - x" -> "2025", else the value itself.
  experiences: [
    {
      position: 'Learning Something New',
      company: 'Self-Development',
      period: '2025 - Present',
      description:
        "Continuously exploring emerging technologies, researching advanced AI systems, and pushing the boundaries of what's possible in tech.",
    },
    {
      position: 'Software Developer (Frontend & Data)',
      company: 'Rotomaker India Pvt Ltd',
      period: '2025',
      description:
        'Building internal web apps and data dashboards in React.js, integrating REST APIs, and analyzing production datasets with Python and SQL to drive product decisions.',
    },
    {
      position: 'B.Tech, Computer Science',
      company: 'Geethanjali College of Engineering',
      period: '2024',
      description:
        'Graduated with a strong foundation in data structures, algorithms, and software engineering — with a focus on ML and full-stack development.',
    },
    {
      position: 'AI & Computer Vision',
      company: 'Self-Directed Projects',
      period: '2023',
      description:
        'Built real-time computer-vision and ML systems — including a face-recognition attendance platform — using Python, OpenCV, and React.',
    },
    {
      position: 'Full-Stack Developer',
      company: 'Self-Taught & Projects',
      period: '2022',
      description:
        'Built complete web applications from frontend to backend — responsive UIs, RESTful APIs, and database solutions using React and Node.js.',
    },
    {
      position: 'Programming Foundations',
      company: 'Began Learning',
      period: '2021',
      description:
        'Started the journey into software — learning Python, core CS concepts, and problem-solving through competitive programming.',
    },
  ],

  projects: [
    {
      id: 1,
      title: 'AI Trauma-Thera Bot',
      category: 'AI / NLP',
      technologies: 'Python, PyTorch, NLP, Deep Learning, REST API, React',
      image: '/images/proj-trauma.svg',
      description:
        'An AI-powered trauma-support chatbot using deep-learning models to detect distress signals in voice and text. NLP pipelines classify sentiment and trauma patterns in real time, routing users to mental-health professionals when critical signals are detected.',
    },
    {
      id: 2,
      title: 'Face Recognition Attendance',
      category: 'Computer Vision',
      technologies: 'Python, OpenCV, Machine Learning, React, REST API',
      image: '/images/proj-face.svg',
      description:
        'A real-time attendance system using facial recognition and ML, eliminating manual tracking for 200+ users. A React dashboard connects to a Python/ML backend via REST APIs, with inference latency optimized 30% through model quantization.',
    },
    {
      id: 3,
      title: 'Local LLM Integration',
      category: 'AI / LLM',
      technologies: 'Qwen3, Ollama, Docker, Copilot API, PostgreSQL',
      image: '/images/proj-llm.svg',
      description:
        'Integrated a local Qwen3-0.6B model via Ollama into a VS Code / Copilot Chat environment for AI-assisted coding in a Docker/Nginx/PHP/PostgreSQL stack, with API routing for switching between local and cloud LLM providers.',
    },
    {
      id: 4,
      title: 'RAG Knowledge Assistant',
      category: 'AI / LLM',
      technologies: 'Python, LangChain, Vector DB, FastAPI, React',
      image: '/images/proj-rag.svg',
      description:
        'A Retrieval-Augmented Generation assistant for document Q&A — pairing a vector database with an LLM to answer questions over a private knowledge base with cited sources.',
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      category: 'Full-Stack',
      technologies: 'Next.js, TypeScript, GraphQL, PostgreSQL, Chart.js',
      image: '/images/proj-dashboard.svg',
      description:
        'A production dashboard with real-time KPI visualizations, role-based authentication, and a typed REST/GraphQL API for data-driven product decisions.',
    },
    {
      id: 6,
      title: 'Your Next Project',
      category: 'Coming Soon',
      technologies: 'Add, Your, Stack',
      image: '/images/proj-next.svg',
      description:
        'Placeholder card — add your next build here. Update title, category, description, and tech in src/data/config.js.',
    },
  ],

  contact: {
    email: 'manojmaskam@gmail.com',
    github: 'https://github.com/manojmaskam',
    linkedin: 'https://linkedin.com/in/maskam-manoj-kumar',
    twitter: 'https://twitter.com/',
    instagram: 'https://instagram.com/',
  },

  skills: {
    develop: {
      title: 'AI / ML DEVELOPER',
      description: 'Building intelligent systems & AI solutions',
      details:
        'Developing AI agents, chatbots, and machine-learning models using Python, TensorFlow, and PyTorch. Specializing in LLMs, NLP, RAG pipelines, and deep learning.',
      tools: ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'LLMs', 'NLP', 'RAG', 'Deep Learning', 'AI Agents'],
    },
    design: {
      title: 'FULL-STACK',
      description: 'Modern web development & scalable apps',
      details:
        'Building responsive and performant web applications using React, Next.js, Node.js, and databases. Creating seamless end-to-end user experiences with modern UI/UX principles.',
      tools: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'TailwindCSS', 'REST APIs', 'Docker', 'Git'],
    },
  },
}

// Tech-stack pyramid (rows narrow toward the bottom). Icons from the devicon CDN.
const dv = (slug, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`

export const techStack = [
  [
    { name: 'Python', icon: dv('python'), url: 'https://python.org' },
    { name: 'JavaScript', icon: dv('javascript'), url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
    { name: 'TypeScript', icon: dv('typescript'), url: 'https://typescriptlang.org' },
    { name: 'C', icon: dv('c'), url: 'https://en.cppreference.com/w/c' },
    { name: 'C++', icon: dv('cplusplus'), url: 'https://isocpp.org' },
    { name: 'HTML', icon: dv('html5'), url: 'https://developer.mozilla.org/docs/Web/HTML' },
    { name: 'CSS', icon: dv('css3'), url: 'https://developer.mozilla.org/docs/Web/CSS' },
    { name: 'Bash', icon: dv('bash'), url: 'https://www.gnu.org/software/bash/' },
    { name: 'React', icon: dv('react'), url: 'https://react.dev' },
    { name: 'Next.js', icon: dv('nextjs'), url: 'https://nextjs.org' },
  ],
  [
    { name: 'Node.js', icon: dv('nodejs'), url: 'https://nodejs.org' },
    { name: 'Express', icon: dv('express'), url: 'https://expressjs.com' },
    { name: 'FastAPI', icon: dv('fastapi'), url: 'https://fastapi.tiangolo.com' },
    { name: 'Flask', icon: dv('flask'), url: 'https://flask.palletsprojects.com' },
    { name: 'TensorFlow', icon: dv('tensorflow'), url: 'https://tensorflow.org' },
    { name: 'PyTorch', icon: dv('pytorch'), url: 'https://pytorch.org' },
    { name: 'Scikit-learn', icon: dv('scikitlearn'), url: 'https://scikit-learn.org' },
    { name: 'OpenCV', icon: dv('opencv'), url: 'https://opencv.org' },
    { name: 'NumPy', icon: dv('numpy'), url: 'https://numpy.org' },
  ],
  [
    { name: 'Pandas', icon: dv('pandas'), url: 'https://pandas.pydata.org' },
    { name: 'Tailwind', icon: dv('tailwindcss'), url: 'https://tailwindcss.com' },
    { name: 'MySQL', icon: dv('mysql'), url: 'https://mysql.com' },
    { name: 'PostgreSQL', icon: dv('postgresql'), url: 'https://postgresql.org' },
    { name: 'MongoDB', icon: dv('mongodb'), url: 'https://mongodb.com' },
    { name: 'Firebase', icon: dv('firebase', 'plain'), url: 'https://firebase.google.com' },
    { name: 'Redis', icon: dv('redis'), url: 'https://redis.io' },
    { name: 'Docker', icon: dv('docker'), url: 'https://docker.com' },
  ],
  [
    { name: 'Git', icon: dv('git'), url: 'https://git-scm.com' },
    { name: 'GitHub', icon: dv('github'), url: 'https://github.com' },
    { name: 'Linux', icon: dv('linux'), url: 'https://linux.org' },
    { name: 'AWS', icon: dv('amazonwebservices', 'original-wordmark'), url: 'https://aws.amazon.com' },
    { name: 'VS Code', icon: dv('vscode'), url: 'https://code.visualstudio.com' },
    { name: 'Vercel', icon: dv('vercel'), url: 'https://vercel.com' },
  ],
  [
    { name: 'Jupyter', icon: dv('jupyter'), url: 'https://jupyter.org' },
    { name: 'Figma', icon: dv('figma'), url: 'https://figma.com' },
    { name: 'Postman', icon: dv('postman'), url: 'https://postman.com' },
    { name: 'Hugging Face', icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg', url: 'https://huggingface.co' },
  ],
]
