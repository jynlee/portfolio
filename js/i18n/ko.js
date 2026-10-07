window.I18N = window.I18N || {};
window.I18N.ko = {
  meta: {
    title: "이주연 | AI·백엔드 개발자",
    desc: "RAG 챗봇과 데이터 파이프라인을 만드는 개발자 이주연의 포트폴리오입니다."
  },
  nav: { about: "소개", skills: "기술", projects: "프로젝트", journey: "타임라인", contact: "연락", cta: "이메일 보내기" },
  ui: { theme: "테마 전환", lang: "언어 선택", menu: "메뉴 열기", skip: "본문으로 건너뛰기", scroll: "scroll", top: "맨 위로", zoom: "크게 보기", close: "닫기" },
  hero: {
    eyebrow: "RAG · LLM · 생성형 AI",
    name: "이주연",
    role: "AI · 백엔드 개발자",
    tagline: "데이터 수집부터 검색, 답변 생성까지 RAG 챗봇의 전 과정을 직접 구현합니다.",
    cta1: "프로젝트 보기",
    cta2: "연락하기"
  },
  about: {
    label: "About Me",
    title: "기술을 이해하고\n활용하는 개발자",
    p2: "RAG(문서를 검색해 근거와 함께 답하는 AI) 챗봇을 팀 프로젝트로 완성했고, 법령 데이터 수집부터 검색, 답변 생성까지 전 과정을 다뤘습니다.",
    p3: "막히면 다른 길을 찾아 계속 시도하고 바로 실행해 보는 습관을 만들고 있습니다.",
    facts: {
      focus: { l: "관심 분야", v: "LLM · RAG · 생성형 AI" },
      edu: { l: "재학", v: "AI핀테크 융합과 (前 스마트금융과) · 2026.03~" }
    },
    stats: { projects: "프로젝트", repos: "GitHub 레포", areas: "기술 분야" }
  },
  skills: {
    label: "What I Work With",
    title: "기술 스택",
    groups: {
      ai: {
        title: "AI · LLM · RAG",
        points: [
          "Ollama로 로컬 LLM(Gemma3/Gemma4) 서빙 환경 구축·운영",
          "BGE-M3, ko-sroberta 임베딩과 BM25+kNN 하이브리드 검색 구현",
          "수집 → 임베딩 → 인덱싱 → 검색 → 응답 생성 RAG 파이프라인 설계·구현"
        ]
      },
      python: {
        title: "Python · FastAPI",
        points: [
          "FastAPI 기반 REST API 서버 설계·개발",
          "Pandas 데이터 전처리, requests로 외부 Open API 연동",
          "venv 가상환경과 패키지 관리"
        ]
      },
      backend: {
        title: "Java · Spring",
        points: [
          "Spring Legacy MVC 웹 애플리케이션 설계·개발",
          "MyBatis로 Mapper/DAO/Service 계층 설계와 SQL 매핑",
          "객체지향 핵심 원리 이해, Tomcat 개발 환경 구성"
        ]
      },
      db: {
        title: "데이터베이스 · 검색엔진",
        points: [
          "OpenSearch 설치·운영, 인덱스 설계, 하이브리드 검색 쿼리 작성",
          "MySQL, MariaDB, Oracle 기반 SQL 조회·관리",
          "DBeaver로 DB 관리"
        ]
      },
      infra: {
        title: "Linux · 인프라 · 협업",
        points: [
          "Linux(Ubuntu, WSL2) 환경 구성과 서버 운영",
          "systemd timer 기반 배치·자동화",
          "Docker, Kafka 환경 구축"
        ]
      },
      front: {
        title: "프론트엔드",
        points: [
          "jQuery와 AJAX로 동적 UI 처리",
          "Chart.js 데이터 시각화 대시보드 구현",
          "HTML/CSS/JavaScript 기반 화면 개발"
        ]
      }
    }
  },
  projects: {
    label: "Selected Work",
    title: "프로젝트",
    filter: { all: "전체", ai: "AI", data: "데이터", web: "웹" },
    links: { github: "GitHub" },
    items: {
      rag: {
        title: "RAG_Mazelone — 에스테틱 법률 자문 챗봇",
        tag: "팀 프로젝트",
        period: "2026.06 – 완료",
        summary: "법령과 식약처 데이터를 근거로 답하는 에스테틱 법률 자문 RAG 챗봇. 마젤원 연계 팀 프로젝트입니다.",
        points: [
          "법제처 법령 데이터와 식약처 API 수집 파이프라인 구축",
          "BM25+kNN 하이브리드 검색, 질문 유형별 동적 topK 로직 구현",
          "[요약]/[포인트]/[목록] 구조화 답변 포맷 설계, UTF-8 렌더링 오류 수정"
        ]
      },
      etl: {
        title: "WTI·환율 ETL 대시보드",
        tag: "데이터 파이프라인",
        summary: "환율과 유가를 함께 수집해 원화 에너지 비용 추이를 보여주는 대시보드입니다.",
        points: [
          "한국은행 ECOS(USD/KRW)와 FRED(WTI) API에서 데이터 수집",
          "MAX(trade_date) 기준 증분 적재, INSERT IGNORE로 중복 방지",
          "FastAPI + Jinja2 + Chart.js 시각화 대시보드"
        ]
      },
      seoul: {
        title: "Seoul My Soul — 서울 관광 안내 AI 챗봇",
        tag: "RAG 챗봇",
        summary: "서울 관광 정보를 대화로 안내하는 RAG 챗봇. '그 근처' 같은 맥락 질문도 이해합니다.",
        points: [
          "질문을 768차원 벡터(ko-sroberta-multitask)로 변환해 OpenSearch KNN으로 유사 관광지 상위 5개 검색",
          "서울 25개 구 이름 문자열 매칭 필터링, 질문에 없으면 대화 히스토리를 역순 탐색",
          "세션당 최근 100개 대화 유지, 30일 경과 데이터는 매일 새벽 3시 자동 삭제"
        ]
      },
      grade: {
        title: "학생 성적 관리 시스템",
        tag: "웹 애플리케이션",
        summary: "학생 점수를 입력하면 평균과 등급을 자동 계산해 보여주는 3-tier 웹 시스템입니다.",
        points: [
          "Servlet → Service → DAO → JDBC 계층을 직접 구현 (Java 17, Servlet 4.0, Tomcat 9, Maven 멀티스테이지 빌드)",
          "Docker Compose 하나로 nginx·Tomcat·MySQL 3-tier 통합 기동, 볼륨으로 DB 데이터 유지",
          "nginx 리버스 프록시(/api → backend:8080)로 CORS 설정 없이 프론트와 백엔드 통신"
        ]
      }
    }
  },
  journey: {
    label: "Career",
    title: "타임라인",
    items: {
      pipeline: { date: "2026 상반기", title: "데이터 파이프라인 · 모델 실습", desc: "WTI·환율 ETL 대시보드(ECOS·FRED, 증분 적재), 주식 데이터 파이프라인 팀 프로젝트(KIS API 마스터 파일 파싱, MySQL 연동), gemma-3-4b-it LoRA 파인튜닝과 GGUF 변환, HuggingFace 업로드를 진행했습니다." },
      apps: { date: "2026 상반기", title: "Seoul My Soul · 학생 성적 관리 시스템", desc: "Spring Boot + FastAPI + OpenSearch 기반 서울 관광 RAG 챗봇과, Servlet · JDBC · Docker Compose 기반 3-tier 성적 관리 웹 시스템을 만들었습니다." },
      poly: { date: "2026.03 – 현재", title: "AI핀테크 융합과 (前 스마트금융과)", desc: "Python, SQL 기반 데이터 처리와 ETL을 배우고, 팀 프로젝트로 RAG 챗봇을 개발했습니다." },
      selfstudy: { date: "2021 – 2024", title: "3D 그래픽", desc: "언리얼 엔진, ZBrush, 3ds Max를 공부하며 게임 업계 3D 그래픽 디자이너 포트폴리오를 준비했습니다." },
      cafe: { date: "2020.04 – 2024.09", title: "카페 운영 (4년 5개월)", desc: "빽다방에서 카페 전반의 운영을 담당했습니다." },
      design: { date: "2016 – 2021", title: "전시 디자인과", desc: "전시 디자인을 전공하고 졸업했습니다." }
    }
  },
  contact: {
    label: "Get In Touch",
    title: "좋은 서비스는 대화에서 시작됩니다",
    lead: "새로운 프로젝트, 협업 제안, 또는 가볍게 이야기 나누고 싶다면 언제든지 연락 주세요.",
    email: "이메일 보내기",
    copy: "이메일 복사",
    copied: "복사됨"
  },
  footer: { note: "Designed & Built by 이주연" }
};
