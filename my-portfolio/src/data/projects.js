export const projects = [
  {
    slug: "construction-site-safety-iot-project",
    title: "Construction Site Safety IoT Project",
    short: "Smart vest safety system with real-time alerts for construction environments.",
    description:
      "An IoT-based safety solution using smart vest concepts for hazard detection and worker identification. Focuses on real-time alerts and safety monitoring.",
    tech: ["IoT", "ESP8266/ESP32", "C/C++", "Sensors"],
    tags: ["IoT", "Safety", "Embedded"],
    github: "https://github.com/malinga203/Construction-Site-Safety-IOT-Project",
    
  },
  {
    slug: "care-buddy",
    title: "care-buddy",
    short: "Pet care management system built with Spring Boot Microservices & React.",
    description:
      "A pet care management platform with secure login and REST APIs. Supports owner, pet, doctor, and appointment management with microservices architecture.",
    tech: ["Spring Boot", "Microservices", "React", "REST API"],
    tags: ["Full Stack", "Microservices", "React"],
    github: "https://github.com/malinga203/care-buddy",
    
  },
  {
    slug: "sri-lanka-tourism-system",
    title: "SriLanka Tourism System",
    short: "Tourism web system to help users explore and plan travel in Sri Lanka.",
    description:
      "A modern tourism web platform designed to help tourists explore hotels and places and plan trips efficiently. Includes user-friendly UI and backend features.",
    tech: ["Laravel", "Blade", "PHP", "MySQL"],
    tags: ["PHP", "Web", "Laravel"],
    github: "https://github.com/malinga203/SriLanka-Tourism-System",
    
  },
  {
    slug: "scientific-calculator",
    title: "scientific-calculator",
    short: "Modern scientific calculator built with React and mathjs.",
    description:
      "A responsive calculator app with advanced functions, memory, and history support. Built to practice React UI design and logic handling.",
    tech: ["React", "JavaScript", "mathjs"],
    tags: ["React", "Web", "JavaScript"],
    github: "https://github.com/malinga203/scientific-calculator",
    
  },
  {
    slug: "fertilizer-seed-distribution-system",
    title: "Fertilizer & Seed Distribution System",
    short: "Java desktop system to manage fertilizer and seed distribution workflow.",
    description:
      "A Java-based desktop application for managing fertilizer and seed distribution operations with structured modules and reporting.",
    tech: ["Java", "Desktop App", "OOP"],
    tags: ["Java", "Desktop", "OOP"],
    github: "https://github.com/malinga203/Fertilizer-Seed-Distribution-System",
    
  },
  {
    slug: "examination-management-system-gui",
    title: "Examination Management System GUI",
    short: "C# Windows Forms application for managing student examinations and marks.",
    description:
      "Team project built using C# Windows Forms for managing exams, schedules, and marks with a user-friendly GUI.",
    tech: ["C#", "Windows Forms", ".NET"],
    tags: ["C#", "Desktop", "GUI"],
    github: "https://github.com/malinga203/Examination-Management-System-GUI-",
    
  },

  {
    slug: "hotel-management-system-contribution",
    title: "Hotel Management System (Contributor)",
    short: "Contributed to an HTML/CSS/PHP hotel management system project.",
    description:
      "Contributed features and improvements to a hotel management system built with HTML, CSS, and PHP. Worked on UI pages and backend integration tasks.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    tags: ["PHP", "Web", "Contribution"],
    github: "https://github.com/Malinga203/Hotel-Management-System.git",
    
  },
];

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();