import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import OptimizedImage from "@/components/OptimizedImage";
import { companyInfo } from "@/data/company";
import { images } from "@/data/images";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone}`,
  },
  {
    icon: Mail,
    title: "Email Us",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: companyInfo.address,
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: companyInfo.hours,
    href: "#",
  },
];

const faqs = [
  {
    question: "How do I request a shipping quote?",
    answer:
      "Simply fill out our contact form above or call us directly. Our team will provide a detailed quote within 24 hours based on your shipment requirements.",
  },
  {
    question: "Do you offer expedited shipping?",
    answer:
      "Yes! Our Express Delivery service offers same-day and next-day delivery options for time-critical shipments across major metropolitan areas.",
  },
];

export default function Contact() {
  return (
    <>
      {/* Page Hero Banner */}
      <section className="relative flex min-h-[50vh] items-center bg-navy pt-20">
        <div className="absolute inset-0">
          <OptimizedImage
            src={images.hero.contact}
            alt="Contact Avinash Roadways"
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
            Contact <span className="text-gold">Us</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-slate-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Get in touch with {companyInfo.name} for a free quote or any inquiries
          </motion.p>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              const isLink = card.href !== "#";
              return (
                <motion.div
                  key={card.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-navy">{card.title}</h3>
                  {isLink ? (
                    <a
                      href={card.href}
                      className="text-sm text-slate-500 transition-colors hover:text-gold"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-500">{card.value}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <Container>
          <div className="max-w-2xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="mb-2 text-3xl font-extrabold text-navy text-center">Send Us a Message</h2>
              <p className="mb-8 text-slate-500 text-center">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-extrabold text-navy sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <h3 className="mb-2 text-lg font-semibold text-navy">{faq.question}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
