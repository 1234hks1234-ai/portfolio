export interface Project {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  liveUrl: string; // "#" placeholder until a real link is added
  githubUrl: string; // "#" placeholder until a real link is added
  imagePlaceholder: string; // short label used for the placeholder graphic
}

// TODO: replace liveUrl / githubUrl placeholders ("#") with real links,
// and swap imagePlaceholder-based cards for real screenshots when available.
export const projects: Project[] = [
  {
    slug: "lifelens",
    title: "LifeLens — Interactive Decision-Making Web Application",
    summary:
      "LifeLens is an interactive web application that helps users explore decisions by comparing options, factors, costs, time requirements, and importance levels.",
    problem:
      "Comparing options for a real decision — a purchase, a plan, a choice between paths — usually happens in someone's head or a messy spreadsheet, with no structured way to weigh what actually matters.",
    solution:
      "LifeLens gives users a structured workspace: define a decision, add options, define the factors that matter, weight them, and compare the results side by side — including simple what-if adjustments.",
    features: [
      "Create decisions",
      "Add multiple options",
      "Define decision factors",
      "Compare options",
      "Adjust factor weights",
      "Explore What-If scenarios",
      "Decision history",
      "Edit, duplicate and delete decisions",
      "Local data persistence",
      "Responsive design",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "localStorage",
      "Git/GitHub",
      "Vercel",
    ],
    liveUrl: "#",
    githubUrl: "#",
    imagePlaceholder: "LifeLens",
  },
  {
    slug: "data-drift-monitor",
    title: "Data Drift Monitor",
    summary:
      "A Streamlit-based data analysis application for monitoring changes between old and new transaction datasets and identifying potential feature drift.",
    problem:
      "When a dataset is updated over time, the statistical shape of its features can quietly shift — which can affect any analysis or model built on it, if no one is checking.",
    solution:
      "Data Drift Monitor loads an old and a new version of a transaction dataset, compares their feature distributions, and surfaces where meaningful drift has occurred.",
    features: [
      "Load and compare old vs. new transaction datasets",
      "Feature-level distribution comparison",
      "Visual charts for drift inspection",
    ],
    technologies: ["Python", "pandas", "NumPy", "Matplotlib", "Streamlit", "Data Analysis"],
    liveUrl: "#",
    githubUrl: "#",
    imagePlaceholder: "Data Drift Monitor",
  },
];
