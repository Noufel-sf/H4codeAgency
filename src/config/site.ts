export const siteConfig = {
  name: "H4Code",
  legalName: "H4Code Digital Agency",
  url: process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://h4code.agency",
  description: {
    en: "Boutique digital development agency engineering bespoke web applications, high-performance platforms, and scalable digital products.",
    ar: "وكالة تطوير برمجيات رقمية متخصصة في هندسة تطبيقات الويب المتقدمة والمنصات السحابية والتجارب الرقمية الفاخرة.",
    fr: "Agence de développement digital haut de gamme concevant des applications web sur mesure et des produits digitaux scalables."
  },
  contact: {
    email: "noufeldevelopment@gmail.com",
    phone: "+213 79 652 88 94",
    whatsapp: "https://wa.me/796528894",
    github: "https://github.com/Noufel-sf/H4codeAgency",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  },
  locales: ["en", "ar", "fr"] as const,
  defaultLocale: "en" as const
};

