// Single source of truth for all portfolio content.
// Sourced from Maskam Manoj Kumar's resume. Edit here to update the whole site.

export const profile = {
  name: 'Maskam Manoj Kumar',
  shortName: 'MANOJ KUMAR',
  initials: 'MM',
  firstName: 'Manoj',
  roles: ['AI ENGINEER', 'FULL-STACK DEV', 'ML PRACTITIONER'],
  location: 'Hyderabad, India',
  tagline:
    'AI & Full-Stack Developer building intelligent systems and modern web applications.',
  about: [
    'I am an AI & Full-Stack Developer based in Hyderabad, India. I build intelligent systems, conversational AI, and scalable web applications — pairing modern frontend engineering with hands-on machine learning.',
    'My focus areas are NLP, Retrieval-Augmented Generation (RAG), and LLM integration, alongside production React and Next.js development.',
  ],
  // Paste YOUR Ready Player Me avatar .glb URL here (create one free at https://readyplayer.me).
  // If this fails to load, the hero gracefully falls back to an abstract 3D object.
  avatarUrl: 'https://models.readyplayer.me/64bfa15f0e72c63d7c3934a6.glb',
  resumeUrl: '/Maskam_Manoj_Kumar_Resume.pdf',
}

export const contact = {
  email: 'manojmaskam@gmail.com',
  phone: '+91 8498949819',
  location: 'Hyderabad, Telangana, India',
  github: 'https://github.com/manojmaskam',
  linkedin: 'https://linkedin.com/in/maskam-manoj-kumar',
  twitter: 'https://twitter.com/',
}

// Vertical social rail (left edge) — label + url + icon key (see icons.jsx)
export const socials = [
  { key: 'github', label: 'GitHub', url: contact.github },
  { key: 'linkedin', label: 'LinkedIn', url: contact.linkedin },
  { key: 'twitter', label: 'Twitter', url: contact.twitter },
  { key: 'mail', label: 'Email', url: `mailto:${contact.email}` },
]

export const education = {
  school: 'Geethanjali College of Engineering and Technology',
  degree: 'Bachelor of Technology, Computer Science and Engineering',
  location: 'Hyderabad, Telangana',
  date: 'April 2024',
}

// "What I Do" service cards (pinned section)
export const services = [
  {
    title: 'AI / ML DEVELOPER',
    sub: 'Building intelligent systems & AI solutions',
    body: 'Developing AI agents, chatbots, and machine-learning models using Python, TensorFlow, and PyTorch. Specializing in LLMs, NLP, RAG pipelines, and deep learning.',
  },
  {
    title: 'FULL-STACK',
    sub: 'Modern web development & scalable apps',
    body: 'Building responsive, performant web applications using React, Next.js, Node.js, and databases. Creating seamless user experiences end to end.',
  },
  {
    title: 'DATA & DASHBOARDS',
    sub: 'Data-driven product decisions',
    body: 'Cleaning, preprocessing, and analyzing large datasets with Python (Pandas, NumPy) and SQL. Building interactive KPI dashboards with Chart.js.',
  },
]

// Career timeline (newest first). year shown large in the center column.
export const career = [
  {
    year: 'NOW',
    role: 'Learning Something New',
    sub: 'Self-Development',
    desc: "Continuously exploring emerging technologies, researching advanced AI systems, and pushing the boundaries of what's possible in tech.",
  },
  {
    year: '2025',
    role: 'Software Developer (Frontend & Data)',
    sub: 'Rotomaker India Pvt Ltd',
    desc: 'Building internal web apps and data dashboards in React.js, integrating REST APIs, and analyzing production datasets with Python and SQL to drive product decisions.',
  },
  {
    year: '2024',
    role: 'B.Tech, Computer Science',
    sub: 'Geethanjali College of Engineering',
    desc: 'Graduated with a strong foundation in data structures, algorithms, and software engineering — with a focus on ML and full-stack development.',
  },
  {
    year: '2023',
    role: 'AI & Computer Vision',
    sub: 'Self-Directed Projects',
    desc: 'Built real-time computer-vision and ML systems — including a face-recognition attendance platform — using Python, OpenCV, and React.',
  },
  {
    year: '2022',
    role: 'Full-Stack Developer',
    sub: 'Self-Taught & Projects',
    desc: 'Built complete web applications from frontend to backend — responsive UIs, RESTful APIs, and database solutions using React and Node.js.',
  },
  {
    year: '2021',
    role: 'Programming Foundations',
    sub: 'Began Learning',
    desc: 'Started the journey into software — learning Python, core CS concepts, and problem-solving through competitive programming.',
  },
]

// Skills grid — brand logos via simpleicons (slug). `mono` keeps a clean look.
// Grouped only for ordering; the grid is flat like the reference.
export const skills = [
  { name: 'React', slug: 'react' },
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'Tailwind', slug: 'tailwindcss' },
  { name: 'SCSS', slug: 'sass' },
  { name: 'Python', slug: 'python' },
  { name: 'PyTorch', slug: 'pytorch' },
  { name: 'TensorFlow', slug: 'tensorflow' },
  { name: 'Scikit-learn', slug: 'scikitlearn' },
  { name: 'Pandas', slug: 'pandas' },
  { name: 'NumPy', slug: 'numpy' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'Express', slug: 'express' },
  { name: 'GraphQL', slug: 'graphql' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'SQLite', slug: 'sqlite' },
  { name: 'Docker', slug: 'docker' },
  { name: 'GitHub Actions', slug: 'githubactions' },
  { name: 'Git', slug: 'git' },
  { name: 'AWS', slug: 'amazonwebservices' },
  { name: 'Hugging Face', slug: 'huggingface' },
  { name: 'Jupyter', slug: 'jupyter' },
  { name: 'Postman', slug: 'postman' },
  { name: 'Figma', slug: 'figma' },
]

// Projects. `real: true` are from the resume; `real: false` are placeholders.
// `tint` drives the card's gradient thumbnail.
export const projects = [
  {
    title: 'AI Trauma-Thera Bot',
    category: 'AI / NLP',
    year: '2024',
    real: true,
    tint: ['#7c5cff', '#19e6c4'],
    description:
      'An AI-powered trauma-support chatbot using deep-learning models to detect distress signals in voice and text. NLP pipelines classify sentiment and trauma patterns in real time, routing users to mental-health professionals when critical signals are detected, via a RESTful API to a React frontend.',
    technologies: ['Python', 'PyTorch', 'NLP', 'Deep Learning', 'REST API', 'React'],
  },
  {
    title: 'Face Recognition Attendance',
    category: 'Computer Vision',
    year: '2023',
    real: true,
    tint: ['#ff6b9d', '#7c5cff'],
    description:
      'A real-time attendance system using facial recognition and ML, eliminating manual tracking for 200+ users. A React dashboard connects to a Python/ML backend via REST APIs. Inference latency optimized by 30% through model quantization and efficient preprocessing.',
    technologies: ['Python', 'OpenCV', 'Machine Learning', 'React', 'REST API'],
  },
  {
    title: 'Local LLM Integration',
    category: 'AI / LLM',
    year: '2026',
    real: true,
    tint: ['#19e6c4', '#3b82f6'],
    description:
      'Integrated a local Qwen3-0.6B model via Ollama into a VS Code / GitHub Copilot Chat environment for AI-assisted coding in a Docker/Nginx/PHP/PostgreSQL stack. Configured API routing for seamless switching between local and cloud LLM providers.',
    technologies: ['Qwen3', 'Ollama', 'Docker', 'Copilot API', 'PostgreSQL'],
  },
  {
    title: 'RAG Knowledge Assistant',
    category: 'AI / LLM',
    year: '2025',
    real: false,
    tint: ['#f59e0b', '#ef4444'],
    description:
      'Placeholder — a Retrieval-Augmented Generation assistant: document Q&A pairing a vector database with an LLM to answer questions over a private knowledge base with cited sources.',
    technologies: ['Python', 'LangChain', 'Vector DB', 'FastAPI', 'React'],
  },
  {
    title: 'Analytics Dashboard',
    category: 'Full-Stack',
    year: '2025',
    real: false,
    tint: ['#3b82f6', '#7c5cff'],
    description:
      'Placeholder — a production dashboard with real-time KPI visualizations, role-based auth, and a typed REST/GraphQL API. Replace with one of your real Rotomaker or personal builds.',
    technologies: ['Next.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Chart.js'],
  },
  {
    title: 'Your Next Project',
    category: 'Coming Soon',
    year: '2026',
    real: false,
    tint: ['#6a6a76', '#16161c'],
    description:
      'Placeholder card — add your next build here. Update title, category, description, tech, and tint in src/data/profile.js.',
    technologies: ['Add', 'Your', 'Stack'],
  },
]
