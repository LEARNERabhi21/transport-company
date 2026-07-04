import { motion } from "framer-motion";
import { CheckCircle, Headphones, Globe, ShieldCheck } from "lucide-react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import OptimizedImage from "@/components/OptimizedImage";
import { services, companyInfo } from "@/data/company";
import { images } from "@/data/images";

const whyChooseUs = [
  {
    icon: CheckCircle,
    title: "99.7% On-Time Rate",
    description: "Industry-leading delivery reliability that keeps your supply chain moving without interruption.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support with dedicated account managers for personalized service.",
  },
  {
    icon: Globe,
    title: "Nationwide Coverage",
    description: "1,000+ routes covering all major metropolitan areas and remote destinations across the country.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description: "Comprehensive cargo insurance and damage protection for complete peace of mind.",
  },
];

export default function Services() {
  return (
    <>
      {/* Page Hero Banner */}
      <section className="relative flex min-h-[50vh] items-center bg-navy pt-20">
        <div className="absolute inset-0">
          <OptimizedImage
            src={images.hero.services}
            alt="Avinash Roadways services"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        </div>
        <Container className="relative z-10 py-20 text-center">
          <motion.h1
            className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-gold">Services</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-slate-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Comprehensive logistics solutions by {companyInfo.name} to keep your business moving
          </motion.p>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionTitle
            title="What We Offer"
            subtitle="End-to-end transportation and logistics services designed for businesses of all sizes"
          />
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <Container>
          <SectionTitle
            title="Why Choose Avinash Roadways"
            subtitle="What sets us apart from the competition"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-navy">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTABanner
        title="Need a Custom Logistics Solution?"
        subtitle="Our team of experts will design a transportation plan tailored to your specific requirements."
        buttonText="Request a Consultation"
      />
    </>
  );
}
