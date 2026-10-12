"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <>
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="mobile-contact-button mobile-contact-whatsapp fixed z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--fg-10)] bg-[var(--bg)]/95 text-[var(--accent)] shadow-lg backdrop-blur-md lg:right-8 lg:bottom-8 lg:h-14 lg:w-14 lg:border-0 lg:bg-[#25D366] lg:text-white"
      aria-label="Chat on WhatsApp"
    >
      <i className="pi pi-whatsapp text-xl lg:text-2xl" aria-hidden="true" />
    </motion.a>
    <a
      href={`mailto:${siteConfig.email}`}
      aria-label="Email Phakama"
      className="mobile-contact-button mobile-contact-email fixed z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--fg-10)] bg-[var(--bg)]/95 text-[var(--accent)] shadow-lg backdrop-blur-md lg:right-8 lg:bottom-26 lg:h-14 lg:w-14"
    >
      <i className="pi pi-envelope text-xl lg:text-2xl" aria-hidden="true" />
    </a>
    </>
  );
}
