import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Lightbulb,
  Leaf,
  Users,
  Award,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Clock,
  Lightbulb,
  Leaf,
  Users,
  Award,
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const Icon = iconMap[icon] ?? Shield;

  return (
    <motion.div
      className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-navy">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-500">{description}</p>
    </motion.div>
  );
}
