import type {
  CompanyInfo,
  NavLink,
  ServiceType,
  FleetVehicle,
  Testimonial,
  GalleryImage,
  Stat,
} from "@/types";
import { images } from "./images";

export const companyInfo: CompanyInfo = {
  name: "Avinash Roadways",
  tagline: "Moving the World Forward, One Delivery at a Time",
  description:
    "Avinash Roadways is a trusted transportation company committed to delivering excellence on every route. With 5 years of dedicated service, we provide reliable, efficient, and safe road transport solutions tailored to your business needs.",
  phone: "+91 74409 66125",
  email: "avinashroadways1@gmail.com",
  address: "Birgaon, Raipur, Chhattisgarh - 493221",
  hours: "Mon – Fri: 7:00 AM – 8:00 PM | Sat: 8:00 AM – 4:00 PM",
  socialLinks: [
    { platform: "Facebook", url: "https://facebook.com/avinashroadways", icon: "Facebook" },
    { platform: "Twitter", url: "https://twitter.com/avinashroadways", icon: "Twitter" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/avinashroadways", icon: "Linkedin" },
    { platform: "Instagram", url: "https://instagram.com/avinashroadways", icon: "Instagram" },
  ],
};

export const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Fleet", path: "/fleet" },
  { label: "Contact", path: "/contact" },
];

export const services: ServiceType[] = [
  {
    id: "freight-transport",
    title: "Freight Transport",
    description:
      "Full truckload and less-than-truckload shipping solutions across the nation. We handle everything from small parcels to oversized cargo with precision and care.",
    icon: "Truck",
    features: ["Full Truckload (FTL)", "Less-than-Truckload (LTL)", "Cross-border shipping", "Real-time GPS tracking"],
    image: images.services.freight,
  },
  {
    id: "express-delivery",
    title: "Express Delivery",
    description:
      "Time-critical shipments delivered with speed and reliability. Same-day and next-day delivery options available across major metropolitan areas.",
    icon: "Zap",
    features: ["Same-day delivery", "Next-day guaranteed", "Priority handling", "Dedicated courier fleet"],
    image: images.services.express,
  },
  {
    id: "last-mile",
    title: "Last Mile Delivery",
    description:
      "Efficient last-mile delivery solutions that ensure your packages reach their final destination on time. White-glove service available for premium deliveries.",
    icon: "Package",
    features: ["Door-to-door service", "White-glove delivery", "Signature confirmation", "Flexible scheduling"],
    image: images.services.lastMile,
  },
  {
    id: "bulk-cargo",
    title: "Bulk Cargo",
    description:
      "Specialized handling for bulk commodities including raw materials, agricultural products, and industrial goods. Safe and efficient transport at scale.",
    icon: "Container",
    features: ["Raw materials transport", "Agricultural transport", "Industrial goods", "Heavy haul capability"],
    image: images.services.bulkCargo,
  },
];

export const fleetVehicles: FleetVehicle[] = [
  {
    id: "eicher",
    name: "Eicher Pro Truck",
    description:
      "Reliable and fuel-efficient medium-duty truck, perfect for regional distribution, cargo transport, and intercity logistics.",
    capacity: "15,000 lbs",
    features: ["High Fuel Efficiency", "Comfortable Cabin", "Eco-friendly Engine", "Advanced Telematics"],
    image: images.fleet.eicher,
  },
  {
    id: "bada-dost",
    name: "Ashok Leyland Bada Dost",
    description:
      "Versatile, spacious, and highly maneuverable commercial pickup truck designed for efficient last-mile deliveries and city transport.",
    capacity: "4,000 lbs",
    features: ["Spacious Cabin", "Dual Air Conditioning", "Power Steering", "High Payload Capacity"],
    image: images.fleet.badaDost,
  },
  {
    id: "ashok-leyland",
    name: "Ashok Leyland Heavy Truck",
    description:
      "Heavy-duty multi-axle cargo truck designed for long-haul transportation of industrial goods, raw materials, and heavy cargo across the nation.",
    capacity: "40,000 lbs",
    features: ["Heavy Load Capacity", "Robust Suspension", "High Torque Engine", "Real-time GPS Tracking"],
    image: images.fleet.ashokLeyland,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Robert Chen",
    company: "GlobalTech Industries",
    avatar: images.testimonials.avatar1,
    quote:
      "Avinash Roadways transformed our shipping operations. Their reliability and attention to detail have reduced our delivery delays by 40%. A true transportation partner.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Sarah Mitchell",
    company: "FreshHarvest Foods",
    avatar: images.testimonials.avatar2,
    quote:
      "The express delivery service is exceptional. Our goods arrive on time every single time. Avinash Roadways has been instrumental in our growth.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "James Rodriguez",
    company: "BuildRight Construction",
    avatar: images.testimonials.avatar3,
    quote:
      "We've been using Avinash Roadways for heavy equipment transport and their flatbed fleet and experienced drivers handle our most challenging loads with ease.",
    rating: 4,
  },
  {
    id: "testimonial-4",
    name: "Emily Watson",
    company: "QuickShip E-Commerce",
    avatar: images.testimonials.avatar4,
    quote:
      "Their last-mile delivery service has significantly improved our customer satisfaction scores. Fast, reliable, and professional — everything an e-commerce business needs.",
    rating: 5,
  },
];

export const galleryImages: GalleryImage[] = [
  { id: "gallery-1", src: images.gallery.gallery1, alt: "Fleet of semi-trailers at Avinash Roadways hub", category: "fleet" },
  { id: "gallery-2", src: images.gallery.gallery2, alt: "Modern facility interior with organized storage", category: "warehouse" },
  { id: "gallery-3", src: images.gallery.gallery3, alt: "Express delivery van on city route", category: "delivery" },
  { id: "gallery-4", src: images.gallery.gallery4, alt: "Trucks loading at dock", category: "fleet" },
  { id: "gallery-5", src: images.gallery.gallery5, alt: "Team coordinating shipments", category: "warehouse" },
  { id: "gallery-6", src: images.gallery.gallery6, alt: "Last-mile delivery to customer doorstep", category: "delivery" },
  { id: "gallery-7", src: images.gallery.gallery7, alt: "Flatbed truck carrying construction materials", category: "fleet" },
  { id: "gallery-8", src: images.gallery.gallery8, alt: "Sorting facility in operation", category: "warehouse" },
];



export const stats: Stat[] = [
  { id: "stat-1", value: 5, suffix: "+", label: "Years of Experience" },
  { id: "stat-3", value: 1000, suffix: "+", label: "Routes Covered" },
  { id: "stat-4", value: 5000, suffix: "+", label: "Happy Clients" },
];

export const companyValues = [
  {
    title: "Safety First",
    description: "Zero-compromise approach to safety across all operations, with rigorous training and compliance standards.",
    icon: "Shield",
  },
  {
    title: "Reliability",
    description: "On-time delivery guaranteed with real-time tracking and proactive communication at every step.",
    icon: "Clock",
  },
  {
    title: "Innovation",
    description: "Leveraging cutting-edge technology to optimize routes, reduce emissions, and enhance service delivery.",
    icon: "Lightbulb",
  },
  {
    title: "Sustainability",
    description: "Committed to reducing our carbon footprint with fuel-efficient fleets and green logistics practices.",
    icon: "Leaf",
  },
  {
    title: "Customer Focus",
    description: "Tailored solutions for every client, with dedicated account managers and 24/7 support availability.",
    icon: "Users",
  },
  {
    title: "Integrity",
    description: "Transparent pricing, honest communication, and ethical business practices in every interaction.",
    icon: "Award",
  },
];
