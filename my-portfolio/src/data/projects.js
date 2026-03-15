export const projects = [
  {
    slug: "construction-site-safety-iot-project",
    title: "Construction Site Safety IoT Project",
    category: "featured",
    short:
      "Smart construction safety solution using IoT concepts, RFID-based identification, and real-time alert logic.",
    description:
      "The Construction Site Safety IoT Project is a smart safety solution designed for construction environments. It focuses on worker identification, hazard awareness, and real-time safety monitoring using IoT concepts and embedded technologies.",
    tech: ["C++", "ESP8266/ESP32", "RFID", "Sensors", "IoT"],
    tags: ["IoT", "Embedded", "Safety"],
    github: "https://github.com/Malinga203/Construction-Site-Safety-IOT-Project",
    role: "Developer",
    highlights: [
      "RFID-based worker identification",
      "Hazard and safety-focused monitoring logic",
      "Real-time alert concept for unsafe conditions",
    ],
  },
  {
    slug: "care-buddy",
    title: "care-buddy",
    category: "featured",
    short:
      "Pet care management platform built with Spring Boot Microservices and React.js.",
    description:
      "Care-buddy is a pet care management system built with Spring Boot Microservices and React.js. It includes secure login, owner and doctor management, appointment handling, and RESTful architecture.",
    tech: ["React", "JavaScript", "Spring Boot", "Microservices", "REST API"],
    tags: ["Full Stack", "React", "Microservices"],
    github: "https://github.com/Malinga203/care-buddy",
    role: "Contributor / Developer",
    highlights: [
      "Secure authentication and structured API flow",
      "Pet, doctor, and appointment management",
      "Scalable microservices-based architecture",
    ],
  },
  {
    slug: "sri-lanka-tourism-system",
    title: "Sri Lanka Tourism System",
    category: "featured",
    short:
      "Tourism web application built to help users explore travel information, places, and hotels in Sri Lanka.",
    description:
      "The Sri Lanka Tourism System is a modern web-based platform designed to support travel planning. It helps users discover destinations, explore hotels, and access useful information through a user-friendly interface.",
    tech: ["PHP", "Laravel", "Blade", "MySQL", "HTML", "CSS"],
    tags: ["PHP", "Laravel", "Web"],
    github: "",
    role: "Developer",
    highlights: [
      "Travel planning oriented web workflow",
      "Hotel and place exploration support",
      "Laravel and Blade-based implementation",
    ],
  },
  {
    slug: "scientific-calculator",
    title: "scientific-calculator",
    category: "featured",
    short:
      "Modern scientific calculator built using React and mathjs with memory and history support.",
    description:
      "This scientific calculator was developed with React and mathjs to support advanced mathematical operations. It includes a clean UI, history tracking, and memory functionality.",
    tech: ["React", "JavaScript", "mathjs", "CSS"],
    tags: ["React", "JavaScript", "Web"],
    github: "https://github.com/Malinga203/scientific-calculator",
    role: "Developer",
    highlights: [
      "Advanced scientific operations",
      "History and memory handling",
      "Responsive modern React UI",
    ],
  },
  {
    slug: "fertilizer-seed-distribution-system",
    title: "Fertilizer Seed Distribution System",
    category: "featured",
    short:
      "Java desktop application developed to manage fertilizer and seed distribution processes.",
    description:
      "A Java-based desktop application designed to manage fertilizer and seed distribution in an organized manner. The project focuses on desktop workflow management using object-oriented concepts.",
    tech: ["Java", "OOP", "Desktop Application"],
    tags: ["Java", "Desktop", "OOP"],
    github: "https://github.com/Malinga203/Fertilizer-Seed-Distribution-System",
    role: "Developer",
    highlights: [
      "Desktop-based management system",
      "Object-oriented Java implementation",
      "Structured workflow for distribution tasks",
    ],
  },
  {
    slug: "examination-management-system-gui",
    title: "Examination Management System GUI",
    category: "featured",
    short:
      "C# Windows Forms application for handling examinations, schedules, and marks.",
    description:
      "This project is a C# Windows Forms application developed as a team project to manage student examinations, marks, and scheduling in a desktop GUI environment.",
    tech: ["C#", ".NET", "Windows Forms"],
    tags: ["C#", "Desktop", "GUI"],
    github: "https://github.com/Malinga203/Examination-Management-System-GUI-",
    role: "Team Member / Developer",
    highlights: [
      "Windows Forms desktop UI",
      "Schedule and marks management",
      "Team-based project development",
    ],
  },
  {
    slug: "examination-management-system-java",
    title: "Examination Management System",
    category: "featured",
    short:
      "Java Swing based examination management system developed using OOP concepts.",
    description:
      "A Java Swing desktop application created to manage examination-related processes using object-oriented programming concepts and a desktop user interface.",
    tech: ["Java", "Java Swing", "OOP"],
    tags: ["Java", "Swing", "OOP"],
    github: "https://github.com/Malinga203/Eamination-Management-system",
    role: "Developer",
    highlights: [
      "Java Swing desktop interface",
      "OOP-based system structure",
      "Academic workflow management",
    ],
  },
  {
    slug: "hotel-management-system-contribution",
    title: "Hotel Management System",
    category: "contribution",
    short:
      "Contributed to an HTML, CSS, and PHP-based hotel management system project.",
    description:
      "This is a contribution-based project where I supported the development of a hotel management system built with HTML, CSS, PHP, and database connectivity. My contribution focused on web pages, structure, and improvement tasks.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    tags: ["Contribution", "PHP", "HTML"],
    github: "",
    role: "Contributor",
    highlights: [
      "Supported HTML and PHP-based development",
      "Contributed to web system improvements",
      "Worked on hotel management related features",
    ],
  },
];

export const featuredProjects = projects.filter(
  (project) => project.category === "featured"
);

export const contributionProjects = projects.filter(
  (project) => project.category === "contribution"
);

export const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();