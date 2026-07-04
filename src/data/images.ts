export const images = {
  hero: {
    main: "/images/hero/hero-banner.png",
    about: "/images/hero/about-hero.png",
    services: "/images/hero/services-hero.png",
    fleet: "/images/hero/fleet-hero.png",
    gallery: "/images/hero/gallery-hero.png",
    contact: "/images/hero/contact-hero.png",
  },
  fleet: {
    eicher: "/images/fleet/eicher.png",
    badaDost: "/images/fleet/badadost.png",
    ashokLeyland: "/images/fleet/ashokleyland.png",
  },
  gallery: {
    gallery1: "/images/gallery/1.png",
    gallery2: "/images/gallery/2.png",
    gallery3: "/images/gallery/3.png",
    gallery4: "/images/gallery/4.png",
    gallery5: "/images/gallery/5.png",
    gallery6: "/images/gallery/6.png",
    gallery7: "/images/gallery/7.png",
    gallery8: "/images/gallery/8.png",
  },
  services: {
    freight: "/images/services/freight.png",
    warehousing: "/images/services/warehouse.png",
    express: "/images/services/express.png",
    coldChain: "/images/services/coldchain.png",
    lastMile: "/images/services/lastmile.png",
    bulkCargo: "/images/services/bulk.png",
  },
  testimonials: {
    avatar1: "/images/testimonials/avatar-1.png",
    avatar2: "/images/testimonials/avatar-2.png",
    avatar3: "/images/testimonials/avatar-3.png",
    avatar4: "/images/testimonials/avatar-4.png",
  },
  company: {
    about: "/images/company/office.png",
    team: "/images/company/team.png",
    office: "/images/company/office.png",
    history: "/images/company/office.png",
    logo: "/images/logo.jpg",
  },
} as const;

export type ImageCategory = keyof typeof images;
