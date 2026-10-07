window.I18N = window.I18N || {};
window.I18N.en = {
  meta: {
    title: "Juyeon Lee | AI & Backend Developer",
    desc: "Portfolio of Juyeon Lee, a developer building RAG chatbots and data pipelines."
  },
  nav: { about: "About", skills: "Skills", projects: "Projects", journey: "Timeline", contact: "Contact", cta: "Send email" },
  ui: { theme: "Toggle theme", lang: "Select language", menu: "Toggle menu", skip: "Skip to content", scroll: "scroll", top: "Back to top", zoom: "View larger", close: "Close" },
  hero: {
    eyebrow: "RAG · LLM · Generative AI",
    name: "Juyeon Lee",
    role: "AI & Backend Developer",
    tagline: "I build the whole RAG chatbot pipeline myself: data collection, search and answer generation.",
    cta1: "View projects",
    cta2: "Get in touch"
  },
  about: {
    label: "About Me",
    title: "Understanding technology,\nputting it to work",
    p2: "I build chatbots with generative AI such as LLMs and RAG (AI that searches documents and answers with sources). I have worked hands-on across the whole flow of a working service, from collecting legal data to search and answer generation.",
    p3: "When one approach is blocked I try another, and I'm building the habit of acting right away. I'm now continuing with data pipelines and model practice in my AI Fintech program, aiming to be a developer who turns what I build into real services.",
    facts: {
      focus: { l: "Focus", v: "LLM · RAG · Generative AI" },
      edu: { l: "Studying", v: "AI·Fintech Convergence (formerly Smart Finance) · since 2026.03" }
    },
    stats: { projects: "Projects", repos: "GitHub repos", areas: "Tech areas" }
  },
  skills: {
    label: "What I Work With",
    title: "Tech Stack",
    groups: {
      ai: {
        title: "AI · LLM · RAG",
        points: [
          "Built and ran a local LLM (Gemma3/Gemma4) serving environment with Ollama",
          "Implemented BM25+kNN hybrid search with BGE-M3 and ko-sroberta embeddings",
          "Designed and built the full RAG pipeline: collect → embed → index → search → generate"
        ]
      },
      python: {
        title: "Python · FastAPI",
        points: [
          "Designed and built REST API servers with FastAPI",
          "Preprocessed data with Pandas and integrated external Open APIs with requests",
          "Managed virtual environments and packages with venv"
        ]
      },
      backend: {
        title: "Java · Spring",
        points: [
          "Designed and built web applications with Spring Legacy MVC",
          "Structured Mapper/DAO/Service layers and SQL mapping with MyBatis",
          "Applied core OOP principles and set up Tomcat development environments"
        ]
      },
      db: {
        title: "Databases & Search",
        points: [
          "Installed and ran OpenSearch, designed indexes and wrote hybrid search queries",
          "Queried and managed data with MySQL, MariaDB and Oracle",
          "Managed databases with DBeaver"
        ]
      },
      infra: {
        title: "Linux, Infra & Collaboration",
        points: [
          "Set up Linux (Ubuntu, WSL2) environments and ran servers",
          "Built batch jobs and automation with systemd timers",
          "Set up Docker and Kafka environments"
        ]
      },
      front: {
        title: "Frontend",
        points: [
          "Built dynamic UIs with jQuery and AJAX",
          "Built data visualization dashboards with Chart.js",
          "Developed pages in HTML, CSS and JavaScript"
        ]
      }
    }
  },
  projects: {
    label: "Selected Work",
    title: "Projects",
    filter: { all: "All", ai: "AI", data: "Data", web: "Web" },
    links: { github: "GitHub" },
    items: {
      rag: {
        title: "RAG_Mazelone: Legal Advice Chatbot for Aesthetics",
        tag: "Team project",
        period: "2026.06 – Completed",
        summary: "A RAG chatbot that answers aesthetics-industry legal questions from statute and MFDS data, built as a team project with Mazelone.",
        points: [
          "Built the collection pipeline for Ministry of Government Legislation statutes and MFDS API data",
          "Implemented BM25+kNN hybrid search with dynamic topK by question type",
          "Designed the structured [Summary]/[Key points]/[List] answer format and fixed UTF-8 rendering bugs"
        ]
      },
      etl: {
        title: "WTI & Exchange Rate ETL Dashboard",
        tag: "Data pipeline",
        summary: "A dashboard that collects exchange rates and oil prices together to track energy costs in KRW.",
        points: [
          "Collected data from the Bank of Korea ECOS (USD/KRW) and FRED (WTI) APIs",
          "Incremental loads based on MAX(trade_date), with INSERT IGNORE to prevent duplicates",
          "Visualization dashboard with FastAPI, Jinja2 and Chart.js"
        ]
      },
      seoul: {
        title: "Seoul My Soul: AI Travel Guide Chatbot",
        tag: "RAG chatbot",
        summary: "A RAG chatbot that guides travelers through Seoul and understands follow-ups like \"near there\".",
        points: [
          "Converts each question into a 768-dimension vector (ko-sroberta-multitask) and retrieves the top 5 similar spots with OpenSearch KNN",
          "Filters by Seoul's 25 districts via string matching, searching the chat history backwards when the question names none",
          "Keeps the latest 100 messages per session; data older than 30 days is deleted automatically at 3 AM daily"
        ]
      },
      grade: {
        title: "Student Grade System",
        tag: "Web application",
        summary: "A 3-tier web system that calculates averages and grades from student scores.",
        points: [
          "Implemented the Servlet → Service → DAO → JDBC layers by hand (Java 17, Servlet 4.0, Tomcat 9, Maven multi-stage build)",
          "Brought up nginx, Tomcat and MySQL as a 3-tier stack with one Docker Compose file, keeping DB data in a volume",
          "Connected frontend and backend through an nginx reverse proxy (/api → backend:8080) with no CORS setup"
        ]
      }
    }
  },
  journey: {
    label: "Career",
    title: "Timeline",
    items: {
      pipeline: { date: "2026 H1", title: "Data pipelines & model practice", desc: "WTI/exchange-rate ETL dashboard (ECOS, FRED, incremental loads), a stock data pipeline team project (KIS API master-file parsing, MySQL), LoRA fine-tuning of gemma-3-4b-it with GGUF conversion and a HuggingFace upload." },
      apps: { date: "2026 H1", title: "Seoul My Soul & Student Grade System", desc: "Built a Seoul travel RAG chatbot on Spring Boot, FastAPI and OpenSearch, and a 3-tier grade management web system with Servlet, JDBC and Docker Compose." },
      poly: { date: "2026.03 – Present", title: "AI·Fintech Convergence (formerly Smart Finance)", desc: "Learning data processing and ETL with Python and SQL, and built a RAG chatbot in a team project." },
      selfstudy: { date: "2021 – 2024", title: "3D graphics", desc: "Studied Unreal Engine, ZBrush and 3ds Max while preparing a game-industry 3D graphics portfolio." },
      cafe: { date: "2020.04 – 2024.09", title: "Cafe operations (4 years 5 months)", desc: "Ran day-to-day cafe operations at Paik's Coffee." },
      design: { date: "2016 – 2021", title: "Dept. of Exhibition Design", desc: "Graduated in exhibition design." }
    }
  },
  contact: {
    label: "Get In Touch",
    title: "Good products start with a conversation",
    lead: "If you'd like to work together, discuss a new project, or just talk, feel free to reach out anytime.",
    email: "Send email",
    copy: "Copy email",
    copied: "Copied"
  },
  footer: { note: "Designed & Built by Juyeon Lee" }
};
