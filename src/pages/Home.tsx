import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import FleetCard from "@/components/FleetCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatCounter from "@/components/StatCounter";
import CTABanner from "@/components/CTABanner";
import OptimizedImage from "@/components/OptimizedImage";
import Button from "@/components/Button";
import { companyInfo, services, fleetVehicles, testimonials, stats } from "@/data/company";
import { images } from "@/data/images";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. About Preview */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <OptimizedImage
                  src={images.company.about}
                  alt="Avinash Roadways headquarters"
                  className="rounded-2xl object-cover shadow-xl"
                />
                <div className="absolute -right-4 -bottom-4 rounded-xl bg-gold px-6 py-4 shadow-lg">
                  <span className="text-3xl font-extrabold text-navy">5+</span>
                  <p className="text-xs font-medium text-navy/80">Years of Excellence</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-gold">
                About {companyInfo.name}
              </span>
              <h2 className="mb-6 text-3xl font-extrabold text-navy sm:text-4xl">
                Your Trusted Partner in{" "}
                <span className="text-gold">Transportation Services</span>
              </h2>
              <p className="mb-6 leading-relaxed text-slate-500">
                {companyInfo.description}
              </p>
              <p className="mb-8 leading-relaxed text-slate-500">
                From freight transport to last-mile delivery, our comprehensive solutions
                are designed to keep your goods moving seamlessly. With a modern fleet and
                dedicated team, we deliver on our promises — every time.
              </p>
              <Button href="/about" variant="secondary">
                Learn More About Us <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 3. Stats Counter */}
      <section className="bg-navy py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <StatCounter key={stat.id} stat={stat} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Services Preview */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <Container>
          <SectionTitle
            title="Our Services"
            subtitle="Comprehensive transportation solutions tailored to your business needs"
          />
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/services" variant="secondary">
              View All Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>

      {/* 5. Fleet Preview */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionTitle
            title="Our Fleet"
            subtitle="Modern, well-maintained vehicles ready for any transportation challenge"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {fleetVehicles.slice(0, 3).map((vehicle, index) => (
              <FleetCard key={vehicle.id} vehicle={vehicle} index={index} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/fleet" variant="secondary">
              View Full Fleet <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>

      {/* 6. Testimonials */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <Container>
          <SectionTitle
            title="What Our Clients Say"
            subtitle="Trusted by thousands of businesses for reliable transportation solutions"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* 7. CTA Banner */}
      <CTABanner />
    </>
  );
}
