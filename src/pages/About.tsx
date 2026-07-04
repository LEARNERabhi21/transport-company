import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import StatCounter from "@/components/StatCounter";
import OptimizedImage from "@/components/OptimizedImage";
import { companyInfo, stats, companyValues } from "@/data/company";
import { images } from "@/data/images";

export default function About() {
  return (
    <>
      {/* Page Hero Banner */}
      <section className="relative flex min-h-[50vh] items-center bg-navy pt-20">
        <div className="absolute inset-0">
          <OptimizedImage
            src={images.hero.about}
            alt="About Avinash Roadways"
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
            About <span className="text-gold">Us</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-slate-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Discover the story, mission, and people behind {companyInfo.name}
          </motion.p>
        </Container>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <OptimizedImage
                src={images.company.history}
                alt="Avinash Roadways history"
                className="rounded-2xl object-cover shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-gold">
                Our Story
              </span>
              <h2 className="mb-6 text-3xl font-extrabold text-navy sm:text-4xl">
                5 Years of Moving the World Forward
              </h2>
              <p className="mb-4 leading-relaxed text-slate-500">
                Founded in 2021, {companyInfo.name} began as a small regional trucking company
                with just five vehicles and a big dream. We saw an opportunity to bring
                technology-driven efficiency to road transportation.
              </p>
              <p className="mb-4 leading-relaxed text-slate-500">
                In just five years, we&apos;ve grown from a local operation to a trusted national
                transporter with a modern fleet and a team of dedicated professionals
                serving clients across the country.
              </p>
              <p className="leading-relaxed text-slate-500">
                Today, {companyInfo.name} serves 5,000+ clients across industries including
                manufacturing, retail, construction, and e-commerce — all
                while maintaining the personal touch and commitment to excellence that defined us
                from day one.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <Container>
          <SectionTitle
            title="Mission & Vision"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Target className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-navy">Our Mission</h3>
              <p className="leading-relaxed text-slate-500">
                To provide reliable, efficient, and innovative transportation
                solutions that empower businesses to grow. We are committed to delivering
                exceptional service through cutting-edge technology, a dedicated workforce,
                and a relentless focus on safety and sustainability.
              </p>
            </motion.div>
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <Eye className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-navy">Our Vision</h3>
              <p className="leading-relaxed text-slate-500">
                To be the most trusted and innovative transportation company in North America,
                setting the standard for reliability, sustainability, and customer satisfaction.
                We envision a future where every shipment is delivered seamlessly, powered by
                technology and driven by people who care.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Our Values */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionTitle
            title="Our Core Values"
            subtitle="The foundation of everything we do at Avinash Roadways"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companyValues.map((value, index) => (
              <FeatureCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>



      {/* Stats Section */}
      <section className="bg-navy py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <StatCounter key={stat.id} stat={stat} index={index} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
