import { webSite } from "../../public/assets";

export interface IProject {
    id: string;
    slug: string;
    icon?: string;
    title: string;
    category: string;
    description: string;
    longDescription?: string;
    features: string[];
    image: any;
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
        id: "ride-booking-platform",
        slug: "ride-booking-platform",
        icon: "🚗",
        title: "Ride Booking Platform",
        category: "Full Stack / SaaS",
        description: "A production-grade ride-sharing ecosystem with dedicated Rider, Driver, and Admin portals.",
        longDescription: "A comprehensive ride-hailing solution featuring real-time booking, driver dispatch, and an emergency SOS system. Built with the T3 stack principles, it uses Redux Toolkit for complex state management and RTK Query for seamless API synchronization. The platform handles distinct lifecycles for rides, integrated earnings dashboards for drivers, and a powerful administrative oversight panel.",
        features: [
            "Role-Based Access (Rider, Driver, Admin) with JWT Security",
            "Real-time Ride Lifecycle (Request → Accept → Progress → Complete)",
            "Emergency SOS Button with Live Location & Geolocation API",
            "Dynamic Earnings & Analytics Dashboards using Recharts",
            "Interactive Online/Offline Toggle for Driver Availability",
            "Admin Control Panel for User Management & Ride Auditing"
        ],
        image: webSite.rideBooking,
        techStack: ["Next.js", "Redux Toolkit", "RTK Query", "MongoDB", "Express", "Tailwind CSS"],
        featured: true,
        links: {
            live: "https://ridebooking-lilac.vercel.app/",
            frontend: "https://github.com/codeWith-Repon/ride-management-frontend",
            backend: "https://github.com/codeWith-Repon/ride-booking-api"
        },
    },
    {
        id: "events-activities-platform",
        slug: "events-activities-social",
        icon: "🤝",
        title: "Events & Activities Platform",
        category: "Full Stack / Social",
        description: "A community-driven platform for finding event companions and hosting local activities.",
        longDescription: "This platform bridges the gap between online discovery and offline participation. It features a robust multi-role system (User, Host, Admin) allowing people to create, search, and join social events like concerts, hikes, or meetups. It integrates secure payment gateways for ticketed events and a review system to build community trust.",
        features: [
            "Triple-Role Dashboard (User, Host, Admin) for specialized workflows",
            "Advanced Search & Matching based on Category, Location, and Date",
            "Cloudinary-integrated Profile & Event Image Management",
            "Secure Payment Integration (SSLCommerz) for joining fees",
            "Host Rating & Review System with dynamic star visualizations",
            "Real-time Event Status Tracking (Open, Full, Cancelled, Completed)"
        ],
        image: webSite.events_and_activity,
        techStack: ["React", "Redux Toolkit", "Cloudinary", "Node.js", "Express", "MongoDB"],
        featured: true,
        links: {
            live: "https://events-activities-frontend-alpha.vercel.app/",
            frontend: "https://github.com/codeWith-Repon/EventsActivities-frontend",
            backend: "https://github.com/codeWith-Repon/Events-Activities-backend"
        },
    },
];