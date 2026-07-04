import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { companyInfo } from "@/data/company";
import { images } from "@/data/images";
import OptimizedImage from "./OptimizedImage";
import Container from "./Container";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={images.hero.main}
          alt="Avinash Roadways fleet on highway"
          className="h-full w-full object-cover"
          loading="eager"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
      </div>

      <Container className="relative z-10 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="mb-4 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
              Trusted by 5,000+ Clients Worldwide
            </span>
          </motion.div>

          <motion.h1
            className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            {companyInfo.tagline.split(",")[0]},{" "}
            <span className="text-gradient">
              {companyInfo.tagline.split(",").slice(1).join(",")}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {companyInfo.description}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          >
            <Button href="/contact" size="lg">
              Get a Free Quote <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Our Services
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
