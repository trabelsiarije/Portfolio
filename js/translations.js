/* ============================================================
   translations.js
   Every user-facing string lives here. Edit the strings in
   place to change the copy; the keys stay the same.
   ============================================================ */

const TRANSLATIONS = {
  fr: {
    meta: {
      title: "Arije Trabelsi — Étudiante en Business Intelligence",
      description:
        "Portfolio d'Arije Trabelsi, étudiante en Business Intelligence à l'ESEN. À la recherche d'un stage PFE de 4 mois à partir de janvier 2027.",
      ogTitle: "Arije Trabelsi — Portfolio Business Intelligence",
      ogDescription:
        "Étudiante en Business Intelligence à l'ESEN, à la recherche d'un stage PFE à partir de janvier 2027."
    },
    a11y: { skip: "Aller au contenu principal" },
    nav: {
      about: "À propos",
      skills: "Compétences",
      experience: "Expérience",
      projects: "Projets",
      certificates: "Certificats",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Portfolio — 2026",
      title: "Étudiante en Business Intelligence",
      tagline:
        "À la recherche d'un stage PFE de 4 mois à partir de janvier 2027.",
      downloadCv: "Télécharger mon CV",
      viewProjects: "Voir mes projets",
      scroll: "défilez"
    },
    about: {
      title: "À propos",
      lead:
        "Étudiante en troisième année de Licence en Business Intelligence à l'ESEN (École Supérieure de l'Économie Numérique), je suis à la recherche d'un stage de fin d'études (PFE) de 4 mois à partir de janvier 2027, afin de contribuer à un projet décisionnel concret au sein d'une équipe data.",
      p2:
        "Ce qui me motive au quotidien, c'est transformer des données brutes en décisions utiles : poser les bonnes questions, construire un pipeline fiable, puis livrer un tableau de bord ou un modèle qui change vraiment la façon dont une équipe pilote son activité.",
      p3:
        "Je travaille avec méthode et curiosité, j'aime documenter mon code et comprendre le métier avant d'ouvrir Power BI. Je cherche une équipe exigeante où apprendre vite, poser des questions, et contribuer à un projet qui a du sens.",
      educationTitle: "Formation",
      present: "présent",
      esenDetail:
        "Licence en Business Intelligence — École Supérieure de l'Économie Numérique",
      highschoolPlace: "Lycée Medjez El Bab",
      highschoolDetail: "Baccalauréat en Sciences expérimentales",
      languagesTitle: "Langues",
      langArabic: "Arabe", langArabicLvl: "langue maternelle",
      langFrench: "Français", langFrenchLvl: "avancé",
      langEnglish: "Anglais", langEnglishLvl: "courant",
      langSpanish: "Espagnol", langSpanishLvl: "débutante"
    },
    skills: {
      title: "Compétences",
      cats: {
        languages: "Langages",
        bi: "BI & Visualisation",
        db: "Bases de données",
        web: "Frameworks Web",
        api: "APIs & IA",
        algo: "Algorithmique & Aide à la décision",
        tools: "Modélisation & Outils"
      }
    },
    experience: {
      title: "Expérience",
      role: "Stage d'été — TeachCodeX",
      period: "Juillet — Août 2026",
      doc: "Voir la documentation",
      intro:
        "Développement en binôme de Nexus 4.0, un système décisionnel full-stack : dashboards par rôle, chatbot IA et moteur de rapports.",
      b1:
        "Chatbot IA adapté au rôle de l'utilisateur (admin, employé, client), répondant en langage naturel sur les KPIs, tickets et rapports grâce au RAG (BM25 + LLM via l'API Groq).",
      b2:
        "Algorithme d'assignation intelligente des tickets : scoring pondéré (charge 60 %, compétence 40 %), priorisation par criticité et ancienneté, recommandations justifiées.",
      b3:
        "Moteur de rapports avec FastAPI, SQLAlchemy et PostgreSQL : 5 KPIs alignés sur la norme ISO 9001 avec statut RAG et historique.",
      b4:
        "Génération synchrone et asynchrone de rapports PDF et Excel (xhtml2pdf, openpyxl), stockés sur Cloudinary.",
      b5:
        "Alertes de risque basées sur un score prédictif, avec notifications in-app et par email (SMTP).",
      b6:
        "Sécurisation des routes par authentification JWT et contrôle d'accès par rôle."
    },
    projects: {
      title: "Projets",
      filterAll: "Tous",
      filterBi: "BI & Dashboards",
      filterData: "Data Analysis",
      filterWeb: "Web",
      filterIa: "IA",
      viewGithub: "Voir sur GitHub",
      viewDoc: "Voir la documentation",
      items: {
        sales: {
          title: "Projet BI pour l'analyse des ventes",
          desc:
            "Solution décisionnelle complète sur un jeu de données de vente au détail : data warehouse, ETL, tableaux de bord et machine learning.",
          category: "BI & Dashboards"
        },
        itunes: {
          title: "Analyse comparative iTunes vs Spotify",
          desc:
            "Pipeline complet sur environ 20 000 morceaux : nettoyage et analyse exploratoire en Python, puis dashboard Power BI interactif de 3 pages (iTunes, Spotify, comparaison) avec mesures DAX personnalisées, KPIs dynamiques et filtres par plateforme.",
          category: "BI & Dashboards · Data"
        },
        attrition: {
          title: "Analyse de l'attrition des employés (IBM HR)",
          desc:
            "Réalisé dans le cadre du stage CodeAlpha Data Analytics. Analyse exploratoire des facteurs de départ : corrélations, tests d'hypothèses (t-test, khi-deux) et détection des valeurs aberrantes (IQR) pour appuyer les décisions RH.",
          category: "Data Analysis"
        },
        netflix: {
          title: "Visualisation des données Netflix",
          desc:
            "Réalisé dans le cadre du stage CodeAlpha Data Analytics. Nettoyage et feature engineering (pays et genres multiples, durées standardisées), puis visualisations orientées décision : croissance cumulée du catalogue, saisonnalité des ajouts et heatmap pays × genre.",
          category: "Data Analysis"
        },
        nlp: {
          title: "Analyseur de paragraphes intelligent",
          desc:
            "Outil d'analyse de textes : analyse des sentiments, extraction de mots-clés, résumé automatique et génération d'insights par IA.",
          category: "IA"
        },
        foodloop: {
          title: "FoodLoop",
          desc:
            "Plateforme web reliant utilisateurs, associations et commerçants alimentaires pour optimiser la gestion des excédents et réduire le gaspillage alimentaire.",
          category: "Web"
        },
        internconnect: {
          title: "InternConnect",
          desc:
            "Prototype frontend permettant aux étudiants de consulter des offres de stage et de postuler, et aux entreprises de publier des offres et de gérer les candidatures.",
          category: "Web"
        }
      }
    },
    certificates: {
      title: "Certificats",
      lead:
        "Six certifications DataCamp complétées sur Python, Pandas et SQL. Cliquez sur une carte ou utilisez les flèches pour parcourir la pile.",
      view: "Voir le certificat",
      issuer: "DataCamp",
      prev: "Précédent",
      next: "Suivant",
      items: {
        introPython: { title: "Introduction to Python", date: "2024" },
        intermediatePython: { title: "Intermediate Python", date: "2024" },
        pandas: { title: "Data Manipulation with Pandas", date: "2024" },
        introSql: { title: "Introduction to Relational Databases in SQL", date: "2024" },
        intermediateSql: { title: "Intermediate SQL", date: "2024" },
        oracleSql: { title: "Introduction to Oracle SQL", date: "2024" }
      }
    },
    contact: {
      title: "Contact",
      lead:
        "N'hésitez pas à me contacter pour toute opportunité — stage, projet, ou simple échange.",
      emailLabel: "Email",
      locationLabel: "Localisation",
      location: "Tunis, Tunisie",
      copy: "Copier",
      copied: "Email copié",
      form: {
        emailLabel: "Votre email",
        subjectLabel: "Objet",
        messageLabel: "Message",
        fileLabel: "Pièce jointe (optionnel)",
        filePlaceholder: "Choisir un fichier…",
        note:
          "N'hésitez pas à m'envoyer tout type d'opportunité — stage, mission, collaboration ou simple échange.",
        submit: "Envoyer le message",
        sending: "Préparation de l'email…",
        sent: "Votre client email s'ouvre — pensez à joindre votre fichier.",
        error: "Merci de remplir tous les champs."
      }
    },
    footer: {
      tag: "Étudiante en Business Intelligence — Tunis, Tunisie"
    }
  },

  en: {
    meta: {
      title: "Arije Trabelsi — Business Intelligence Student",
      description:
        "Portfolio of Arije Trabelsi, Business Intelligence student at ESEN. Looking for a 4-month end-of-studies internship starting January 2027.",
      ogTitle: "Arije Trabelsi — Business Intelligence Portfolio",
      ogDescription:
        "Business Intelligence student at ESEN, looking for a 4-month end-of-studies internship starting January 2027."
    },
    a11y: { skip: "Skip to main content" },
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      certificates: "Certificates",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Portfolio — 2026",
      title: "Business Intelligence Student",
      tagline:
        "Looking for a 4-month end-of-studies internship starting January 2027.",
      downloadCv: "Download my CV",
      viewProjects: "See my projects",
      scroll: "scroll"
    },
    about: {
      title: "About",
      lead:
        "Third-year Business Intelligence student at ESEN (Higher School of Digital Economy), I'm looking for a 4-month end-of-studies internship starting January 2027, to contribute to a real-world decision-support project within a data team.",
      p2:
        "What drives me every day is turning raw data into useful decisions: asking the right questions, building a reliable pipeline, then delivering a dashboard or model that actually changes how a team runs its business.",
      p3:
        "I work with method and curiosity. I like documenting my code and understanding the business before opening Power BI. I'm looking for a demanding team where I can learn fast, ask questions, and contribute to a project that matters.",
      educationTitle: "Education",
      present: "present",
      esenDetail:
        "Bachelor's in Business Intelligence — Higher School of Digital Economy",
      highschoolPlace: "Medjez El Bab High School",
      highschoolDetail: "Baccalaureate in Experimental Sciences",
      languagesTitle: "Languages",
      langArabic: "Arabic", langArabicLvl: "native",
      langFrench: "French", langFrenchLvl: "advanced",
      langEnglish: "English", langEnglishLvl: "fluent",
      langSpanish: "Spanish", langSpanishLvl: "beginner"
    },
    skills: {
      title: "Skills",
      cats: {
        languages: "Languages",
        bi: "BI & Visualization",
        db: "Databases",
        web: "Web Frameworks",
        api: "APIs & AI",
        algo: "Algorithms & Decision Support",
        tools: "Modeling & Tools"
      }
    },
    experience: {
      title: "Experience",
      role: "Summer Internship — TeachCodeX",
      period: "July — August 2026",
      doc: "View documentation",
      intro:
        "Co-developed Nexus 4.0, a full-stack decision-support platform: role-based dashboards, AI chatbot and reporting engine.",
      b1:
        "Role-aware AI chatbot (admin, employee, client) answering natural-language questions on KPIs, tickets and reports using RAG (BM25 + LLM via the Groq API).",
      b2:
        "Smart ticket-assignment algorithm: weighted scoring (60% workload, 40% skills), prioritization by severity and age, with explainable recommendations.",
      b3:
        "Reporting engine with FastAPI, SQLAlchemy and PostgreSQL: 5 ISO 9001-aligned KPIs with RAG status and history.",
      b4:
        "Synchronous and asynchronous PDF and Excel report generation (xhtml2pdf, openpyxl), with files stored on Cloudinary.",
      b5:
        "Risk alerts driven by a predictive score, with in-app and email notifications (SMTP).",
      b6:
        "Secured API routes with JWT authentication and role-based access control."
    },
    projects: {
      title: "Projects",
      filterAll: "All",
      filterBi: "BI & Dashboards",
      filterData: "Data Analysis",
      filterWeb: "Web",
      filterIa: "AI",
      viewGithub: "View on GitHub",
      viewDoc: "View documentation",
      items: {
        sales: {
          title: "Sales Analytics BI Solution",
          desc:
            "End-to-end decision-support solution on a retail sales dataset: data warehouse, ETL pipeline, dashboards and machine learning.",
          category: "BI & Dashboards"
        },
        itunes: {
          title: "iTunes vs Spotify Comparative Analysis",
          desc:
            "End-to-end pipeline on about 20K tracks: cleaning and EDA in Python, then an interactive 3-page Power BI dashboard (iTunes, Spotify, comparison) with custom DAX measures, dynamic KPIs and per-platform filters.",
          category: "BI & Dashboards · Data"
        },
        attrition: {
          title: "Employee Attrition Analysis (IBM HR)",
          desc:
            "Completed during the CodeAlpha Data Analytics internship. Exploratory analysis of turnover drivers: correlation analysis, hypothesis testing (t-test, chi-square) and outlier detection (IQR) to inform HR decisions.",
          category: "Data Analysis"
        },
        netflix: {
          title: "Netflix Data Visualization",
          desc:
            "Completed during the CodeAlpha Data Analytics internship. Cleaning and feature engineering (multi-country and multi-genre, standardized durations), then decision-oriented visualizations: cumulative catalog growth, seasonality of additions and a country × genre heatmap.",
          category: "Data Analysis"
        },
        nlp: {
          title: "Smart Paragraph Analyzer",
          desc:
            "Text analysis tool: sentiment analysis, keyword extraction, automatic summarization and AI-generated insights.",
          category: "AI"
        },
        foodloop: {
          title: "FoodLoop",
          desc:
            "Web platform connecting users, charities and food retailers to manage surplus food and reduce waste.",
          category: "Web"
        },
        internconnect: {
          title: "InternConnect",
          desc:
            "Frontend prototype where students browse and apply to internship offers, and companies publish offers and manage applications.",
          category: "Web"
        }
      }
    },
    certificates: {
      title: "Certificates",
      lead:
        "Six DataCamp certifications completed on Python, Pandas and SQL. Click a card or use the arrows to browse the stack.",
      view: "View certificate",
      issuer: "DataCamp",
      prev: "Previous",
      next: "Next",
      items: {
        introPython: { title: "Introduction to Python", date: "2024" },
        intermediatePython: { title: "Intermediate Python", date: "2024" },
        pandas: { title: "Data Manipulation with Pandas", date: "2024" },
        introSql: { title: "Introduction to Relational Databases in SQL", date: "2024" },
        intermediateSql: { title: "Intermediate SQL", date: "2024" },
        oracleSql: { title: "Introduction to Oracle SQL", date: "2024" }
      }
    },
    contact: {
      title: "Contact",
      lead:
        "Feel free to reach out for any opportunity — internship, project, or a simple chat.",
      emailLabel: "Email",
      locationLabel: "Location",
      location: "Tunis, Tunisia",
      copy: "Copy",
      copied: "Email copied",
      form: {
        emailLabel: "Your email",
        subjectLabel: "Subject",
        messageLabel: "Message",
        fileLabel: "Attachment (optional)",
        filePlaceholder: "Choose a file…",
        note:
          "Feel free to email me about any opportunity — internship, mission, collaboration or just to chat.",
        submit: "Send message",
        sending: "Preparing email…",
        sent: "Your email client is opening — remember to attach your file.",
        error: "Please fill in all fields."
      }
    },
    footer: {
      tag: "Business Intelligence Student — Tunis, Tunisia"
    }
  }
};

/* -----------------------------------------------------------
   Static data (same shape in both languages). Text that needs
   translation reads from TRANSLATIONS; everything else here.
   ----------------------------------------------------------- */

const SKILLS = [
  { key: "languages", tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "R", "Java", "JavaScript", "PHP", "C", "HTML", "CSS"] },
  { key: "bi",        tags: ["Power BI", "DAX", "Tableau", "Talend", "RStudio", "Excel"] },
  { key: "db",        tags: ["PostgreSQL", "Oracle SQL", "PL/SQL", "MySQL", "SQLite"] },
  { key: "web",       tags: ["FastAPI", "SQLAlchemy", "React.js", "Node.js", "Chart.js", "Odoo"] },
  { key: "api",       tags: ["REST", "JWT", "RAG", "BM25", "Groq API", "OpenAI API", "Claude API", "NLP"] },
  { key: "algo",      tags: ["Weighted scoring", "Recommender systems", "Multi-criteria"] },
  { key: "tools",     tags: ["UML", "BPMN", "BonitaSoft", "Scrum", "Git", "Postman", "Cloudinary", "MQTT", "Node-RED"] }
];

const PROJECTS = [
  {
    key: "sales",
    categories: ["bi"],
    tools: ["Talend", "RStudio", "ML", "PostgreSQL", "Power BI"],
    doc: "https://docs.google.com/document/d/13hGXxcaIvL9_CQbvjQAJxpRKQAQQnaOr/edit"
  },
  {
    key: "itunes",
    categories: ["bi", "data"],
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Power BI", "DAX"],
    github: "https://github.com/trabelsiarije/iTunes-vs-Spotify"
  },
  {
    key: "attrition",
    categories: ["data"],
    tools: ["Python", "Pandas", "Seaborn", "SciPy"],
    github: "https://github.com/trabelsiarije/CodeAlpha_EDA"
  },
  {
    key: "netflix",
    categories: ["data"],
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/trabelsiarije/CodeAlpha_NetflixDataVisualization"
  },
  {
    key: "nlp",
    categories: ["ia"],
    tools: ["Python", "NLP"],
    github: "https://github.com/trabelsiarije"
  },
  {
    key: "foodloop",
    categories: ["web"],
    tools: ["JavaScript", "PHP", "HTML", "CSS", "Chart.js", "PL/SQL", "Oracle"],
    github: "https://github.com/trabelsiarije/FoodLoop"
  },
  {
    key: "internconnect",
    categories: ["web"],
    tools: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/trabelsiarije/InternConnnect"
  }
];

const CERTIFICATES = [
  { key: "introPython",         file: "assets/certificates/intro-python.pdf" },
  { key: "intermediatePython",  file: "assets/certificates/intermediate-python.pdf" },
  { key: "pandas",              file: "assets/certificates/data-manipulation-pandas.pdf" },
  { key: "introSql",            file: "assets/certificates/intro-relational-databases.pdf" },
  { key: "intermediateSql",     file: "assets/certificates/intermediate-sql.pdf" },
  { key: "oracleSql",           file: "assets/certificates/intro-oracle-sql.pdf" }
];
