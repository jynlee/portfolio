window.I18N = window.I18N || {};
window.I18N.zh = {
  meta: {
    title: "李周姸 | AI·后端开发者",
    desc: "李周姸的作品集，专注于RAG聊天机器人与数据管道开发。"
  },
  nav: { about: "关于", skills: "技能", projects: "项目", journey: "Timeline", contact: "联系", cta: "发送邮件" },
  ui: { theme: "切换主题", lang: "选择语言", menu: "打开菜单", skip: "跳到正文", scroll: "scroll", top: "返回顶部", zoom: "查看大图", close: "关闭" },
  hero: {
    eyebrow: "RAG · LLM · 生成式AI",
    name: "李周姸",
    role: "AI · 后端开发者",
    tagline: "从数据采集、检索到回答生成，亲自实现RAG聊天机器人的完整流程。",
    cta1: "查看项目",
    cta2: "联系我"
  },
  about: {
    label: "关于我",
    title: "理解技术，\n并运用技术的开发者",
    p2: "我在团队项目中完成了RAG（检索文档并附依据作答的AI）聊天机器人，负责从法规数据采集、检索到回答生成的全过程。",
    p3: "遇到阻碍就换条路继续尝试，并养成先行动、少空想的习惯。",
    facts: {
      focus: { l: "关注领域", v: "LLM · RAG · 生成式AI" },
      edu: { l: "在读", v: "AI金融科技融合系（原智能金融系）· 2026.03起" }
    },
    stats: { projects: "项目", repos: "GitHub 仓库", areas: "技术领域" }
  },
  skills: {
    label: "我的技能",
    title: "技术栈",
    groups: {
      ai: {
        title: "AI · LLM · RAG",
        points: [
          "使用Ollama搭建并运行本地LLM（Gemma3/Gemma4）服务环境",
          "使用BGE-M3、ko-sroberta嵌入模型，实现BM25+kNN混合检索",
          "设计并实现 采集 → 嵌入 → 索引 → 检索 → 回答生成 的完整RAG流程"
        ]
      },
      python: {
        title: "Python · FastAPI",
        points: [
          "设计并开发基于FastAPI的REST API服务器",
          "使用Pandas进行数据预处理，通过requests对接外部Open API",
          "使用venv管理虚拟环境与依赖包"
        ]
      },
      backend: {
        title: "Java · Spring",
        points: [
          "设计并开发基于Spring Legacy MVC的Web应用",
          "用MyBatis设计Mapper/DAO/Service分层并完成SQL映射",
          "理解面向对象核心原理，配置Tomcat开发环境"
        ]
      },
      db: {
        title: "数据库 · 搜索引擎",
        points: [
          "安装并运行OpenSearch，设计索引，编写混合检索查询",
          "使用MySQL、MariaDB、Oracle进行SQL查询与管理",
          "使用DBeaver管理数据库"
        ]
      },
      infra: {
        title: "Linux · 基础设施 · 协作",
        points: [
          "配置Linux（Ubuntu、WSL2）环境并运维服务器",
          "基于systemd timer的批处理与自动化",
          "搭建Docker、Kafka环境"
        ]
      },
      front: {
        title: "前端",
        points: [
          "使用jQuery与AJAX实现动态界面",
          "使用Chart.js实现数据可视化仪表盘",
          "基于HTML/CSS/JavaScript开发页面"
        ]
      }
    }
  },
  projects: {
    label: "精选作品",
    title: "项目",
    filter: { all: "全部", ai: "AI", data: "数据", web: "Web" },
    links: { github: "GitHub" },
    items: {
      rag: {
        title: "RAG_Mazelone — 美容行业法律咨询聊天机器人",
        tag: "团队项目",
        period: "2026.06 – 已完成",
        summary: "基于法规与食药处数据作答的美容行业法律咨询RAG聊天机器人，是与Mazelone合作的团队项目。",
        points: [
          "搭建法制处法规数据与食药处API数据采集管道",
          "实现BM25+kNN混合检索，以及按问题类型调整topK的逻辑",
          "设计[摘要]/[要点]/[列表]结构化回答格式，修复UTF-8渲染错误"
        ]
      },
      etl: {
        title: "WTI·汇率 ETL 仪表盘",
        tag: "数据管道",
        summary: "同时采集汇率与油价，展示韩元能源成本走势的仪表盘。",
        points: [
          "从韩国银行ECOS（USD/KRW）与FRED（WTI）API采集数据",
          "以MAX(trade_date)为基准增量加载，用INSERT IGNORE防止重复",
          "基于FastAPI + Jinja2 + Chart.js的可视化仪表盘"
        ]
      },
      seoul: {
        title: "Seoul My Soul — 首尔旅游向导AI聊天机器人",
        tag: "RAG聊天机器人",
        summary: "以对话方式介绍首尔旅游的RAG聊天机器人，能理解“那附近”这类追问。",
        points: [
          "将问题转换为768维向量（ko-sroberta-multitask），通过OpenSearch KNN检索最相似的前5个景点",
          "通过字符串匹配过滤首尔25个区，问题中没有区名时倒序查找对话历史",
          "每个会话保留最近100条对话，超过30天的数据每天凌晨3点自动删除"
        ]
      },
      grade: {
        title: "学生成绩管理系统",
        tag: "Web应用",
        summary: "录入学生成绩后自动计算平均分与等级的三层架构Web系统。",
        points: [
          "亲手实现Servlet → Service → DAO → JDBC分层（Java 17、Servlet 4.0、Tomcat 9、Maven多阶段构建）",
          "用一个Docker Compose文件统一启动nginx、Tomcat、MySQL三层架构，并用卷保留数据库数据",
          "通过nginx反向代理（/api → backend:8080），无需CORS配置即可连接前后端"
        ]
      }
    }
  },
  journey: {
    label: "经历",
    title: "Timeline",
    items: {
      pipeline: { date: "2026 上半年", title: "数据管道与模型实践", desc: "完成WTI·汇率ETL仪表盘（ECOS、FRED、增量加载）、股票数据管道团队项目（KIS API主文件解析、MySQL对接），以及gemma-3-4b-it的LoRA微调、GGUF转换与HuggingFace上传。" },
      apps: { date: "2026 上半年", title: "Seoul My Soul 与学生成绩管理系统", desc: "基于Spring Boot、FastAPI、OpenSearch开发首尔旅游RAG聊天机器人，并用Servlet、JDBC、Docker Compose开发三层架构成绩管理Web系统。" },
      poly: { date: "2026.03 – 至今", title: "AI金融科技融合系（原智能金融系）", desc: "学习基于Python、SQL的数据处理与ETL，并通过团队项目开发了RAG聊天机器人。" },
      selfstudy: { date: "2021 – 2024", title: "3D图形", desc: "学习虚幻引擎、ZBrush、3ds Max，准备游戏行业3D图形设计师作品集。" },
      cafe: { date: "2020.04 – 2024.09", title: "咖啡店运营（4年5个月）", desc: "在Paik's Coffee负责咖啡店的整体运营。" },
      design: { date: "2016 – 2021", title: "展示设计系", desc: "展示设计专业毕业。" }
    }
  },
  contact: {
    label: "联系方式",
    title: "好的产品，始于一次对话",
    lead: "无论是新项目、合作提议，还是想轻松聊聊，都欢迎随时联系我。",
    email: "发送邮件",
    copy: "复制邮箱",
    copied: "已复制"
  },
  footer: { note: "Designed & Built by 李周姸" }
};
