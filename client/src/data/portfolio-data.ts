export const portfolioData = {
  // Personal information
  name: "Ravi Kiran",
  title: "B.Tech Computer Science Student",
  specialty: "Full-Stack Developer | AI Enthusiast | Cloud Computing",
  bio: "Hi, I'm Ravi Kiran, a B.Tech Computer Science student at Lovely Professional University, specializing in Full-Stack Development, Artificial Intelligence, and Cloud Computing. I focus on building scalable applications and have a solid foundation in both front-end and back-end development. I am committed to continuously improving my skills in emerging technologies.",
  
  // Resume download link
  resumeUrl: "#", // Will be provided by the user
  
  // Skills section
  skills: {
    programming: [
      { name: "Python", level: "Advanced", percentage: 90 },
      { name: "Java", level: "Intermediate", percentage: 75 },
      { name: "C++", level: "Intermediate", percentage: 70 },
      { name: "JavaScript", level: "Advanced", percentage: 85 },
    ],
    frontend: [
      { name: "HTML5", level: "Advanced", percentage: 90 },
      { name: "CSS3", level: "Advanced", percentage: 85 },
      { name: "Next.js", level: "Intermediate", percentage: 75 },
    ],
    backend: [
      { name: "Node.js", level: "Advanced", percentage: 85 },
      { name: "Express.js", level: "Intermediate", percentage: 75 },
    ],
    machineLearning: [
      { name: "TensorFlow", level: "Intermediate", percentage: 70 },
      { name: "PyTorch", level: "Advanced", percentage: 85 },
      { name: "SciKit-Learn", level: "Advanced", percentage: 90 },
      { name: "HuggingFace", level: "Intermediate", percentage: 75 },
    ],
    databases: [
      { name: "MySQL", level: "Intermediate", percentage: 75 },
    ],
    cloudDevOps: [
      { name: "AWS", level: "Intermediate", percentage: 70 },
      { name: "Docker", level: "Intermediate", percentage: 65 },
    ],
  },
  
  // Projects section
  projects: [
    {
      title: "Crop Disease Prediction using Deep Learning and MERN Stack",
      description: "A full-stack web application that empowers farmers to detect crop diseases in real-time by uploading images of affected plants. The backend leverages a PyTorch-based CNN with a RESNET architecture to classify diseases with 92% accuracy.",
      icon: "fas fa-leaf",
      technologies: ["Python", "PyTorch", "OpenCV", "React", "Node.js", "Express.js", "MongoDB"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Algorithmic Trading and Stock Market Prediction",
      description: "Designed a deep learning-based trading model to forecast stock market trends using LSTM and RNN architectures. Enhanced prediction accuracy with an attention-based Bi-LSTM model, achieving an R² score of 0.85.",
      icon: "fas fa-chart-line",
      technologies: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy", "Scikit-Learn"],
      demoLink: "#",
      codeLink: "#",
    },
  ],
  
  // Experience section
  experience: [
    {
      company: "CSE Pathshala",
      title: "Summer Training Internship - Full Stack Web Development",
      period: "June 2023 - July 2023",
      responsibilities: [
        "Completed a two-month summer training internship in Full Stack Web Development using the MERN stack.",
        "Gained hands-on experience in RESTful APIs, authentication, and state management.",
        "Learned to optimize performance, ensure responsive design, and deploy applications using cloud platforms.",
        "Built a dynamic web application integrating MongoDB, Express.js, React.js, and Node.js.",
      ],
    },
  ],
  
  // Certifications section
  certifications: [
    {
      title: "Fundamentals of Management",
      issuer: "Coursera",
      icon: "fas fa-award",
      category: "Management",
    },
    {
      title: "Development in Flutter",
      issuer: "Programming Pathsala",
      icon: "fas fa-mobile-alt",
      category: "Mobile Development",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      issuer: "Udemy",
      icon: "fas fa-laptop-code",
      category: "Python Programming",
    },
  ],
  
  // Achievements section
  achievements: [
    {
      title: "One among Dean's top 10% students at University",
      description: "For good academic performance and extra-curricular activities at University.",
      icon: "fas fa-star",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      title: "Participated in Smart India Hackathon",
      description: "Participated in SIH 2024, India's largest hackathon for solving real-world problems.",
      icon: "fas fa-laptop-code",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
  ],
  
  // Blog section
  blog: {
    platform: "Medium Blog",
    username: "@ravi742t7p",
    url: "https://medium.com/@ravi742t7p",
    description: "Check out my latest articles and tutorials on Medium",
  },
  
  // Contact information
  contact: {
    phone: "+91 9347280958",
    email: "ravi742t7p@gmail.com",
    linkedin: {
      username: "linkedin.com/in/ravi-kiran",
      url: "https://www.linkedin.com/in/ravi-kiran",
    },
    github: {
      username: "github.com/RaviKiran752",
      url: "https://github.com/RaviKiran752",
    },
  },
};
