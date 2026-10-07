window.I18N = window.I18N || {};
window.I18N.ja = {
  meta: {
    title: "イ・ジュヨン | AI・バックエンド開発者",
    desc: "RAGチャットボットとデータパイプラインを開発するイ・ジュヨンのポートフォリオです。"
  },
  nav: { about: "紹介", skills: "スキル", projects: "プロジェクト", journey: "歩み", contact: "連絡", cta: "メールを送る" },
  ui: { theme: "テーマ切替", lang: "言語を選択", menu: "メニューを開く", skip: "本文へスキップ", scroll: "scroll", zoom: "拡大表示", close: "閉じる" },
  hero: {
    eyebrow: "RAG · LLM · データパイプライン",
    name: "イ・ジュヨン",
    role: "AI・バックエンド開発者",
    tagline: "3Dグラフィックスからデータと LLM へ。データ収集、埋め込み、検索、回答生成まで、RAGパイプライン全体を自分で設計・実装します。",
    cta1: "プロジェクトを見る",
    cta2: "連絡する"
  },
  about: {
    label: "私について",
    title: "技術を理解し、\n活かす開発者",
    p1: "大学卒業後の3年間、Unreal Engine、ZBrush、3ds Maxを学び、ゲーム業界の3Dグラフィックデザイナーを目指していました。しかしAIが制作の進め方を急速に変えていくのを見て、方向を変え、開発者として一から始めることにしました。",
    p2: "AIフィンテック融合科（旧スマートファイナンス科）でPythonとSQLによるデータ処理とETLを学び、チームプロジェクトでエステ向け法律相談RAGチャットボットを開発しました。法令データの収集、ハイブリッド検索、回答生成まで一連の流れを担当しました。",
    p3: "ひとつの方法が行き詰まっても、別の道を探して試し続ける粘り強さが強みです。考え込みやすい性格なので、考えるだけで止まらず、まず動く習慣を身につけています。",
    facts: {
      focus: { l: "関心分野", v: "LLM · RAG · 生成AI" },
      edu: { l: "在学中", v: "AIフィンテック融合科（旧スマートファイナンス科）· 2026.03〜" },
      lang: { l: "英語", v: "OPIC IM2" }
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
          "収集→埋め込み→インデックス→検索→回答生成のRAGパイプラインを設計・実装",
          "LoRAによるマルチモーダルLLMのファインチューニング、GGUF変換とサービング",
          "構造化した回答フォーマットの設計とパース処理の実装"
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
          "DockerとKafka環境の構築",
          "Git/GitHubでの協業、Tailscale/SSHによるチームの遠隔開発"
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
          "[要約]/[ポイント]/[一覧]の構造化回答フォーマットを設計、UTF-8表示エラーを修正",
          "systemd timerによる法令データ自動更新バッチを構成",
          "Spring Legacy MVCフロントエンドのUI/UXデザインと画面開発"
        ]
      },
      etl: {
        title: "WTI・為替ETLダッシュボード",
        tag: "データパイプライン",
        summary: "原油はドル建てのため、為替と原油価格が同時に上がるとエネルギーコストの負担が大きくなります。2つの指標を一緒に収集して相関を見られるようにしたパイプラインです。",
        points: [
          "韓国銀行ECOS（USD/KRW）とFRED（WTI）APIからデータを収集",
          "MAX(trade_date)を基準にした増分ロード、INSERT IGNOREで重複を防止",
          "FastAPI + Jinja2 + Chart.jsによる可視化ダッシュボード",
          "平日14:00（KST）にcrontabで自動実行"
        ]
      },
      seoul: {
        title: "Seoul My Soul — ソウル観光案内AIチャットボット",
        tag: "RAGチャットボット",
        summary: "キーワード検索の限界を超え、ソウルの観光情報を自然な会話でまとめて案内するLLM・RAGチャットボットです。会話履歴を反映し、「その近く」のような文脈の質問にも対応します。",
        points: [
          "質問を768次元ベクトル（ko-sroberta-multitask）に変換し、OpenSearch KNNで類似観光地の上位5件を検索",
          "ソウル25区の文字列マッチングでフィルタリングし、質問にない場合は会話履歴を逆順に探索",
          "セッションごとに直近100件の会話を保持し、30日経過したデータは毎日午前3時に自動削除",
          "Spring Boot + JSPの画面、FastAPIのAIエンジン、Gemma3:4b（Ollama）による2文以内の回答生成",
          "履歴照会 → ベクトル変換 → KNN検索 → 回答生成 → 保存・表示のRAGパイプラインを設計・実装"
        ]
      },
      grade: {
        title: "学生成績管理システム",
        tag: "Webアプリケーション",
        summary: "学生情報と科目別の点数を登録し、平均と等級を自動計算して照会する3層構造のWebシステムです。",
        points: [
          "Servlet → Service → DAO → JDBCの各層を自分で実装（Java 17、Servlet 4.0、Tomcat 9、Mavenマルチステージビルド）",
          "Docker Compose 1つでnginx・Tomcat・MySQLの3層構成をまとめて起動し、ボリュームでDBデータを保持",
          "nginxリバースプロキシ（/api → backend:8080）で、CORS設定なしにフロントとバックエンドを接続",
          "init.sqlの二重エンコードとJDBC collationの不一致を原因分析して修正し、韓国語の文字化け問題を解決",
          "登録 → 点数入力 → 平均・等級の自動計算 → 照会までの4画面（HTML/CSS/JS）を連携"
        ]
      }
    }
  },
  journey: {
    label: "歩み",
    title: "歩み",
    items: {
      poly: { date: "2026.03 〜 現在", title: "AIフィンテック融合科（旧スマートファイナンス科）", desc: "PythonとSQLによるデータ処理とETLを学び、チームプロジェクトでRAGチャットボットを開発しました。" },
      selfstudy: { date: "2021 – 2024", title: "3Dグラフィックス", desc: "Unreal Engine、ZBrush、3ds Maxを学び、ゲーム業界の3Dグラフィックデザイナーを目指してポートフォリオを準備しました。" },
      cafe: { date: "2020.04 – 2024.09", title: "カフェ運営（53か月）", desc: "Paik's Coffeeでカフェ運営全般を担当しました。" },
      design: { date: "2016 – 2021", title: "展示デザイン学科", desc: "展示デザインを専攻し、卒業しました。" }
    }
  },
  contact: {
    label: "お問い合わせ",
    title: "一緒に作りましょう",
    lead: "新しいプロジェクト、協業のご提案、気軽なお話など、いつでもご連絡ください。",
    email: "メールを送る",
    copy: "メールをコピー",
    copied: "コピーしました"
  },
  footer: { note: "Designed & Built by イ・ジュヨン" }
};
