import React from "react";

export const SERVICES = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "High-performance web ecosystems built with React, Next.js, and Node.js. Optimized for speed, SEO, and massive scale.",
    icon: "🌐",
  },
  {
    id: "app-dev",
    title: "App Development",
    description:
      "Bespoke mobile experiences for iOS and Android. We build native-feeling apps that users actually want to keep.",
    icon: "📱",
  },
  {
    id: "mvp-dev",
    title: "MVP Launchpad",
    description:
      "Go from concept to market-ready product in weeks, not months. We focus on the core value that validates your idea.",
    icon: "🚀",
  },
  {
    id: "seo-mgmt",
    title: "Growth & SEO",
    description:
      "Technical SEO and content strategies that dominate search results and convert casual browsers into loyal customers.",
    icon: "🔍",
  },
  {
    id: "social-media",
    title: "Brand Handling",
    description:
      "Identity design and community management. We tell your story across platforms to build a tribe around your product.",
    icon: "📢",
  },
  {
    id: "consulting",
    title: "CTO as a Service",
    description:
      "Fractional technical leadership to guide your architecture, hiring, and long-term technology roadmap.",
    icon: "💡",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Wheelzloop",
    category: "Website",
    image: "/wheelzloop.png",
    description:
      "Wheelzloop is a modern marketplace for buying and selling quality used cars with confidence. We make car ownership simpler by combining transparent pricing, verified listings, and a smooth digital experience—all in one place.",
  },
  {
    id: 2,
    title: "Glamio",
    category: "Website",
    image: "/glamio-web.png",
    description:
      "Glamio is a smart beauty booking platform that connects customers with trusted salons and beauty professionals, making self-care simple, convenient, and accessible.",
  },
  {
    id: 3,
    title: "Glamio App",
    category: "App",
    image: "/glamio-app.jpg",
    description:
      "Glamio is your all-in-one beauty booking app designed to connect you with trusted salons and beauty professionals near you.Browse salons, explore services, compare prices, and book appointments in seconds—no calls, no waiting. Whether it s a haircut, facial, spa session, or bridal service, Glamio helps you manage your beauty routine with ease.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CEO at FinFlow",
    content:
      "Stackmite didn't just build our app; they helped us redefine our business model. True partners in every sense.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Founder of Nexus",
    content:
      "The speed at which they delivered our MVP was staggering. We went from Figma to Fundable in less than a month.",
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
];

export const TRUST_LOGOS = [
  "TechCrunch",
  "Forbes",
  "Wired",
  "ProductHunt",
  "Verge",
];

export const Logo = ({ className = "h-8" }: { className?: string }) => (
  <div className={className}>
    <img src="/logo.png" />
  </div>
);
