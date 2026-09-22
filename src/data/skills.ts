export interface SkillCategory {
  title: string;
  skills: string[];
}

// No percentages or skill levels — just an honest, categorized list.
export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "Data",
    skills: ["pandas", "NumPy", "SQL", "Data Analysis"],
  },
  {
    title: "Computer Science",
    skills: ["Data Structures", "DBMS", "Object-Oriented Programming"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Streamlit", "Vercel"],
  },
];
