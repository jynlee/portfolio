window.I18N = window.I18N || {};
window.I18N.en = {
  meta: {
    title: "Juyeon Lee | AI & Backend Developer",
    desc: "Portfolio of Juyeon Lee, a developer building RAG chatbots and data pipelines."
  },
  nav: { about: "About", skills: "Skills", projects: "Projects", journey: "Journey", contact: "Contact", cta: "Send email" },
  ui: { theme: "Toggle theme", lang: "Select language", menu: "Toggle menu", skip: "Skip to content", scroll: "scroll", zoom: "View larger", close: "Close" },
  hero: {
    eyebrow: "RAG · LLM · Data Pipelines",
    name: "Juyeon Lee",
    role: "AI & Backend Developer",
    tagline: "From 3D graphics to data and LLMs. I design and build the whole RAG pipeline: data collection, embeddings, search and answer generation.",
    cta1: "View projects",
    cta2: "Get in touch"
  },
  about: {
    label: "About Me",
    title: "Understanding technology,\nputting it to work",
    p1: "After university I spent three years studying Unreal Engine, ZBrush and 3ds Max, aiming to become a 3D graphics designer in the game industry. Watching AI quickly change how that work gets made, I decided to change direction and start over as a developer.",
    p2: "In the AI·Fintech Convergence department (formerly Smart Finance) I learned data processing and ETL with Python and SQL. In a team project I built a RAG legal-advice chatbot for the aesthetics industry, covering legal data collection, hybrid search and answer generation end to end.",
    p3: "My strength is persistence: when one approach is blocked, I look for another and keep going. I tend to overthink, so I'm building the habit of acting first instead of staying in my head.",
    facts: {
      focus: { l: "Focus", v: "LLM · RAG · Generative AI" },
      edu: { l: "Studying", v: "AI·Fintech Convergence (formerly Smart Finance) · since 2026.03" },
      lang: { l: "English", v: "OPIC IM2" }
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
          "Designed and built the full RAG pipeline: collect → embed → index → search → generate",
          "Fine-tuned a multimodal LLM with LoRA, converted it to GGUF and served it",
          "Designed structured response formats and the parsing logic behind them"
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
          "Set up Docker and Kafka environments",
          "Collaborated with Git/GitHub and worked remotely with teammates over Tailscale/SSH"
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
          "Designed the structured [Summary]/[Key points]/[List] answer format and fixed UTF-8 rendering bugs",
          "Set up a systemd timer batch to keep statute data up to date",
          "Designed the UI/UX and built the Spring Legacy MVC frontend"
        ]
      },
      etl: {
        title: "WTI & Exchange Rate ETL Dashboard",
        tag: "Data pipeline",
        summary: "Oil is priced in dollars, so a rising exchange rate plus rising oil prices hits Korea's energy costs twice. This pipeline collects both indicators so their correlation can be analyzed.",
        points: [
          "Collected data from the Bank of Korea ECOS (USD/KRW) and FRED (WTI) APIs",
          "Incremental loads based on MAX(trade_date), with INSERT IGNORE to prevent duplicates",
          "Visualization dashboard with FastAPI, Jinja2 and Chart.js",
          "Runs automatically on weekdays at 14:00 KST via crontab"
        ]
      },
      seoul: {
        title: "Seoul My Soul: AI Travel Guide Chatbot",
        tag: "RAG chatbot",
        summary: "An LLM + RAG chatbot that goes beyond keyword search and guides travelers through Seoul in natural conversation. It uses chat history to handle follow-ups like \"near there\".",
        points: [
          "Converts each question into a 768-dimension vector (ko-sroberta-multitask) and retrieves the top 5 similar spots with OpenSearch KNN",
          "Filters by Seoul's 25 districts via string matching, searching the chat history backwards when the question names none",
          "Keeps the latest 100 messages per session; data older than 30 days is deleted automatically at 3 AM daily",
          "Spring Boot + JSP frontend, FastAPI AI engine, and answers of two sentences or fewer from Gemma3:4b (Ollama)",
          "Designed and built the RAG pipeline: history lookup → embedding → KNN search → answer generation → save and display"
        ]
      },
      grade: {
        title: "Student Grade System",
        tag: "Web application",
        summary: "A 3-tier web system where you register students and subject scores, then view automatically calculated averages and grades.",
        points: [
          "Implemented the Servlet → Service → DAO → JDBC layers by hand (Java 17, Servlet 4.0, Tomcat 9, Maven multi-stage build)",
          "Brought up nginx, Tomcat and MySQL as a 3-tier stack with one Docker Compose file, keeping DB data in a volume",
          "Connected frontend and backend through an nginx reverse proxy (/api → backend:8080) with no CORS setup",
          "Traced and fixed Korean encoding issues: double encoding in init.sql and a JDBC collation mismatch",
          "Linked four screens (HTML/CSS/JS): register → enter scores → auto-calculated average and grade → view results"
        ]
      }
    }
  },
  journey: {
    label: "Career",
    title: "Journey",
    items: {
      poly: { date: "2026.03 – Present", title: "AI·Fintech Convergence (formerly Smart Finance)", desc: "Learning data processing and ETL with Python and SQL, and built a RAG chatbot in a team project." },
      selfstudy: { date: "2021 – 2024", title: "3D graphics", desc: "Studied Unreal Engine, ZBrush and 3ds Max while preparing a game-industry 3D graphics portfolio." },
      cafe: { date: "2020.04 – 2024.09", title: "Cafe operations (53 months)", desc: "Ran day-to-day cafe operations at Paik's Coffee." },
      design: { date: "2016 – 2021", title: "Dept. of Exhibition Design", desc: "Graduated in exhibition design." }
    }
  },
  contact: {
    label: "Get In Touch",
    title: "Let's build together",
    lead: "If you'd like to work together, discuss a new project, or just talk, feel free to reach out anytime.",
    email: "Send email",
    copy: "Copy email",
    copied: "Copied"
  },
  footer: { note: "Designed & Built by Juyeon Lee" }
};
