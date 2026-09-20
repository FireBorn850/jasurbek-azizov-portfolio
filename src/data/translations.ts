import { Language } from '../types';

export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    investing: string;
    certificates: string;
    contact: string;
    genevaCard: string;
  };
  home: {
    badge: string;
    headline: string;
    subtagline: string;
    ctaProjects: string;
    ctaContact: string;
    ctaGeneva: string;
    stats: {
      saas: string;
      languages: string;
      cert: string;
      investor: string;
    };
    aboutPreviewTitle: string;
    aboutPreviewDesc: string;
    expPreviewTitle: string;
    expPreviewDesc: string;
    projPreviewTitle: string;
    projPreviewDesc: string;
    investPreviewTitle: string;
    investPreviewDesc: string;
    certPreviewTitle: string;
    certPreviewDesc: string;
    seeMore: string;
  };
  about: {
    title: string;
    subtitle: string;
    bioParagraph1: string;
    bioParagraph2: string;
    educationTitle: string;
    websterDegree: string;
    websterDetails: string;
    languagesTitle: string;
    recommendationsTitle: string;
    recommendationsDesc: string;
    requestRefBtn: string;
    outsideCodeTitle: string;
    chessTitle: string;
    chessDesc: string;
    violinTitle: string;
    violinDesc: string;
  };
  experience: {
    title: string;
    subtitle: string;
    present: string;
  };
  projects: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterSaas: string;
    filterAutomation: string;
    filterFullstack: string;
    problemTitle: string;
    solutionTitle: string;
    liveDemo: string;
    viewCode: string;
    tryDemoPrompt: string;
  };
  investing: {
    title: string;
    subtitle: string;
    shariaNotice: string;
    disclaimer: string;
    breakdownTitle: string;
    holdingsTitle: string;
    tickerHeader: string;
    assetHeader: string;
    allocHeader: string;
    typeHeader: string;
    strategyTitle: string;
    strategyDesc: string;
  };
  certificates: {
    title: string;
    subtitle: string;
    allTab: string;
    techTab: string;
    academicTab: string;
    globalTab: string;
    expandedDetails: string;
    credentialId: string;
    issuedBy: string;
  };
  contact: {
    title: string;
    subtitle: string;
    quickActions: string;
    callWhatsapp: string;
    sendEmail: string;
    downloadVCF: string;
    formTitle: string;
    nameLabel: string;
    businessLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    sendBtn: string;
    successMsg: string;
    qrTitle: string;
    qrDesc: string;
  };
  geneva: {
    badge: string;
    title: string;
    subtitle: string;
    pitchHeading: string;
    pitchSub: string;
    offer1Title: string;
    offer1Desc: string;
    offer2Title: string;
    offer2Desc: string;
    offer3Title: string;
    offer3Desc: string;
    bookPitchBtn: string;
    directWhatsappBtn: string;
    swissNotice: string;
  };
  common: {
    copyEmail: string;
    emailCopied: string;
    backToTop: string;
    builtBy: string;
    allRightsReserved: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      investing: 'Investing',
      certificates: 'Certificates',
      contact: 'Contact',
      genevaCard: 'Geneva Card',
    },
    home: {
      badge: 'Available for Software & Consulting Opportunities',
      headline: "Hi, I'm Jasurbek Azizov — Entrepreneur, Full-Stack Builder & Global Business Student",
      subtagline: 'Bridging Economics, International Relations, and Full-Stack Development to build software that helps real businesses grow — currently building in Geneva, Switzerland.',
      ctaProjects: 'See My Projects',
      ctaContact: 'Get In Touch',
      ctaGeneva: 'Geneva Business Pitch',
      stats: {
        saas: 'SaaS Projects Built',
        languages: 'Languages Spoken',
        cert: '9-Mo Backend Program',
        investor: 'Investor Since May 2026',
      },
      aboutPreviewTitle: 'Global Economics & Software Fusion',
      aboutPreviewDesc: 'B.A. Economics student at Webster University (Geneva) combining analytical financial modeling with production backend engineering.',
      expPreviewTitle: 'Hands-On Operations & Analysis',
      expPreviewDesc: 'From NYC logistics dispatching to edtech market analysis and retail management.',
      projPreviewTitle: 'High-Impact SaaS & Automation',
      projPreviewDesc: 'AI review auto-responders, real-time booking engines, and digital menu architectures for growing local enterprises.',
      investPreviewTitle: 'Sharia-Compliant Portfolio',
      investPreviewDesc: 'Active long-term equity strategy focused on ethics, tech resilience, and real estate ETFs.',
      certPreviewTitle: 'Verified Credentials & Honors',
      certPreviewDesc: 'Backend developer diploma, IELTS Academic 6.0, UN CC:e-Learn certifications, and debate achievements.',
      seeMore: 'Explore Section',
    },
    about: {
      title: 'About Jasurbek Azizov',
      subtitle: 'Combining international economic perspective with practical full-stack software development.',
      bioParagraph1: 'I am a B.A. Economics & International Relations student at Webster University, transitioning from the Tashkent campus to Webster University Geneva, Switzerland. My core objective is bridging real-world business dynamics with scalable technology solutions.',
      bioParagraph2: 'Alongside my university studies, I completed a rigorous 9-month Backend Development diploma (HTML, CSS, Bulma, Python, Django) at Monday Training Center. I specialize in crafting automated workflows, AI-enhanced customer response systems, and custom web applications that directly boost revenue and efficiency for small to medium enterprises.',
      educationTitle: 'Academic Foundation',
      websterDegree: 'B.A. Economics & International Relations',
      websterDetails: 'Webster University (Tashkent campus → Geneva campus, Switzerland). Focus on international trade, monetary economics, and cross-border digital markets.',
      languagesTitle: 'Linguistic Capabilities',
      recommendationsTitle: 'Academic & Professional References',
      recommendationsDesc: 'Two academic recommendation letters highlighting analytical leadership and project performance are available upon request.',
      requestRefBtn: 'Request Reference Letters',
      outsideCodeTitle: 'Outside The Code — Personal Dimension',
      chessTitle: 'Competitive Chess Player',
      chessDesc: 'Multiple tournament trophies, medals, and certificates. Chess instills strategic vision, endgame calculations, and tactical composure under pressure.',
      violinTitle: 'Classically Trained Violinist',
      violinDesc: 'Graduated from 7 years of formal music school, culminating in a public solo and ensemble concert performance. Music cultivates intense discipline and ear for harmony.',
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'Real-world execution in business intelligence, operations dispatching, and commercial management.',
      present: 'Present',
    },
    projects: {
      title: 'SaaS Showcase & Software Products',
      subtitle: 'Custom applications engineered to solve real friction points for local merchants and growing digital brands.',
      filterAll: 'All Work',
      filterSaas: 'SaaS & AI',
      filterAutomation: 'Automation',
      filterFullstack: 'Full-Stack Systems',
      problemTitle: 'The Problem',
      solutionTitle: 'The Software Solution',
      liveDemo: 'Live Demo Preview',
      viewCode: 'View Architecture',
      tryDemoPrompt: 'Interactive Demo Available',
    },
    investing: {
      title: 'Ethical Investing & Equity Portfolio',
      subtitle: 'Managing a long-term, Sharia-compliant equity portfolio — demonstrating financial literacy, asset allocation, and disciplined capital management.',
      shariaNotice: 'Strictly adherence to Sharia screening parameters (100% Halal equities, zero debt interest leverage, ethical sector focus).',
      disclaimer: 'Illustrative portfolio metrics shown for financial literacy and asset allocation layout demonstration. Not financial or investment advice.',
      breakdownTitle: 'Portfolio Allocation Breakdown',
      holdingsTitle: 'Core Holdings & Positions',
      tickerHeader: 'Ticker',
      assetHeader: 'Asset Name',
      allocHeader: 'Weight',
      typeHeader: 'Category',
      strategyTitle: 'Investment Strategy Rationale',
      strategyDesc: 'Focusing on broad market index tracking (SPUS), defensive Sharia real estate yields (SPRE), and high-margin global analytics platforms (RELX).',
    },
    certificates: {
      title: 'Certificates & Credentials',
      subtitle: 'Formal qualifications spanning software development, global diplomacy, language proficiency, and competitive achievements.',
      allTab: 'All Credentials',
      techTab: 'Software & IT',
      academicTab: 'Academic & UN',
      globalTab: 'Leadership',
      expandedDetails: 'Certificate Verification Details',
      credentialId: 'Credential ID',
      issuedBy: 'Issuing Organization',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Direct contact portal for software inquiries, business pitches in Geneva, or academic collaborations.',
      quickActions: 'Direct Communication Actions',
      callWhatsapp: 'Call or WhatsApp',
      sendEmail: 'Direct Email',
      downloadVCF: 'Save Contact (.vcf Card)',
      formTitle: 'Send a Message',
      nameLabel: 'Your Full Name',
      businessLabel: 'Business Name (Optional)',
      emailLabel: 'Email Address',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      sendBtn: 'Send Message',
      successMsg: 'Thank you! Your message has been prepared.',
      qrTitle: 'Scan to Open Digital Business Card',
      qrDesc: 'Scan this QR code with any mobile camera to open Jasurbek Azizov’s interactive portfolio & contact portal instantly.',
    },
    geneva: {
      badge: 'Geneva Business Pitch Portal',
      title: 'Digital Solutions for Geneva Business Owners',
      subtitle: 'Tailored software tools to help restaurants, salons, clinics, and local shops in Geneva capture reviews, streamline bookings, and increase revenue.',
      pitchHeading: 'How We Help Local Geneva Merchants Grow',
      pitchSub: 'Simple, powerful digital tools without complex monthly software contracts or tech overhead.',
      offer1Title: 'AI Google Review Auto-Responder',
      offer1Desc: 'Automatically draft polite, professional multi-lingual responses (French, English, German) to Google reviews in your brand voice within seconds.',
      offer2Title: 'Smart Booking & Appointment System',
      offer2Desc: 'Let clients book appointments 24/7 on WhatsApp or web, with automated SMS/email reminders to eliminate no-shows.',
      offer3Title: 'Interactive QR Menu & Digital Feedback',
      offer3Desc: 'Modern mobile QR menu for restaurants & cafes with instant table feedback redirecting happy guests directly to your Google Review page.',
      bookPitchBtn: 'Schedule a 15-Min Meeting in Geneva',
      directWhatsappBtn: 'WhatsApp Direct Pitch (+998 50 909 40 45)',
      swissNotice: 'Currently based in Geneva, Switzerland. Available for face-to-face meetings across Geneva & Vaud region.',
    },
    common: {
      copyEmail: 'Copy Email',
      emailCopied: 'Email Copied!',
      backToTop: 'Back to Top',
      builtBy: 'Built with React, TypeScript & Motion by Jasurbek Azizov',
      allRightsReserved: 'All rights reserved.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      experience: 'Expérience',
      projects: 'Projets',
      investing: 'Investissement',
      certificates: 'Certificats',
      contact: 'Contact',
      genevaCard: 'Carte Genève',
    },
    home: {
      badge: 'Disponible pour opportunités logicielles & conseils',
      headline: "Bonjour, je suis Jasurbek Azizov — Entrepreneur, Développeur Full-Stack & Étudiant en Commerce International",
      subtagline: "Allier l'économie, les relations internationales et le développement logiciel pour aider les entreprises à croître — actuellement basé à Genève, Suisse.",
      ctaProjects: 'Voir mes projets',
      ctaContact: 'Me contacter',
      ctaGeneva: 'Présentation Entreprises Genève',
      stats: {
        saas: 'Projets SaaS créés',
        languages: 'Langues parlées',
        cert: 'Formation Backend 9 mois',
        investor: 'Investisseur depuis mai 2026',
      },
      aboutPreviewTitle: 'Fusion d\'Économie Globale & Développement',
      aboutPreviewDesc: 'Étudiant en économie à Webster University (Genève) alliant modélisation financière et ingénierie backend.',
      expPreviewTitle: 'Expérience Opérationnelle & Analyse',
      expPreviewDesc: 'De la logistique à New York à l\'analyse EdTech et la gestion commerciale.',
      projPreviewTitle: 'SaaS & Automatisation à Fort Impact',
      projPreviewDesc: 'Réponse automatique IA aux avis Google, systèmes de réservation et menus QR interactifs.',
      investPreviewTitle: 'Portefeuille Conforme à la Sharia',
      investPreviewDesc: 'Stratégie d\'investissement éthique axée sur la technologie et l\'immobilier.',
      certPreviewTitle: 'Diplômes & Certifications',
      certPreviewDesc: 'Diplôme de développeur backend, IELTS 6.0, certifications ONU CC:e-Learn et trophées d\'échecs.',
      seeMore: 'Explorer la section',
    },
    about: {
      title: 'À Propos de Jasurbek Azizov',
      subtitle: 'Combiner une perspective économique internationale avec le développement logiciel sur mesure.',
      bioParagraph1: 'Je suis étudiant en économie et relations internationales à Webster University, transféré du campus de Tachkent vers le campus de Genève, Suisse. Mon objectif est de relier les dynamiques commerciales avec des solutions technologiques évolutives.',
      bioParagraph2: 'En parallèle de mes études, j\'ai obtenu un diplôme intensif de 9 mois en développement backend (HTML, CSS, Bulma, Python, Django) au Monday Training Center. Je conçois des systèmes automatisés, des outils de gestion et des applications web qui augmentent le chiffre d\'affaires des PME.',
      educationTitle: 'Formation Académique',
      websterDegree: 'B.A. Économie & Relations Internationales',
      websterDetails: 'Webster University (Campus Tachkent → Campus Genève, Suisse). Spécialisation en commerce international et marchés numériques.',
      languagesTitle: 'Compétences Linguistiques',
      recommendationsTitle: 'Lettres de Recommandation',
      recommendationsDesc: 'Deux lettres de recommandation académiques sont disponibles sur demande.',
      requestRefBtn: 'Demander les références',
      outsideCodeTitle: 'En dehors du code — Dimension personnelle',
      chessTitle: 'Joueur d\'Échecs en Compétition',
      chessDesc: 'Plusieurs trophées et médailles. Les échecs développent la vision stratégique et la prise de décision sous pression.',
      violinTitle: 'Violoniste de Formation Classique',
      violinDesc: 'Diplômé de 7 ans d\'école de musique avec concert solo public. La musique exige rigueur et discipline.',
    },
    experience: {
      title: 'Expérience Professionnelle',
      subtitle: 'Parcours opérationnel en analyse d\'affaires, gestion logistique et commerce.',
      present: 'Présent',
    },
    projects: {
      title: 'Projets SaaS & Outils Logiciels',
      subtitle: 'Applications sur mesure conçues pour résoudre les problèmes réels des commerçants et PME.',
      filterAll: 'Tous les projets',
      filterSaas: 'SaaS & IA',
      filterAutomation: 'Automatisation',
      filterFullstack: 'Systèmes Full-Stack',
      problemTitle: 'Le Problème',
      solutionTitle: 'La Solution Logicielle',
      liveDemo: 'Aperçu Démo Live',
      viewCode: 'Architecture',
      tryDemoPrompt: 'Démo interactive disponible',
    },
    investing: {
      title: 'Investissement Éthique & Portefeuille',
      subtitle: 'Gestion d\'un portefeuille d\'actions à long terme conforme à la Sharia.',
      shariaNotice: 'Respect strict des principes de la finance islamique (100% actions éthiques, sans intérêt ni endettement excessif).',
      disclaimer: 'Données affichées à titre d\'illustration pour démontrer la gestion d\'actifs. Ceci n\'est pas un conseil financier.',
      breakdownTitle: 'Répartition du Portefeuille',
      holdingsTitle: 'Positions Principales',
      tickerHeader: 'Ticker',
      assetHeader: 'Nom de l\'Actif',
      allocHeader: 'Poids',
      typeHeader: 'Catégorie',
      strategyTitle: 'Stratégie d\'Investissement',
      strategyDesc: 'Suivi de l\'indice global (SPUS), rendement immobilier éthique (SPRE) et analytique mondiale (RELX).',
    },
    certificates: {
      title: 'Certificats & Diplômes',
      subtitle: 'Qualifications officielles en programmation, diplomatie globale et langues.',
      allTab: 'Tous les diplômes',
      techTab: 'Logiciel & IT',
      academicTab: 'Académique & ONU',
      globalTab: 'Leadership',
      expandedDetails: 'Détails de la Certification',
      credentialId: 'Identifiant du certificat',
      issuedBy: 'Organisme émetteur',
    },
    contact: {
      title: 'Me Contacter',
      subtitle: 'Portail direct pour opportunités logicielles, rendez-vous à Genève ou collaborations.',
      quickActions: 'Actions Rapides',
      callWhatsapp: 'Appeler / WhatsApp',
      sendEmail: 'Envoyer un Email',
      downloadVCF: 'Télécharger la Carte Contact (.vcf)',
      formTitle: 'Envoyer un Message',
      nameLabel: 'Nom complet',
      businessLabel: 'Nom de l\'entreprise (Optionnel)',
      emailLabel: 'Adresse Email',
      subjectLabel: 'Sujet',
      messageLabel: 'Message',
      sendBtn: 'Envoyer le message',
      successMsg: 'Merci! Votre message a été préparé avec succès.',
      qrTitle: 'Scannez pour ouvrir la carte numérique',
      qrDesc: 'Scannez ce QR code avec votre téléphone pour ouvrir la carte de visite interactive de Jasurbek Azizov.',
    },
    geneva: {
      badge: 'Portail Entreprises Genève',
      title: 'Solutions Numériques pour Commerçants à Genève',
      subtitle: 'Outils logiciels adaptés aux restaurants, salons et commerces genevois pour capturer des avis, gérer les réservations et accroître le chiffre d\'affaires.',
      pitchHeading: 'Comment nous aidons les PME à Genève',
      pitchSub: 'Des outils simples et performants sans abonnements complexes.',
      offer1Title: 'Répondeur IA Avis Google',
      offer1Desc: 'Générez automatiquement des réponses courtoises et multilingues (Français, Anglais, Allemand) à vos avis Google en quelques secondes.',
      offer2Title: 'Système de Réservation Intelligent',
      offer2Desc: 'Permettez à vos clients de réserver 24h/24 par WhatsApp ou Web avec rappels automatiques pour éviter les rendez-vous manqués.',
      offer3Title: 'Menu QR Interactif & Avis Directs',
      offer3Desc: 'Menu numérique rapide avec redirection des clients satisfaits vers votre fiche Google My Business.',
      bookPitchBtn: 'Planifier une rencontre de 15 min à Genève',
      directWhatsappBtn: 'Contact WhatsApp Direct (+998 50 909 40 45)',
      swissNotice: 'Actuellement basé à Genève, Suisse. Disponible pour des réunions en présentiel dans le canton de Genève et Vaud.',
    },
    common: {
      copyEmail: 'Copier l\'email',
      emailCopied: 'Email copié !',
      backToTop: 'Haut de page',
      builtBy: 'Développé avec React, TypeScript & Motion par Jasurbek Azizov',
      allRightsReserved: 'Tous droits réservés.',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      experience: 'Опыт',
      projects: 'Проекты',
      investing: 'Инвестиции',
      certificates: 'Сертификаты',
      contact: 'Контакты',
      genevaCard: 'Карта Женева',
    },
    home: {
      badge: 'Открыт для предложений по разработке и консалтингу',
      headline: 'Привет, я Жасурбек Азизов — Предприниматель, Full-Stack Разработчик и Студент Международного Бизнеса',
      subtagline: 'Объединяю экономику, международные отношения и Full-Stack разработку для создания IT-продуктов, помогающих бизнесу расти. Сейчас в Женеве, Швейцария.',
      ctaProjects: 'Смотреть проекты',
      ctaContact: 'Связаться со мной',
      ctaGeneva: 'Презентация для Женевы',
      stats: {
        saas: 'Созданных SaaS проектов',
        languages: 'Языков общения',
        cert: '9-мес. программа Backend',
        investor: 'Инвестор с мая 2026',
      },
      aboutPreviewTitle: 'Синтез Глобальной Экономики и IT',
      aboutPreviewDesc: 'Студент экономики Webster University (Женева), сочетающий финансовое моделирование и серверную разработку.',
      expPreviewTitle: 'Практический Опыт в Операциях',
      expPreviewDesc: 'От диспетчеризации логистики в Нью-Йорке до анализа EdTech рынка и управления ритейлом.',
      projPreviewTitle: 'SaaS и Автоматизация',
      projPreviewDesc: 'AI-автоответчики на отзывы Google, системы онлайн-бронирования и QR-меню для бизнеса.',
      investPreviewTitle: 'Халяль Инвестиционный Портфель',
      investPreviewDesc: 'Долгосрочная инвестиционная стратегия в соответствии со стандартами Sharia.',
      certPreviewTitle: 'Подтвержденные Сертификаты',
      certPreviewDesc: 'Диплом Backend-разработчика, IELTS 6.0, сертификаты ООН CC:e-Learn и шахматные награды.',
      seeMore: 'Перейти в раздел',
    },
    about: {
      title: 'О Жасурбеке Азизове',
      subtitle: 'Сочетание международного экономического мышления и практической веб-разработки.',
      bioParagraph1: 'Я студент факультета экономики и международных отношений Вебстерского университета (перевелся из Ташкента в кампус Женевы, Швейцария). Моя цель — соединять реальный бизнес с современными IT-решениями.',
      bioParagraph2: 'Параллельно с учебой я окончил интенсивный 9-месячный курс Backend-разработки (HTML, CSS, Bulma, Python, Django) в Monday Training Center. Я создаю системы автоматизации, онлайн-запись и веб-приложения, увеличивающие доход бизнеса.',
      educationTitle: 'Образование',
      websterDegree: 'Бакалавр Экономики и Международных Отношений',
      websterDetails: 'Webster University (Ташкент → Женева, Швейцария). Специализация: международная торговля и цифровые рынки.',
      languagesTitle: 'Языковые Навыки',
      recommendationsTitle: 'Рекомендательные Письма',
      recommendationsDesc: 'Доступны два академических рекомендательных письма по запросу.',
      requestRefBtn: 'Запросить рекомендации',
      outsideCodeTitle: 'Вне кода — Личные Достижения',
      chessTitle: 'Турнирный Шахматист',
      chessDesc: 'Множество кубков, медалей и дипломов. Шахматы развивают стратегическое мышление и выдержку.',
      violinTitle: 'Скрипач с Классическим Образованием',
      violinDesc: '7 лет музыкальной школы, выпускной сольный концерт. Музыка формирует высокую дисциплину и слух.',
    },
    experience: {
      title: 'Профессиональный Опыт',
      subtitle: 'Опыт в бизнес-аналитике, операционной логистике и коммерческих продажах.',
      present: 'По настоящее время',
    },
    projects: {
      title: 'SaaS Проекты и Программное Обеспечение',
      subtitle: 'IT-решения, разработанные для решения реальных задач малого и среднего бизнеса.',
      filterAll: 'Все проекты',
      filterSaas: 'SaaS и AI',
      filterAutomation: 'Автоматизация',
      filterFullstack: 'Full-Stack Системы',
      problemTitle: 'Проблема',
      solutionTitle: 'Программное Решение',
      liveDemo: 'Демо-версия',
      viewCode: 'Архитектура',
      tryDemoPrompt: 'Интерактивное демо доступно',
    },
    investing: {
      title: 'Инвестиции и Портфель Акций',
      subtitle: 'Управление долгосрочным инвестиционным портфелем, соответствующим стандартам Sharia.',
      shariaNotice: 'Строгое соблюдение принципов исламских финансов (100% разрешенные акции, без процентных долгов).',
      disclaimer: 'Данные приведены в иллюстративных целях для демонстрации структуры портфеля. Не является финансовой рекомендацией.',
      breakdownTitle: 'Структура Распределения Активов',
      holdingsTitle: 'Основные Активы',
      tickerHeader: 'Тикер',
      assetHeader: 'Название Актива',
      allocHeader: 'Доля',
      typeHeader: 'Категория',
      strategyTitle: 'Инвестиционная Стратегия',
      strategyDesc: 'Фокус на глобальный индекс (SPUS), халяль недвижимость (SPRE) и международную аналитику (RELX).',
    },
    certificates: {
      title: 'Сертификаты и Достижения',
      subtitle: 'Официальные квалификации в разработке, международной дипломатии и языках.',
      allTab: 'Все сертификаты',
      techTab: 'IT и Разработка',
      academicTab: 'Академические и ООН',
      globalTab: 'Лидерство',
      expandedDetails: 'Детали Сертификата',
      credentialId: 'Номер сертификата',
      issuedBy: 'Кем выдан',
    },
    contact: {
      title: 'Контакты',
      subtitle: 'Прямой портал для связи по вопросам разработки, встреч в Женеве и сотрудничества.',
      quickActions: 'Быстрые Действия',
      callWhatsapp: 'Позвонить / WhatsApp',
      sendEmail: 'Написать Email',
      downloadVCF: 'Скачать Визитку (.vcf)',
      formTitle: 'Отправить Сообщение',
      nameLabel: 'Ваше Имя',
      businessLabel: 'Название Компании (Опционально)',
      emailLabel: 'Email Адрес',
      subjectLabel: 'Тема',
      messageLabel: 'Сообщение',
      sendBtn: 'Отправить Сообщение',
      successMsg: 'Спасибо! Ваше сообщение подготовлено.',
      qrTitle: 'Сканируйте для открытия визитки',
      qrDesc: 'Отсканируйте QR-код камерой телефона, чтобы открыть интерактивный профиль Жасурбека Азизова.',
    },
    geneva: {
      badge: 'Бизнес-Портал Женева',
      title: 'Цифровые Решения для Бизнеса в Женеве',
      subtitle: 'IT-инструменты для ресторанов, салонов и магазинов Женевы: автоматизация отзывов, онлайн-запись и увеличение выручки.',
      pitchHeading: 'Как мы помогаем локальному бизнесу в Женеве',
      pitchSub: 'Простые и эффективные решения без сложных долгосрочных контрактов.',
      offer1Title: 'AI-Автоответчик на Отзывы Google',
      offer1Desc: 'Автоматическая генерация вежливых ответов на французском, английском и немецком языках за секунды.',
      offer2Title: 'Умная Система Онлайн-Записи',
      offer2Desc: 'Запись клиентов 24/7 через WhatsApp и веб-сайт с авто-напоминаниями для исключения пропусков.',
      offer3Title: 'Интерактивное QR-Меню и Отзывы',
      offer3Desc: 'Быстрое цифровое меню с перенаправлением довольных гостей на страницу Google Reviews.',
      bookPitchBtn: 'Запланировать встречу на 15 мин в Женеве',
      directWhatsappBtn: 'Написать в WhatsApp (+998 50 909 40 45)',
      swissNotice: 'В настоящее время нахожусь в Женеве. Доступен для личных встреч в кантонах Женева и Во.',
    },
    common: {
      copyEmail: 'Скопировать Email',
      emailCopied: 'Email скопирован!',
      backToTop: 'Наверх',
      builtBy: 'Разработано на React, TypeScript & Motion — Жасурбек Азизов',
      allRightsReserved: 'Все права защищены.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      investing: 'Inversiones',
      certificates: 'Certificados',
      contact: 'Contacto',
      genevaCard: 'Tarjeta Ginebra',
    },
    home: {
      badge: 'Disponible para Proyectos de Software y Consultoría',
      headline: 'Hola, soy Jasurbek Azizov — Emprendedor, Desarrollador Full-Stack y Estudiante de Negocios Globales',
      subtagline: 'Uniendo Economía, Relaciones Internacionales y Desarrollo Full-Stack para crear software que impulsa el crecimiento empresarial — actualmente en Ginebra, Suiza.',
      ctaProjects: 'Ver Mis Proyectos',
      ctaContact: 'Ponerse en Contacto',
      ctaGeneva: 'Presentación Ginebra',
      stats: {
        saas: 'Proyectos SaaS Creados',
        languages: 'Idiomas Hablados',
        cert: 'Programa Backend 9 Meses',
        investor: 'Inversor Desde Mayo 2026',
      },
      aboutPreviewTitle: 'Fusión de Economía Global y Software',
      aboutPreviewDesc: 'Estudiante de Economía en Webster University (Ginebra) que combina análisis financiero y desarrollo backend.',
      expPreviewTitle: 'Experiencia Operativa y Análisis',
      expPreviewDesc: 'Desde logística en Nueva York hasta análisis de mercado EdTech y gestión comercial.',
      projPreviewTitle: 'SaaS e Impacto Automatizado',
      projPreviewDesc: 'Respuestas automáticas con IA a reseñas de Google, reservas en tiempo real y menús QR.',
      investPreviewTitle: 'Portafolio Conforme a la Sharia',
      investPreviewDesc: 'Estrategia de inversión ética a largo plazo centrada en tecnología y bienes raíces.',
      certPreviewTitle: 'Credenciales Certificadas',
      certPreviewDesc: 'Diploma de desarrollo backend, IELTS 6.0, certificaciones de la ONU y trofeos de ajedrez.',
      seeMore: 'Explorar Sección',
    },
    about: {
      title: 'Sobre Jasurbek Azizov',
      subtitle: 'Combinando una visión económica internacional con desarrollo de software personalizado.',
      bioParagraph1: 'Soy estudiante de Licenciatura en Economía y Relaciones Internacionales en Webster University (transferido del campus de Taskent al campus de Ginebra, Suiza). Mi objetivo es conectar los negocios reales con soluciones tecnológicas escalables.',
      bioParagraph2: 'Junto a mis estudios universitarios, completé un diploma intensivo de 9 meses en Desarrollo Backend (HTML, CSS, Bulma, Python, Django) en Monday Training Center. Creo herramientas digitales que automatizan procesos y aumentan los ingresos.',
      educationTitle: 'Formación Académica',
      websterDegree: 'Licenciatura en Economía y Relaciones Internacionales',
      websterDetails: 'Webster University (Taskent → Ginebra, Suiza). Especialización en comercio internacional y mercados digitales.',
      languagesTitle: 'Dominio de Idiomas',
      recommendationsTitle: 'Cartas de Recomendación',
      recommendationsDesc: 'Dos cartas de recomendación académica disponibles bajo solicitud.',
      requestRefBtn: 'Solicitar Referencias',
      outsideCodeTitle: 'Más Allá del Código — Dimensión Personal',
      chessTitle: 'Ajedrecista de Competición',
      chessDesc: 'Múltiples trofeos y medallas. El ajedrez aporta visión estratégica y toma de decisiones bajo presión.',
      violinTitle: 'Violinista de Formación Clásica',
      violinDesc: 'Graduado tras 7 años en la escuela de música con concierto solo público. La música cultiva disciplina constante.',
    },
    experience: {
      title: 'Experiencia Profesional',
      subtitle: 'Ejecución real en análisis de negocios, logística de operaciones y gestión comercial.',
      present: 'Presente',
    },
    projects: {
      title: 'Portafolio SaaS y Productos de Software',
      subtitle: 'Aplicaciones personalizadas diseñadas para resolver problemas reales de pequeños y medianos negocios.',
      filterAll: 'Todos los Proyectos',
      filterSaas: 'SaaS e IA',
      filterAutomation: 'Automatización',
      filterFullstack: 'Sistemas Full-Stack',
      problemTitle: 'El Problema',
      solutionTitle: 'La Solución de Software',
      liveDemo: 'Vista Previa en Vivo',
      viewCode: 'Arquitectura',
      tryDemoPrompt: 'Demostración interactiva disponible',
    },
    investing: {
      title: 'Inversión Ética y Portafolio de Renta Variable',
      subtitle: 'Gestión de un portafolio de inversión a largo plazo conforme a la Sharia.',
      shariaNotice: 'Cumplimiento estricto de los parámetros de finanzas islámicas (100% acciones éticas, sin deuda con interés).',
      disclaimer: 'Datos mostrados con fines ilustrativos para demostrar la gestión de activos. No constituye asesoramiento financiero.',
      breakdownTitle: 'Distribución del Portafolio',
      holdingsTitle: 'Activos Principales',
      tickerHeader: 'Ticker',
      assetHeader: 'Nombre del Activo',
      allocHeader: 'Peso',
      typeHeader: 'Categoría',
      strategyTitle: 'Estrategia de Inversión',
      strategyDesc: 'Seguimiento del índice global (SPUS), rendimiento inmobiliario ético (SPRE) y analítica global (RELX).',
    },
    certificates: {
      title: 'Certificados y Credenciales',
      subtitle: 'Cualificaciones oficiales en desarrollo de software, diplomacia global e idiomas.',
      allTab: 'Todas las Credenciales',
      techTab: 'Software e IT',
      academicTab: 'Académico y ONU',
      globalTab: 'Liderazgo',
      expandedDetails: 'Detalles de la Certificación',
      credentialId: 'ID de Credencial',
      issuedBy: 'Organización Emisora',
    },
    contact: {
      title: 'Ponerse en Contacto',
      subtitle: 'Portal directo para consultas de software, reuniones en Ginebra o colaboraciones.',
      quickActions: 'Acciones Directas',
      callWhatsapp: 'Llamar / WhatsApp',
      sendEmail: 'Enviar Email Directo',
      downloadVCF: 'Guardar Contacto (.vcf)',
      formTitle: 'Enviar un Mensaje',
      nameLabel: 'Nombre Completo',
      businessLabel: 'Nombre de la Empresa (Opcional)',
      emailLabel: 'Correo Electrónico',
      subjectLabel: 'Asunto',
      messageLabel: 'Mensaje',
      sendBtn: 'Enviar Mensaje',
      successMsg: '¡Gracias! Su mensaje ha sido preparado.',
      qrTitle: 'Escanee para abrir la tarjeta digital',
      qrDesc: 'Escanee este código QR con su teléfono para abrir la tarjeta interactiva de Jasurbek Azizov.',
    },
    geneva: {
      badge: 'Portal de Negocios Ginebra',
      title: 'Soluciones Digitales para Negocios en Ginebra',
      subtitle: 'Herramientas de software diseñadas para restaurantes, salones y comercios de Ginebra para captar reseñas, gestionar reservas y aumentar ingresos.',
      pitchHeading: 'Cómo Ayudamos a los Negocios Locales en Ginebra',
      pitchSub: 'Herramientas sencillas y potentes sin contratos de software complejos.',
      offer1Title: 'Respondedor IA de Reseñas de Google',
      offer1Desc: 'Genere respuestas automáticas, corteses y multilingües (francés, inglés, alemán) para sus reseñas de Google en segundos.',
      offer2Title: 'Sistema de Reserva Inteligente',
      offer2Desc: 'Permita que sus clientes reserven 24/7 por WhatsApp o web con recordatorios automáticos para reducir inasistencias.',
      offer3Title: 'Menú QR Interactivo y Reseñas Directas',
      offer3Desc: 'Menú digital ágil que redirige a clientes satisfechos directamente a su perfil de Google Reviews.',
      bookPitchBtn: 'Programar reunión de 15 min en Ginebra',
      directWhatsappBtn: 'Contacto Directo WhatsApp (+998 50 909 40 45)',
      swissNotice: 'Actualmente radicado en Ginebra, Suiza. Disponible para reuniones presenciales en Ginebra y Vaud.',
    },
    common: {
      copyEmail: 'Copiar Email',
      emailCopied: '¡Email Copiado!',
      backToTop: 'Volver Arriba',
      builtBy: 'Desarrollado con React, TypeScript y Motion por Jasurbek Azizov',
      allRightsReserved: 'Todos los derechos reservados.',
    },
  },
};
