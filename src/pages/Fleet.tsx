import { motion } from "framer-motion";
import { Wrench, CalendarCheck } from "lucide-react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import FleetCard from "@/components/FleetCard";
import CTABanner from "@/components/CTABanner";
import OptimizedImage from "@/components/OptimizedImage";
import { fleetVehicles, companyInfo } from "@/data/company";
import { images } from "@/data/images";

const fleetStats = [
  { icon: CalendarCheck, value: "3 yrs", label: "Average Fleet Age" },
  { icon: Wrench, value: "99.5%", label: "Maintenance Uptime" },
];

export default function Fleet() {
  return (
    <>
      {/* Page Hero Banner */}
      <section className="relative flex min-h-[50vh] items-center bg-navy pt-20">
        <div className="absolute inset-0">
          <OptimizedImage
            src={images.hero.fleet}
            alt="Avinash Roadways fleet"
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
            Our <span className="text-gold">Fleet</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-slate-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            A modern, versatile fleet powering {companyInfo.name}&apos;s logistics excellence
          </motion.p>
        </Container>
      </section>

      {/* Fleet Grid */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionTitle
            title="Our Vehicles"
            subtitle="Every vehicle in our fleet is GPS-tracked, regularly maintained, and operated by certified professionals"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {fleetVehicles.map((vehicle, index) => (
              <FleetCard key={vehicle.id} vehicle={vehicle} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Fleet Stats */}
      <section className="bg-navy py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 max-w-2xl mx-auto">
            {fleetStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10">
                    <Icon className="h-8 w-8 text-gold" aria-hidden="true" />
                  </div>
                  <div className="text-4xl font-extrabold text-white">{stat.value}</div>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTABanner
        title="Need Specialized Transportation?"
        subtitle="Our fleet experts will match the right vehicles to your cargo requirements."
        buttonText="Discuss Your Needs"
      />
    </>
  );
}
