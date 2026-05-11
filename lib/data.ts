import { Project, Achievement, Education, SkillGroup } from "@/types";

export const projects: Project[] = [
  {
    id: "plant-monitor",
    title: "Smart Plant Health Monitoring System",
    description:
      "Arduino-based plant health monitoring system integrated with a mobile application to track soil moisture, temperature, and humidity in real time.",
    tags: ["Arduino", "Java", "Android Studio"],
    status: "completed",
    image: "/plant-monitor.jpg",
  },
  {
    id: "laptop-recommender",
    title: "Laptop Recommendation System",
    description:
      "Recommends laptops using a weighted scoring algorithm based on user preferences, performance needs, and budget.",
    tags: ["React", "Spring Boot", "Algorithms"],
    status: "ongoing",
    image: "/laptop-recommender.jpg",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["Java", "JavaScript", "C"],
  },
  {
    category: "Framework and Libraries",
    items: [
      "React",
      "Next.js",
      "HTML5 / CSS",
      "Tailwind",
      "Bootstrap",
      "Angular",
      "SpringBoot",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git / GitHub",
      "Docker",
      "Android Studio",
      "IntelliJ / VSCode",
      "NetBeans / CodeBlocks",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: "HackX 9 — Finalist",
    position: "Top 12",
    description:
      "Led team Code9 as Team Leader to the finals of this inter-university hackathon organized by University of Kelaniya, with project idea Edu VR.",
  },
  {
    title: "Intellicon '24 — Ideathon",
    position: "Runner Up",
    description:
      "Achieved Runner-Up with team Sentinels. Tackled AI-driven search and rescue using LoRa bands, ESP32 radio signals, and Dijkstra's Algorithm.",
  },
  {
    title: "MoraXtreme 9.0 — Algorithmic Coding",
    position: "Participant",
    description:
      "Competed in the algorithmic coding competition organized by IEEE Student Branch of University of Moratuwa, solving problems using DSA knowledge.",
  },
];

export const education: Education[] = [
  {
    institution: "University of Sri Jayewardenepura",
    degree: "Bachelor of Physical Science ICT",
    period: "May 2023 – March 2026",
    detail: "Current GPA: 2.31 — focused on Software Engineering core modules.",
  },
  {
    institution: "Prince of Wales College, Moratuwa",
    degree: "Advanced Level Examination",
    period: "2019 – 2022",
    detail: "Mathematics: C, Physics: C, ICT: B",
  },
  {
    institution: "JMC International School, Kalutara",
    degree: "Ordinary Level Examination",
    period: "",
    detail: "Mathematics: A, ICT: A, English: A, Science: C",
  },
];

export const certifications = [
  {
    title: "Front-End Web Development",
    issuer: "University of Moratuwa — CODL",
    detail: "Angular, HTML, JS, CSS",
  },
  {
    title: "JS Algorithms & Data Structures",
    issuer: "FreeCodeCamp",
    detail: "Mastery of logic and algorithmic thinking",
  },
];

export const contact = {
  phone: "+94 77 56 05 196",
  email: "ramanidasabesegprof@gmail.com",
  location: "Kalutara South, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/ramanidas-abeseg",
  github: "https://github.com/abesegR",
  hackerrank: "https://www.hackerrank.com/profile/abesegramanidas",
};
