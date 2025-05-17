export const siteConfig = {
  name: "Voltanex",
  description: "Research and development in Embedded Systems, Electronics, and AI",
  founder: "Gobinda Prasad Paudel",
  foundedDate: "February 05, 2024",
  focus: "Research and Development",
  contactEmail: "apple@gmail.com", // Updated email
  socialLinks: {
    twitter: "https://twitter.com/voltanex",
    github: "https://github.com/voltanex",
    linkedin: "https://linkedin.com/company/voltanex",
  },
}

export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Focus Areas", href: "/#focus-areas" },
  { name: "Projects", href: "/#projects" },
  { name: "Team", href: "/#team" },
  // { name: "Join Us", href: "/#join" },
  { name: "Contact", href: "/#contact" },
  { name: "Company Details", href: "/profile.pdf" },
]

// Focus areas data
export const focusAreas = [
  {
    id: "embedded-systems",
    title: "Embedded Systems",
    description:
      "Developing intelligent, energy-efficient embedded systems that form the backbone of sustainable technology solutions.",
    impact:
      "Our embedded systems reduce energy consumption by up to 40% compared to traditional solutions, contributing to a smaller carbon footprint.",
    icon: "Cpu",
    color: "blue",
    examples: [
      "Low-power sensor networks for environmental monitoring",
      "Smart grid control systems for optimized energy distribution",
      "Wearable health monitoring devices for preventive healthcare",
    ],
  },
  {
    id: "electronics",
    title: "Electronics",
    description:
      "Creating innovative electronic hardware that addresses real-world challenges with minimal environmental impact.",
    impact:
      "We design electronics with sustainability in mind, using recyclable materials and focusing on longevity to reduce electronic waste.",
    icon: "Circuit",
    color: "green",
    examples: [
      "Solar-powered IoT devices for agriculture",
      "Biodegradable circuit boards for temporary applications",
      "Energy harvesting systems for remote communities",
    ],
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    description:
      "Leveraging AI to solve complex problems and create intelligent systems that benefit society and protect our environment.",
    impact:
      "Our AI solutions help optimize resource usage, predict environmental changes, and enable more efficient systems across industries.",
    icon: "Brain",
    color: "purple",
    examples: [
      "Machine learning for predictive maintenance, reducing waste",
      "Computer vision for wildlife conservation and monitoring",
      "AI-powered energy management systems for buildings",
    ],
  },
]

// Add team members data
export const teamMembers = [
  {
    id: "gobinda_paudel",
    name: "Gobinda Prasad Paudel",
    role: "Founder & CEO",
    bio: "Learning and exploring the world of embedded systems, electronics, and AI. Passionate about creating sustainable technology solutions.",
    image: "https://gobindapoudel.com.np/images/photo1_cropped.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/ramkumar",
      twitter: "https://twitter.com/ramkumar",
      github: "https://github.com/ramkumar",
    },
  },
  // {
  //   id: "priya-sharma",
  //   name: "Priya Sharma",
  //   role: "Chief Technology Officer",
  //   bio: "Priya leads our technical strategy and oversees all R&D projects. Her background in electrical engineering and machine learning drives our innovative approach.",
  //   image: "/images/team/priya-sharma.jpg",
  //   socialLinks: {
  //     linkedin: "https://linkedin.com/in/priyasharma",
  //     twitter: "https://twitter.com/priyasharma",
  //     github: "https://github.com/priyasharma",
  //   },
  // },
  // {
  //   id: "alex-chen",
  //   name: "Alex Chen",
  //   role: "Lead Hardware Engineer",
  //   bio: "Alex specializes in PCB design and embedded systems architecture. His expertise in low-power design has been crucial for our energy harvesting projects.",
  //   image: "/images/team/alex-chen.jpg",
  //   socialLinks: {
  //     linkedin: "https://linkedin.com/in/alexchen",
  //     github: "https://github.com/alexchen",
  //   },
  // },
  // {
  //   id: "maya-patel",
  //   name: "Maya Patel",
  //   role: "AI Research Lead",
  //   bio: "Maya heads our AI research initiatives, focusing on optimizing machine learning models for embedded applications and edge computing.",
  //   image: "/images/team/maya-patel.jpg",
  //   socialLinks: {
  //     linkedin: "https://linkedin.com/in/mayapatel",
  //     twitter: "https://twitter.com/mayapatel",
  //     github: "https://github.com/mayapatel",
  //   },
  // },
  
]

// Add donation options
export const donationOptions = [
  {
    amount: 25,
    description: "Supporter",
    perks: "Monthly newsletter and acknowledgment on our website",
  },
  {
    amount: 100,
    description: "Contributor",
    perks: "All Supporter perks plus early access to project updates",
  },
  {
    amount: 500,
    description: "Partner",
    perks: "All Contributor perks plus annual virtual meeting with our research team",
  },
  {
    amount: 1000,
    description: "Innovator",
    perks: "All Partner perks plus your name/logo on project documentation",
  },
]

// Expand project data to include more details for project pages
export const projects = [
  {
    id: "glof-aid",
    title: "GLOF AID",
    description:
      "Global Learning & Optimization Device - An AI-powered system that optimizes energy consumption in industrial settings.",
    image: "/images/projects/glof-aid/profile.jpg",
    technologies: ["ESP32", "MQTT", "TensorFlow Lite", "PCB Design"],
    status: "Planning Phase",
    fullDescription: `
      Our Smart Sensor Network project aims to create a scalable, energy-efficient system for environmental monitoring in various settings, from urban areas to remote wilderness.
      
      The network consists of distributed sensor nodes that collect data on air quality, temperature, humidity, sound levels, and more. Each node is powered by an ESP32 microcontroller and features custom-designed PCBs optimized for low power consumption.
      
      Data is transmitted using the MQTT protocol to a central gateway, where it's processed using TensorFlow Lite models to identify patterns and anomalies. The processed data is then made available through a web dashboard and API.
      
      Key innovations in this project include:
      - Ultra-low power design allowing nodes to operate for months on a single battery charge
      - Edge computing capabilities for preliminary data analysis
      - Mesh networking for improved coverage in challenging environments
      - Machine learning models that adapt to changing conditions
    `,
    challenges: [
      "Optimizing power consumption for long-term deployment",
      "Ensuring reliable wireless communication in varied environments",
      "Developing efficient machine learning models that can run on resource-constrained devices",
      "Creating a scalable architecture that can support hundreds of nodes",
    ],
    results: [
      "Successfully deployed a 50-node network in an urban setting",
      "Achieved 3-month battery life on standard 18650 lithium cells",
      "Developed custom ML models with 92% accuracy for anomaly detection",
      "Created an open API that's now used by three partner organizations",
    ],
    teamLead: "Gobinda",
  },
  // {
  //   id: "autonomous-robot",
  //   title: "Autonomous Navigation Robot",
  //   description:
  //     "A self-navigating robot platform that uses computer vision and machine learning to map and navigate complex environments.",
  //   image: "/images/projects/autonomous-robot.jpg",
  //   technologies: ["Raspberry Pi", "OpenCV", "ROS", "3D Printing"],
  //   status: "Completed",
  //   fullDescription: `
  //     The Autonomous Navigation Robot project focused on developing a versatile robotic platform capable of navigating unknown environments without human intervention.
      
  //     Built around a Raspberry Pi 4 computing core, the robot uses a combination of sensors including LIDAR, stereo cameras, and ultrasonic distance sensors to perceive its surroundings. The chassis and mechanical components were designed in-house and manufactured using 3D printing and laser cutting techniques.
      
  //     For software, we implemented a custom navigation stack based on ROS (Robot Operating System) with significant modifications to optimize for our hardware configuration. Computer vision processing is handled through OpenCV, with a custom-trained neural network for object recognition and classification.
      
  //     The robot demonstrates remarkable capabilities in mapping unknown spaces, avoiding obstacles, and planning efficient paths to designated goals. It can operate in both indoor and outdoor environments and adapts to changing conditions in real-time.
  //   `,
  //   challenges: [
  //     "Balancing computational requirements with power constraints",
  //     "Developing robust algorithms for varied lighting conditions",
  //     "Creating a mechanical design that's both durable and lightweight",
  //     "Integrating multiple sensor types for redundancy and improved accuracy",
  //   ],
  //   results: [
  //     "Robot successfully navigated a complex maze with 100% accuracy",
  //     "Achieved 4-hour operational time on a single battery charge",
  //     "Developed a reusable software framework for future robotics projects",
  //     "Published research paper on our novel sensor fusion approach",
  //   ],
  //   teamLead: "Priya Sharma",
  // },
  // {
  //   id: "energy-harvesting",
  //   title: "Energy Harvesting Wearables",
  //   description:
  //     "Wearable devices that harvest energy from body heat and movement to power small electronics and sensors.",
  //   image: "/images/projects/energy-harvesting.jpg",
  //   technologies: ["Flexible PCB", "Energy Harvesting ICs", "Low-Power MCUs"],
  //   status: "Research Phase",
  //   fullDescription: `
  //     The Energy Harvesting Wearables project explores innovative ways to power electronic devices using energy harvested from the human body and environment. This research aims to eliminate or reduce the need for traditional batteries in wearable technology.
      
  //     Our approach combines multiple energy harvesting techniques, including:
  //     - Thermoelectric generators that convert body heat to electricity
  //     - Piezoelectric elements that generate power from movement and pressure
  //     - Photovoltaic cells optimized for indoor and low-light conditions
      
  //     These energy sources are integrated into flexible, comfortable wearable designs using custom-developed flexible PCBs. The harvested energy is managed by specialized ICs that efficiently store and regulate the power for use by ultra-low-power microcontrollers and sensors.
      
  //     Current prototypes can generate enough power to operate simple sensors and transmit data wirelessly at regular intervals, all without requiring an external power source or traditional battery.
  //   `,
  //   challenges: [
  //     "Maximizing energy harvesting efficiency from limited sources",
  //     "Developing flexible, comfortable designs that can be worn for extended periods",
  //     "Creating ultra-low-power circuits that can operate on harvested energy",
  //     "Balancing energy storage and consumption for reliable operation",
  //   ],
  //   results: [
  //     "Prototype wristband generates 3-5 mW during normal daily activities",
  //     "Successfully powered a BLE sensor transmitting every 5 minutes",
  //     "Developed novel flexible PCB manufacturing techniques",
  //     "Filed two provisional patents for our energy management circuit designs",
  //   ],
  //   teamLead: "Maya Patel",
  // },
]

export const teamPositions = [
  {
    title: "Embedded Systems Engineer",
    description:
      "Design and develop firmware for microcontroller-based systems. Experience with ARM Cortex-M, RTOS, and low-power design required.",
    type: "Full-time",
    location: "Remote / Hybrid",
  },
  {
    title: "PCB Design Specialist",
    description:
      "Create schematics and PCB layouts for electronic devices. Proficiency in Altium Designer or KiCad and experience with high-speed design preferred.",
    type: "Contract",
    location: "Remote",
  },
  {
    title: "AI Research Intern",
    description:
      "Assist in developing machine learning models for embedded applications. Knowledge of TensorFlow Lite, PyTorch, or similar frameworks required.",
    type: "Internship",
    location: "Remote",
  },
]

export const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Professor of Electrical Engineering",
    content:
      "Voltanex's innovative approach to embedded AI solutions has opened new possibilities for our research department. Their technical expertise is outstanding.",
    avatar: "/images/testimonials/sarah.jpg",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO, TechFuture Inc.",
    content:
      "We partnered with Voltanex on our IoT initiative and were impressed by their attention to detail and creative problem-solving abilities.",
    avatar: "/images/testimonials/michael.jpg",
  },
]
