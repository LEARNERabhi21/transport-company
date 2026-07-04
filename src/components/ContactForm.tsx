import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import type { ContactFormData } from "@/types";
import { supabase } from "@/lib/supabase";
import { services } from "@/data/company";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[\d\s()+-]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    });

    if (!error) {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } else {
      setStatus("error");
    }
    setSubmitting(false);
    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClasses = (field: keyof ContactFormData) =>
    `w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:ring-2 ${
      errors[field]
        ? "border-red-400 focus:border-red-500 focus:ring-red-200"
        : "border-slate-200 focus:border-gold focus:ring-gold/20"
    }`;

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          className={inputClasses("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && <p id="name-error" className="mt-1 text-xs text-red-500" role="alert">{errors.name}</p>}
      </div>

      {/* Email & Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={inputClasses("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className={inputClasses("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && <p id="phone-error" className="mt-1 text-xs text-red-500" role="alert">{errors.phone}</p>}
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-slate-700">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={inputClasses("service")}
        >
          <option value="">Select a service</option>
          {services.map((svc) => (
            <option key={svc.id} value={svc.id}>
              {svc.title}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your shipping needs..."
          rows={5}
          className={inputClasses("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && <p id="message-error" className="mt-1 text-xs text-red-500" role="alert">{errors.message}</p>}
      </div>

      {/* Status Messages */}
      <div aria-live="polite">
        {status === "success" && (
          <div className="flex items-center gap-2 rounded-xl bg-green-50 p-4 text-sm text-green-700" role="alert">
            <CheckCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
            Thank you! Your message has been sent successfully. We&apos;ll get back to you shortly.
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-700" role="alert">
            <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
            Something went wrong. Please try again later.
          </div>
        )}
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full sm:w-auto" disabled={submitting}>
        {submitting ? "Sending..." : <>Send Message <Send className="h-4 w-4" /></>}
      </Button>
    </motion.form>
  );
}