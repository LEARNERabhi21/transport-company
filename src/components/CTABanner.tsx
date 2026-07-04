import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  title = "Ready to Ship? Get a Quote Today",
  subtitle = "Join 5,000+ businesses that trust Avinash Roadways for their transportation needs. Fast, reliable, and always on time.",
  buttonText = "Get a Free Quote",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 h-full w-full opacity-10">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gold blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-teal blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            {subtitle}
          </p>
          <div className="mt-8">
            <Button href={buttonHref} size="lg">
              {buttonText} <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
