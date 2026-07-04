import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Testimonial } from "@/types";
import OptimizedImage from "./OptimizedImage";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Stars */}
      <div className="mb-4 flex gap-1" role="img" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            aria-hidden="true"
            className={`h-4 w-4 ${
              i < testimonial.rating
                ? "fill-gold text-gold"
                : "fill-slate-200 text-slate-200"
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="mb-6 text-sm leading-relaxed text-slate-600 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <OptimizedImage
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover"
          width={48}
          height={48}
        />
        <div>
          <p className="font-semibold text-navy">{testimonial.name}</p>
          <p className="text-xs text-slate-400">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
}
