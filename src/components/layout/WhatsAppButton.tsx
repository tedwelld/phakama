"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-6 bottom-[calc(5.5rem+env(safe-area-inset-bottom,0px))] z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-black/30 lg:bottom-8 lg:right-8"
      aria-label="Chat on WhatsApp"
    >
      <i className="pi pi-whatsapp text-white" style={{ fontSize: "26px" }} />
    </motion.a>
  );
}
