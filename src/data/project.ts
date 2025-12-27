export interface IProject {
    id: string;
    slug: string;
    icon?: string;
    title: string;
    category: string;
    description: string;
    longDescription?: string;
    features: string[]; 
    image: string;
    techStack: string[];
    featured?: boolean;
    links: {
        live?: string;
        github?: string;
        frontend?: string;
        backend?: string;
    };
}

export const projects: IProject[] = [
    {
        id: "mobile-app",
        slug: "mobile-app",
        icon: "📱",
        title: "Mobile App",
        category: "Mobile",
        description: "Mobile platform connecting millions of users worldwide",
        longDescription: "A comprehensive mobile application built with React Native that connects millions of users worldwide. Features real-time notifications, personalized recommendations, and seamless user experience across iOS and Android platforms.",
        features: ["Cross-platform iOS/Android support", "Real-time push notifications", "Offline data persistence", "Biometric authentication"],
        image: "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=1200&h=600&fit=crop",
        techStack: ["React Native", "Firebase", "Redux", "TypeScript"],
        featured: true,
        links: { live: "https://example.com", github: "https://github.com/example/mobile-app" },
    },
    {
        id: "analytics-dashboard",
        slug: "analytics-dashboard",
        icon: "💻",
        title: "Analytics Dashboard",
        category: "Enterprise",
        description: "Enterprise analytics with real-time insights and visualization",
        longDescription: "A powerful enterprise-grade analytics dashboard that provides real-time insights into business metrics. Built with Next.js and integrated with advanced charting libraries.",
        features: ["Interactive 3D Data Visualization", "Real-time WebSocket Updates", "Custom PDF Report Export", "Multi-tenant Workspace Support"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
        techStack: ["Next.js", "Chart.js", "PostgreSQL", "TypeScript"],
        featured: true,
        links: { live: "https://analytics.example.com", frontend: "https://github.com/example/analytics-frontend", backend: "https://github.com/example/analytics-backend" },
    },
    {
        id: "ecommerce",
        slug: "ecommerce-platform",
        icon: "🛍️",
        title: "E-Commerce Platform",
        category: "E-Commerce",
        description: "Online store with seamless checkout and payment integration",
        longDescription: "A fully-featured e-commerce platform with inventory management, secure payment processing, and order tracking.",
        features: ["Secure Stripe Integration", "Real-time Inventory Tracking", "Guest & User Checkout Flows", "Dynamic Discount Engine"],
        image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200&h=600&fit=crop",
        techStack: ["React", "Stripe", "Node.js", "MongoDB"],
        featured: true,
        links: { live: "https://shop.example.com", frontend: "https://github.com/example/ecommerce-frontend", backend: "https://github.com/example/ecommerce-backend" },
    },
    {
        id: "music-platform",
        slug: "music-streaming",
        icon: "🎵",
        title: "Music Streaming Platform",
        category: "Streaming",
        description: "Streaming service with personalized playlists and recommendations",
        longDescription: "A music streaming service offering millions of tracks with personalized playlist recommendations.",
        features: ["Gapless Audio Playback", "Personalized Discovery Mix", "Low-latency WebSocket Chat", "Social Listening Rooms"],
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=600&fit=crop",
        techStack: ["React", "WebSocket", "Redis", "Express.js"],
        featured: false,
        links: { live: "https://music.example.com", frontend: "https://github.com/example/music-frontend", backend: "https://github.com/example/music-backend" },
    },
    {
        id: "hotel-booking",
        slug: "hotel-booking-system",
        icon: "🏨",
        title: "Hotel Booking System",
        category: "Travel",
        description: "Reservation system with real-time availability and pricing",
        longDescription: "A sophisticated hotel booking platform with real-time room availability, pricing management, and guest review system.",
        features: ["Interactive Calendar Booking", "Dynamic Pricing Engine", "Automated Email Confirmations", "Multi-currency Support"],
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=600&fit=crop",
        techStack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
        featured: false,
        links: { live: "https://hotels.example.com", frontend: "https://github.com/example/hotel-frontend", backend: "https://github.com/example/hotel-backend" },
    },
    {
        id: "business-intel",
        slug: "business-intelligence",
        icon: "📊",
        title: "Business Intelligence Tool",
        category: "Analytics",
        description: "Data visualization and interactive reporting platform",
        longDescription: "Advanced business intelligence platform with interactive data visualization and predictive analytics.",
        features: ["Predictive Trend Modeling", "Custom SQL Query Builder", "Automated Data Ingestion", "Enterprise Security Audit Log"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
        techStack: ["D3.js", "Python", "Flask", "PostgreSQL"],
        featured: false,
        links: { live: "https://bi.example.com", frontend: "https://github.com/example/bi-frontend", backend: "https://github.com/example/bi-backend" },
    },
    {
        id: "saas-crm",
        slug: "saas-crm-solution",
        icon: "👥",
        title: "SaaS CRM Solution",
        category: "SaaS",
        description: "Customer relationship management and sales pipeline tool",
        longDescription: "Enterprise-grade CRM solution for managing customer interactions and sales pipelines.",
        features: ["Kanban Sales Pipeline", "Shared Team Inbox", "Custom Contact Attributes", "API Webhook Integrations"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
        techStack: ["React", "Next.js", "PostgreSQL", "GraphQL"],
        featured: false,
        links: { live: "https://crm.example.com", frontend: "https://github.com/example/crm-frontend", backend: "https://github.com/example/crm-backend" },
    },
    {
        id: "learning-platform",
        slug: "online-learning",
        icon: "📚",
        title: "Online Learning Platform",
        category: "Education",
        description: "Educational platform with courses, quizzes and certifications",
        longDescription: "Comprehensive online learning platform with video courses, quizzes, and certification programs.",
        features: ["Video Progress Tracking", "Interactive Quiz Engine", "Automated Certificate PDF", "Student Discussion Forums"],
        image: "https://images.unsplash.com/photo-1516534775068-bb57a52f4fee?w=1200&h=600&fit=crop",
        techStack: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
        featured: false,
        links: { live: "https://learn.example.com", frontend: "https://github.com/example/learning-frontend", backend: "https://github.com/example/learning-backend" },
    },
    {
        id: "task-manager",
        slug: "project-task-manager",
        icon: "✓",
        title: "Project Task Manager",
        category: "Productivity",
        description: "Team collaboration and project management application",
        longDescription: "A modern task management tool for teams to collaborate on projects. Features include Kanban boards and timeline views.",
        features: ["Drag-and-Drop Kanban Board", "Project Timeline/Gantt View", "Instant Team Chat", "Cloud File Attachment"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
        techStack: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
        featured: false,
        links: { github: "https://github.com/example/task-manager" },
    },
    {
        id: "weather-app",
        slug: "weather-intelligence",
        icon: "🌤️",
        title: "Weather Intelligence App",
        category: "Weather",
        description: "Advanced forecasting with alerts and climate analytics",
        longDescription: "A sophisticated weather application providing detailed forecasts and climate analytics using machine learning.",
        features: ["Hourly Hyper-local Forecast", "Severe Weather Push Alerts", "Historical Climate Data Maps", "ML-based Rain Prediction"],
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=600&fit=crop",
        techStack: ["React", "OpenWeather API", "D3.js", "Node.js"],
        featured: false,
        links: { live: "https://weather.example.com", github: "https://github.com/example/weather-app" },
    },
];