import { motion } from "framer-motion";
import type { FleetVehicle } from "@/types";
import OptimizedImage from "./OptimizedImage";

interface FleetCardProps {
  vehicle: FleetVehicle;
  index: number;
}

export default function FleetCard({ vehicle, index }: FleetCardProps) {
  return (
    <motion.div
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <OptimizedImage
          src={vehicle.image}
          alt={vehicle.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <span className="inline-block rounded-full bg-gold/90 px-3 py-1 text-xs font-semibold text-navy">
            Capacity: {vehicle.capacity}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-navy">{vehicle.name}</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-500">
          {vehicle.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {vehicle.features.map((feature) => (
            <span
              key={feature}
              className="rounded-lg bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
