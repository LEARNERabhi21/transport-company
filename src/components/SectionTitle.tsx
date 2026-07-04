import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: SectionTitleProps) {
  const alignmentClasses = align === "center" ? "text-center" : "text-left";
  const titleColor = light ? "text-white" : "text-navy";
  const subtitleColor = light ? "text-slate-400" : "text-slate-500";
  const lineAlign = align === "center" ? "mx-auto" : "";

  return (
    <motion.div
      className={`mb-12 ${alignmentClasses} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className={`text-3xl font-extrabold sm:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-20 rounded-full bg-gold ${lineAlign}`} />
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-lg ${subtitleColor} ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
