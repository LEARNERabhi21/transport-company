export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export interface FleetVehicle {
  id: string;
  name: string;
  description: string;
  capacity: string;
  features: string[];
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "fleet" | "warehouse" | "delivery" | "all";
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}
