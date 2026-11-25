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
  kind: "Work" | "Side Project" | "Contributor";
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
  social: Social[];
  work: Job[];
  education: School[];
  projects: Project[];
}

export const cv: Cv = {
  name: "Rehan A. Rana",
  location: "Toronto, Ontario, EST",
  locationLink: "https://www.google.com/maps/place/Toronto,+ON",
  about:
    "AI Engineer at Kagi, working on agents, retrieval and model integrations for Kagi Assistant.",
  summary:
    "Since 2024 I've worked on Kagi Assistant: I prototyped its agentic architecture, built its retrieval agent, and helped rebuild it on Pydantic AI. I also created and maintain Kagi's official MCP server. Before Kagi, I studied Computer Science and Business Administration at Wilfrid Laurier University. Outside work, I build small tools for problems I run into, mostly in Python and Rust, and have contributed to the Linux desktop projects I use every day.",
  website: "https://rehanzo.com",
  email: "rehan@rehanrana.com",
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
      start: "Apr 2024",
      end: "Present",
      highlights: [
        "Prototyped the agentic, tool-calling loop that replaced Kagi Assistant's fixed multi-model pipeline; the prototype became the architecture behind the whole product",
        "Major contributor to a ground-up rewrite of the Assistant's agent stack onto Pydantic AI, replacing its custom in-house framework",
        "Created and maintain Kagi's official open-source MCP server (500+ GitHub stars), letting AI agents like Claude use Kagi Search; also published Kagi's Python API SDK to PyPI",
        "Designed and built Librarian, a retrieval sub-agent that reads whole documents and web pages and returns excerpts, full content or a direct answer as each query needs; it powered all document and web retrieval and remains heavily used",
        "Built and maintained the content extraction pipelines behind retrieval, covering web pages, documents, YouTube transcripts and Reddit threads, with provider fallbacks for reliability",
        "Integrated and maintained models from all major AI providers, improving reliability and cost through prompt caching, failover and usage tracking",
        "Led development of a context management panel that lets users inspect and control what the Assistant is working with",
        "Built evaluation and benchmarking tooling to measure answer quality and guide model and prompt decisions",
      ],
    },
    {
      company: "Wilfrid Laurier University",
      link: "https://wlu.ca",
      title: "Work-Study Program Coordinator",
      badges: ["Remote"],
      start: "Oct 2022",
      end: "May 2023",
      highlights: [
        "Automated the program's Excel-based tracking, cutting manual work and errors",
        "Researched other universities' work-study programs and reported findings to support planning",
      ],
    },
    {
      company: "Cystic Fibrosis Canada",
      link: "https://www.cysticfibrosis.ca/",
      title: "Data Analyst",
      badges: ["Remote"],
      start: "Jul 2022",
      end: "Aug 2022",
      highlights: [
        "Handled data requests from external researchers, clinics and staff end to end, from scoping each request to analysing patient registry data in R",
        "Built a mutation resolving table that improved data quality for future analyses",
      ],
    },
    {
      company: "Cystic Fibrosis Canada",
      link: "https://www.cysticfibrosis.ca/",
      title: "QA Analyst",
      badges: [],
      start: "Jul 2019",
      end: "Aug 2019",
      highlights: [
        "Led user acceptance testing for a new patient registry feature set, and wrote its user manual for clinicians",
      ],
    },
  ],
  education: [
    {
      school: "Wilfrid Laurier University",
      degrees: [
        {
          degree: "Bachelor's Degree in Computer Science",
          detail: "Honours",
          start: "2021",
          end: "Aug 2023",
        },
        {
          degree: "Bachelor's Degree in Business Administration",
          detail: "Honours",
          start: "2017",
          end: "Apr 2021",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Kagi MCP Server",
      kind: "Work",
      tech: ["Python", "MCP"],
      description:
        "Kagi's official Model Context Protocol server, letting AI agents like Claude search the web with Kagi",
      link: {
        label: "github.com/kagisearch/kagimcp",
        href: "https://github.com/kagisearch/kagimcp",
      },
    },
    {
      title: "dyn-wall-rs",
      kind: "Side Project",
      tech: ["Rust"],
      description:
        "Changes the wallpaper with the sun's position through the day or a user-set schedule, and keeps other applications in sync with it",
      link: {
        label: "github.com/rehanzo/dyn-wall-rs",
        href: "https://github.com/rehanzo/dyn-wall-rs",
      },
    },
    {
      title: "swayhide",
      kind: "Side Project",
      tech: ["Rust"],
      description: "Window swallower for the Sway window manager",
      link: {
        label: "github.com/rehanzo/swayhide",
        href: "https://github.com/rehanzo/swayhide",
      },
    },
    {
      title: "VisioNomicon",
      kind: "Side Project",
      tech: ["Python", "OpenAI API"],
      description:
        "Renames image files based on their content using GPT-4o, following a user-defined naming template",
      link: {
        label: "github.com/rehanzo/VisioNomicon",
        href: "https://github.com/rehanzo/VisioNomicon",
      },
    },
    {
      title: "receipt-statement-linker",
      kind: "Side Project",
      tech: ["Python", "LLMs"],
      description:
        "Uses LLMs to extract receipts and bank statements, then matches each receipt to its transaction for item-level budgeting",
      link: {
        label: "github.com/rehanzo/receipt-statement-linker",
        href: "https://github.com/rehanzo/receipt-statement-linker",
      },
    },
    {
      title: "poisoned-search-llm",
      kind: "Side Project",
      tech: ["Python", "LLMs"],
      description:
        "Hands an LLM search results rewritten around fictional facts, to see how models behave when the web itself is wrong",
      link: {
        label: "github.com/rehanzo/poisoned-search-llm",
        href: "https://github.com/rehanzo/poisoned-search-llm",
      },
    },
    {
      title: "SwayFX",
      kind: "Contributor",
      tech: ["C", "OpenGL ES"],
      description: "Sway, but with eye candy: blur, shadows and rounded corners",
      link: {
        label: "github.com/wlrfx/swayfx",
        href: "https://github.com/wlrfx/swayfx",
      },
    },
    {
      title: "Waybar",
      kind: "Contributor",
      tech: ["C++", "GTK"],
      description: "Highly customizable status bar for Sway and other wlroots-based compositors",
      link: {
        label: "github.com/Alexays/Waybar",
        href: "https://github.com/Alexays/Waybar",
      },
    },
    {
      title: "hy3",
      kind: "Contributor",
      tech: ["C++", "Hyprland"],
      description: "Hyprland plugin for i3/Sway-style manual tiling",
      link: {
        label: "github.com/outfoxxed/hy3",
        href: "https://github.com/outfoxxed/hy3",
      },
    },
  ],
};
