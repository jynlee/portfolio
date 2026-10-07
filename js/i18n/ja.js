window.I18N = window.I18N || {};
window.I18N.ja = {
  meta: {
    title: "イ・ジュヨン | AI・バックエンド開発者",
    desc: "RAGチャットボットとデータパイプラインを開発するイ・ジュヨンのポートフォリオです。"
  },
  nav: { about: "紹介", skills: "スキル", projects: "プロジェクト", journey: "Timeline", contact: "連絡", cta: "メールを送る" },
  ui: { theme: "テーマ切替", lang: "言語を選択", menu: "メニューを開く", skip: "本文へスキップ", scroll: "scroll", top: "トップへ戻る", zoom: "拡大表示", close: "閉じる" },
  hero: {
    eyebrow: "RAG · LLM · 生成AI",
    name: "イ・ジュヨン",
    role: "AI・バックエンド開発者",
    tagline: "データ収集から検索、回答生成まで、RAGチャットボットの全工程を自分で実装します。",
    cta1: "プロジェクトを見る",
    cta2: "連絡する"
  },
  about: {
    label: "私について",
    title: "技術を理解し、\n活かす開発者",
    p2: "RAG（文書を検索し、根拠を示して答えるAI）チャットボットをチームで完成させ、法令データの収集から検索、回答生成までを担当しました。",
    p3: "行き詰まったら別の道を探して試し続け、考え込むより先に動く習慣を身につけています。",
    facts: {
      focus: { l: "関心分野", v: "LLM · RAG · 生成AI" },
      edu: { l: "在学中", v: "AIフィンテック融合科（旧スマートファイナンス科）· 2026.03〜" }
    },
    stats: { projects: "プロジェクト", repos: "GitHubリポジトリ", areas: "技術分野" }
  },
  skills: {
    label: "使う技術",
    title: "技術スタック",
    groups: {
      ai: {
        title: "AI · LLM · RAG",
        points: [
          "OllamaでローカルLLM（Gemma3/Gemma4）の提供環境を構築・運用",
          "BGE-M3、ko-sroberta埋め込みによるBM25+kNNハイブリッド検索を実装",
          "収集→埋め込み→インデックス→検索→回答生成のRAGパイプラインを設計・実装"
        ]
      },
      python: {
        title: "Python · FastAPI",
        points: [
          "FastAPIによるREST APIサーバーの設計・開発",
          "Pandasによるデータ前処理、requestsで外部Open APIと連携",
          "venvによる仮想環境とパッケージ管理"
        ]
      },
      backend: {
        title: "Java · Spring",
        points: [
          "Spring Legacy MVCによるWebアプリケーションの設計・開発",
          "MyBatisでMapper/DAO/Service層の設計とSQLマッピング",
          "オブジェクト指向の基本原理の理解、Tomcat開発環境の構築"
        ]
      },
      db: {
        title: "DB・検索エンジン",
        points: [
          "OpenSearchの導入・運用、インデックス設計、ハイブリッド検索クエリの作成",
          "MySQL、MariaDB、OracleでのSQLによる検索・管理",
          "DBeaverによるDB管理"
        ]
      },
      infra: {
        title: "Linux・インフラ・協業",
        points: [
          "Linux（Ubuntu、WSL2）環境の構築とサーバー運用",
          "systemd timerによるバッチ・自動化",
          "DockerとKafka環境の構築"
        ]
      },
      front: {
        title: "フロントエンド",
        points: [
          "jQueryとAJAXによる動的UI",
          "Chart.jsによるデータ可視化ダッシュボード",
          "HTML/CSS/JavaScriptによる画面開発"
        ]
      }
    }
  },
  projects: {
    label: "主な作品",
    title: "プロジェクト",
    filter: { all: "すべて", ai: "AI", data: "データ", web: "Web" },
    links: { github: "GitHub" },
    items: {
      rag: {
        title: "RAG_Mazelone — エステ向け法律相談チャットボット",
        tag: "チームプロジェクト",
        period: "2026.06 〜 完了",
        summary: "法令と食品医薬品安全処のデータをもとに回答する、エステ向け法律相談RAGチャットボット。Mazeloneと連携したチームプロジェクトです。",
        points: [
          "法制処の法令データと食品医薬品安全処APIの収集パイプラインを構築",
          "BM25+kNNハイブリッド検索と、質問タイプ別の動的topKロジックを実装",
          "[要約]/[ポイント]/[一覧]の構造化回答フォーマットを設計、UTF-8表示エラーを修正"
        ]
      },
      etl: {
        title: "WTI・為替ETLダッシュボード",
        tag: "データパイプライン",
        summary: "為替と原油価格を一緒に収集し、ウォン建てのエネルギーコストの推移を示すダッシュボードです。",
        points: [
          "韓国銀行ECOS（USD/KRW）とFRED（WTI）APIからデータを収集",
          "MAX(trade_date)を基準にした増分ロード、INSERT IGNOREで重複を防止",
          "FastAPI + Jinja2 + Chart.jsによる可視化ダッシュボード"
        ]
      },
      seoul: {
        title: "Seoul My Soul — ソウル観光案内AIチャットボット",
        tag: "RAGチャットボット",
        summary: "ソウル観光を会話で案内するRAGチャットボット。「その近く」のような文脈の質問にも対応します。",
        points: [
          "質問を768次元ベクトル（ko-sroberta-multitask）に変換し、OpenSearch KNNで類似観光地の上位5件を検索",
          "ソウル25区の文字列マッチングでフィルタリングし、質問にない場合は会話履歴を逆順に探索",
          "セッションごとに直近100件の会話を保持し、30日経過したデータは毎日午前3時に自動削除"
        ]
      },
      grade: {
        title: "学生成績管理システム",
        tag: "Webアプリケーション",
        summary: "学生の点数から平均と等級を自動計算する3層構造のWebシステムです。",
        points: [
          "Servlet → Service → DAO → JDBCの各層を自分で実装（Java 17、Servlet 4.0、Tomcat 9、Mavenマルチステージビルド）",
          "Docker Compose 1つでnginx・Tomcat・MySQLの3層構成をまとめて起動し、ボリュームでDBデータを保持",
          "nginxリバースプロキシ（/api → backend:8080）で、CORS設定なしにフロントとバックエンドを接続"
        ]
      }
    }
  },
  journey: {
    label: "歩み",
    title: "Timeline",
    items: {
      pipeline: { date: "2026 上半期", title: "データパイプラインとモデル実習", desc: "WTI・為替ETLダッシュボード（ECOS、FRED、増分ロード）、株式データパイプラインのチームプロジェクト（KIS APIマスターファイル解析、MySQL連携）、gemma-3-4b-itのLoRAファインチューニングとGGUF変換、HuggingFaceへのアップロードを行いました。" },
      apps: { date: "2026 上半期", title: "Seoul My Soul と学生成績管理システム", desc: "Spring Boot、FastAPI、OpenSearchでソウル観光RAGチャットボットを、Servlet、JDBC、Docker Composeで3層構造の成績管理Webシステムを開発しました。" },
      poly: { date: "2026.03 〜 現在", title: "AIフィンテック融合科（旧スマートファイナンス科）", desc: "PythonとSQLによるデータ処理とETLを学び、チームプロジェクトでRAGチャットボットを開発しました。" },
      selfstudy: { date: "2021 – 2024", title: "3Dグラフィックス", desc: "Unreal Engine、ZBrush、3ds Maxを学び、ゲーム業界の3Dグラフィックデザイナーを目指してポートフォリオを準備しました。" },
      cafe: { date: "2020.04 – 2024.09", title: "カフェ運営（4年5か月）", desc: "Paik's Coffeeでカフェ運営全般を担当しました。" },
      design: { date: "2016 – 2021", title: "展示デザイン学科", desc: "展示デザインを専攻し、卒業しました。" }
    }
  },
  contact: {
    label: "お問い合わせ",
    title: "良いサービスは、対話から始まります",
    lead: "新しいプロジェクト、協業のご提案、気軽なお話など、いつでもご連絡ください。",
    email: "メールを送る",
    copy: "メールをコピー",
    copied: "コピーしました"
  },
  footer: { note: "Designed & Built by イ・ジュヨン" }
};
