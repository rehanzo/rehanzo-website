// All CV content, kept separate from how it's displayed (src/pages/cv.astro).
// Plain data, so it can also be handed to an LLM as context later.

export interface Social {
  name: string;
  url: string;
}

export interface Job {
  company: string;
  link: string;
  title: string;
  badges: string[];
  start: string;
  end: string;
  highlights: string[];
}

export interface Degree {
  degree: string;
  detail: string;
  start: string;
  end: string;
}

export interface School {
  school: string;
  degrees: Degree[];
}

export interface Project {
  title: string;
  kind: "Side Project" | "Contributor";
  tech: string[];
  description: string;
  link: { label: string; href: string };
}

export interface Cv {
  name: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  website: string;
  email: string;
  phone: string;
  social: Social[];
  work: Job[];
  education: School[];
  skills: string[];
  projects: Project[];
}

export const cv: Cv = {
  name: "Rehan A. Rana",
  location: "Ajax, Ontario, EST",
  locationLink: "https://www.google.com/maps/place/Ajax,+ON",
  about:
    "Wilfrid Laurier BBA & CS graduate with expertise in software development and data analysis. Adept in process automation, software QA, and ready to contribute to a tech-driven team.",
  summary:
    "Honours graduate from Wilfrid Laurier University with dual expertise in Computer Science and Business Administration, I specialize in enhancing processes and analyzing data. Proficient in C, Python, Rust, R, and web technologies, I deliver solutions that bridge the gap between complex data and software development. Eager to contribute to innovative projects with a focus on precision and collaboration.",
  website: "https://rehanzo.com",
  email: "rehan@rehanrana.com",
  phone: "+1 647 904 4529",
  social: [
    { name: "GitHub", url: "https://github.com/rehanzo" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/rehan-rana-0a79a0156/" },
  ],
  work: [
    {
      company: "Kagi",
      link: "https://kagi.com",
      title: "AI Engineer",
      badges: ["Remote"],
      start: "Apr. 2024",
      end: "Present",
      highlights: [
        "Core engineer on Kagi Assistant, Kagi's AI assistant product, working across the full LLM stack from model integration to agent design and response rendering",
        "Created and maintain Kagi's official open-source MCP server (500+ GitHub stars), letting AI agents like Claude use Kagi Search; also published Kagi's Python API SDK to PyPI",
        "Major contributor to a ground-up rewrite of the Assistant's agent architecture, and led development of a context management panel that lets users inspect and control what the Assistant is working with",
        "Built the retrieval layer that gives the Assistant access to web content and user documents, with provider fallbacks for reliability",
        "Integrated and maintained models from all major AI providers, improving reliability and cost through prompt caching, failover and usage tracking",
        "Built evaluation and benchmarking tooling to measure answer quality and guide model and prompt decisions",
      ],
    },
    {
      company: "Wilfrid Laurier University",
      link: "https://wlu.ca",
      title: "Work-Study Program Coordinator",
      badges: ["Remote"],
      start: "Oct. 2022",
      end: "May 2023",
      highlights: [
        "Overhauled the existing Excel tracking system through automation of various processes, achieving significant efficiency gains and reducing errors",
        "Helped manage university work-study program, maintaining accurate tracking of data and assisting students through thoughtful email communication",
        "Performed extensive research on work-study programs of other universities, synthesizing information and reporting findings to support internal strategic planning",
      ],
    },
    {
      company: "Cystic Fibrosis Canada",
      link: "https://www.cysticfibrosis.ca/",
      title: "Data Analyst",
      badges: ["Remote"],
      start: "Jul. 2022",
      end: "Aug. 2022",
      highlights: [
        "Managed end-to-end processing of numerous data inquiries from external researchers, clinics, and CFC personnel",
        "Liaised closely with requesters to refine preliminary requirements down into actionable specifics, ensuring alignment before initiating analysis",
        "Conducted thorough analysis on raw patient data using R, based on established criteria",
        "Led a project to develop a mutation resolving table, enhancing data quality and increasing the accuracy and efficiency of future analyses",
      ],
    },
    {
      company: "Cystic Fibrosis Canada",
      link: "https://www.cysticfibrosis.ca/",
      title: "QA Analyst",
      badges: [],
      start: "Jul. 2019",
      end: "Aug. 2019",
      highlights: [
        "Spearheaded user acceptance testing (UAT) for new CFC registry feature set",
        "Collaborated with developers, providing detailed bug reports to guarantee a reliable and robust final product",
        "Developed a comprehensive user manual for clinicians and practitioners, facilitating adoption and utilization of the newly incorporated feature set",
        "Carried out rigorous data quality checks on patient data, reinforcing the integrity and reliability of the information held within the registry",
      ],
    },
    {
      company: "Wilfrid Laurier University",
      link: "https://wlu.ca",
      title: "Data Entry Clerk",
      badges: [],
      start: "Mar. 2019",
      end: "Apr. 2019",
      highlights: [
        "Scanned, entered, sorted, and verified ministry OSAP data",
        "Adhered to stringent data entry guidelines",
      ],
    },
    {
      company: "Super Clean Laundromat",
      link: "https://supercleanlaundromat.ca",
      title: "Laundromat Manager",
      badges: [],
      start: "May 2018",
      end: "Aug. 2018",
      highlights: [
        "Actively aided self-serve customers with operation of washing and drying machines, ensuring customer satisfaction",
        "Managed end-to-end laundry procedures including weighing clothing, providing time estimates, coordinating wash and fold orders, and handling cash transactions, ensuring effective customer service and order accuracy",
        "Demonstrated ability to work efficiently and effectively with minimal supervision",
      ],
    },
  ],
  education: [
    {
      school: "Wilfrid Laurier University",
      degrees: [
        {
          degree: "Bachelor's Degree in Computer Science",
          detail: "In-major GPA: 10.20/12 (Honours)",
          start: "2021",
          end: "Aug. 2023",
        },
        {
          degree: "Bachelor's Degree in Business Administration",
          detail: "GPA: 9.85/12 (Honours)",
          start: "2017",
          end: "Apr. 2021",
        },
      ],
    },
  ],
  skills: [
    "C",
    "Python",
    "Java",
    "Linux",
    "Bash",
    "Git",
    "Rust",
    "JavaScript",
    "R",
    "Excel",
    "C++",
    "SQL",
    "Go",
    "HTML",
    "CSS",
    "TypeScript",
    "Selenium",
    "PHP",
    "Docker",
  ],
  projects: [
    {
      title: "Multithreaded PageRank Simulator",
      kind: "Side Project",
      tech: ["C", "Open MPI"],
      description:
        "Simulates Google's PageRank algorithm using a multithreaded Open MPI C program, operating on Wikipedia data via a Linux supercomputer",
      link: {
        label: "github.com/rehanzo/PageRank-OpenMPI",
        href: "https://github.com/rehanzo/PageRank-OpenMPI",
      },
    },
    {
      title: "dyn-wall-rs",
      kind: "Side Project",
      tech: ["Rust", "TOML"],
      description:
        "Dynamically adjusts the wallpaper according to the sun's position throughout the day or user set schedules, and coordinates it with other applications",
      link: {
        label: "github.com/rehanzo/dyn-wall-rs",
        href: "https://github.com/rehanzo/dyn-wall-rs",
      },
    },
    {
      title: "VisioNomicon",
      kind: "Side Project",
      tech: ["Python", "GPT-4V"],
      description: "Utility that leverages GPT-4V to rename image files based on their content",
      link: {
        label: "github.com/rehanzo/VisioNomicon",
        href: "https://github.com/rehanzo/VisioNomicon",
      },
    },
    {
      title: "bootstub-updater",
      kind: "Side Project",
      tech: ["Rust", "TOML"],
      description:
        "Manages an EFI boot stub system according to user specifications, ensuring the most recently installed kernel is booted",
      link: {
        label: "github.com/rehanzo/bootstub-updater",
        href: "https://github.com/rehanzo/bootstub-updater",
      },
    },
    {
      title: "swayhide",
      kind: "Side Project",
      tech: ["Rust"],
      description: "Window swallower for SwayWM",
      link: {
        label: "github.com/rehanzo/swayhide",
        href: "https://github.com/rehanzo/swayhide",
      },
    },
    {
      title: "SwayFX",
      kind: "Contributor",
      tech: ["C", "OpenGL", "GLES2"],
      description: "SwayFX: Sway, but with eye candy!",
      link: {
        label: "github.com/WillPower3309/swayfx",
        href: "https://github.com/WillPower3309/swayfx",
      },
    },
    {
      title: "easyChatGPT",
      kind: "Contributor",
      tech: ["Python", "ChatGPT", "Selenium"],
      description:
        "An unofficial yet elegant interface of the ChatGPT API using browser automation that bypasses cloudflare detection and recaptchas",
      link: {
        label: "github.com/LanLan69/easyChatGPT",
        href: "https://github.com/LanLan69/easyChatGPT",
      },
    },
    {
      title: "Waybar",
      kind: "Contributor",
      tech: ["C++", "Meson", "GTK", "wlroots"],
      description: "Highly customizable Wayland bar for Sway and Wlroots based compositors",
      link: {
        label: "github.com/Alexays/Waybar",
        href: "https://github.com/Alexays/Waybar",
      },
    },
    {
      title: "hy3",
      kind: "Contributor",
      tech: ["C++", "Hyprland"],
      description: "Hyprland plugin for an i3/sway like manual tiling layout",
      link: {
        label: "github.com/outfoxxed/hy3",
        href: "https://github.com/outfoxxed/hy3",
      },
    },
  ],
};
