/*
  ============================================================
  EDIT THIS FILE TO UPDATE YOUR PORTFOLIO. Nothing else needed.
  ============================================================
  Replace anything in CAPS_WITH_UNDERSCORES / marked EDIT ME.
  Keep the structure (keys, arrays) the same — only change values.
*/

const PORTFOLIO_DATA = {

  // ---------- BASICS ----------
  name: "Mahataz Mahe", // EDIT ME: add your full name, e.g. "Mahe Rahman"
  role: "Data Engineer in training",
  tagline: "I build pipelines that turn raw data into decisions — batch, streaming, and everything that keeps them honest.",
  location: "Chattogram, Bangladesh",
  email: "mahe13maha@gmail.com", // EDIT ME
  phone: "+880 1842662602", // EDIT ME
  resumeUrl: "#", // EDIT ME: link to your CV (PDF)
  photoUrl: "dp.png", // EDIT ME: link to a headshot, or leave blank for initials

  socials: [
    { label: "GitHub", url: "https://github.com/your-username" }, // EDIT ME
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mahataz-mahe-261188284" },
  ],

  // ---------- ABOUT ----------
  about: `Final-year Computer Science & Engineering student at East Delta University,
  Chittagong, graduating in 2027. Focused on data engineering. I like the unglamorous parts of data work — schema
  design, orchestration, testing pipelines so they fail loudly instead of silently. I tend to build things that need to actually work for real users,
  not just pass a demo.`,

  stats: [
    { value: "3", label: "Portfolio pipelines" },
    { value: "2027", label: "Graduating" },
  ],

  // ---------- SKILLS ----------
  skillGroups: [
    {
      label: "Languages",
      skills: ["Python", "SQL", "C / C++", "Java"],
    },
    {
      label: "Data Engineering",
      skills: ["BigQuery", "Airflow", "dbt Core", "Docker", "ETL Design", "Great Expectations"],
    },
    {
      label: "Analytics & BI",
      skills: ["Power BI", "Excel", "Exploratory Data Analysis", "Dashboarding"],
    },
    {
      label: "Platforms & Tools",
      skills: ["Google Cloud Platform", "Git / GitHub", "Kafka", "Spark"],
    },
  ],

  // ---------- PROJECTS ----------
  // status: "Live" | "In progress" | "Planned"
  projects: [
    {
      title: "Batch ETL to Cloud Data Warehouse",
      status: "In progress",
      stack: ["GCP", "BigQuery", "Airflow", "dbt Core", "Docker"],
      description:
        "An end-to-end batch pipeline that lands raw data, transforms it with dbt, and schedules the whole run with Airflow on a free-tier GCP VM. Built to mirror how a small team would actually run this in production, not a notebook.",
      githubUrl: "", // EDIT ME
      liveUrl: "", // EDIT ME
    },
    {
      title: "Real-Time Streaming Pipeline",
      status: "Planned",
      stack: ["Kafka", "Spark Structured Streaming", "GCP"],
      description:
        "A streaming pipeline that ingests events through Kafka and processes them with Spark, aimed at showing the same data modeling discipline as the batch project but under latency constraints.",
      githubUrl: "",
      liveUrl: "",
    },
    {
      title: "Data Quality Monitoring System",
      status: "Planned",
      stack: ["Great Expectations", "Python", "BigQuery"],
      description:
        "Automated checks that sit on top of the batch and streaming pipelines — validating schema, freshness, and null rates, and failing builds before bad data reaches a dashboard.",
      githubUrl: "",
      liveUrl: "",
    },
    {
      title: "Lexical Analyzer (C++)",
      status: "Live",
      stack: ["C++", "Compiler Design"],
      description:
        "A hand-built lexical analyzer implemented in C++, tokenizing source code as the front end of a compiler pipeline — coursework project turned into a clean, documented build.",
      githubUrl: "", // EDIT ME
      liveUrl: "",
    },
  ],

  // ---------- EXPERIENCE ----------
  experience: [
   
  ],

  // ---------- EDUCATION ----------
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      org: "East Delta University, Chittagong",
      period: "Expected 2027",
    },
  ],

  // ---------- CERTIFICATES ----------
  // Add one entry per certificate. thumbnail = image shown on the tile.
  // url = where the tile links to when clicked (the original certificate page).
  certificates: [
    {
      title: "Intro to SQL",
      issuer: "Kaggle",
      thumbnail: "https://storage.googleapis.com/kaggle-learn-certificates/34292592/c7b199df81d0d554c90c5c6487dad946.png",
      url: "https://www.kaggle.com/learn/certification/mahatazmahe/intro-to-sql",
    },
    {
      title: "Python",
      issuer: "Kaggle",
      thumbnail: "https://storage.googleapis.com/kaggle-learn-certificates/34292592/df67faae0ee28e47d181fe1fcc16c15e.png",
      url: "https://www.kaggle.com/learn/certification/mahatazmahe/python",
    },
  ],

  // ---------- CV ----------
  cv: {
    url: "", // EDIT ME: link to your CV — a PDF works best (Google Drive "share" link, GitHub raw link, etc.)
    updated: "", // EDIT ME (optional): e.g. "Updated Aug 2026"
  },
};
