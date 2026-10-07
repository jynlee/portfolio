/* Language-neutral data (tech names, links, categories, ordering).
   All visible sentences live in js/i18n/*.js */
window.PORTFOLIO_DATA = {
  /* 공개할 이메일을 넣으면 이메일 버튼이 자동으로 나타납니다. 비워 두면 GitHub 버튼만 표시됩니다. */
  email: "",
  stats: { repos: 7 },
  skills: [
    { id: "ai", tags: ["Ollama", "Gemma", "BGE-M3", "ko-sroberta", "LoRA", "GGUF"] },
    { id: "python", tags: ["Python", "FastAPI", "Pandas", "Jinja2"] },
    { id: "backend", tags: ["Java", "Spring Legacy MVC", "MyBatis", "Servlet", "Tomcat"] },
    { id: "db", tags: ["OpenSearch", "MySQL", "MariaDB", "Oracle", "DBeaver"] },
    { id: "infra", tags: ["Linux", "Docker", "Kafka", "systemd", "Git", "Tailscale"] },
    { id: "front", tags: ["HTML", "CSS", "JavaScript", "jQuery", "Chart.js"] }
  ],
  /* category: ai | data | web  (matches the filter buttons) */
  projects: [
    {
      id: "rag",
      image: "assets/projects/rag.jpg",
      category: "ai",
      tech: ["FastAPI", "OpenSearch", "BGE-M3", "Ollama", "Spring Legacy MVC"],
      links: [{ url: "https://github.com/junhyuk0114/Aesthetic_chatbot" }]
    },
    {
      id: "etl",
      image: "assets/projects/etl.jpg",
      category: "data",
      tech: ["Python", "FastAPI", "Jinja2", "Chart.js", "MySQL"],
      links: [{ url: "https://github.com/jynlee/WTI_monitor_ETL" }]
    },
    {
      id: "seoul",
      image: "assets/projects/seoul.jpg",
      zoom: true,
      category: "ai",
      tech: ["Spring Boot", "JSP", "FastAPI", "OpenSearch", "ko-sroberta", "Gemma3", "MySQL"],
      links: []
    },
    {
      id: "grade",
      image: "assets/projects/grade.jpg",
      zoom: true,
      category: "web",
      tech: ["Java 17", "Servlet 4.0", "Tomcat 9", "nginx", "Docker Compose", "MySQL"],
      links: [{ url: "https://github.com/jynlee/student_grade_system" }]
    }
  ],
  journey: ["poly", "selfstudy", "cafe", "design"]
};
