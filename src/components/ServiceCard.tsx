import { motion } from "framer-motion";
import {
  Truck,
  Warehouse,
  Zap,
  Thermometer,
  Package,
  Container as ContainerIcon,
} from "lucide-react";
import type { ServiceType } from "@/types";

const iconMap: Record<string, typeof Truck> = {
  Truck,
  Warehouse,
  Zap,
  Thermometer,
  Package,
  Container: ContainerIcon,
};

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Package;

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>

      {/* Content */}
      <h3 className="mb-3 text-xl font-bold text-navy">{service.title}</h3>
      <p className="mb-5 text-sm leading-relaxed text-slate-500">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-slate-600"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Hover accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
    </motion.div>
  );
}
