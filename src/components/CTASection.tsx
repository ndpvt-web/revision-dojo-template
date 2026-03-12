"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-purple-50/50 to-blue-50" />
      <div className="absolute inset-0">
        {/* Mountains / decorative shapes */}
        <svg className="absolute bottom-0 left-0 right-0 w-full h-48" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path d="M0,200 L0,120 L200,80 L400,130 L600,60 L800,100 L1000,50 L1200,90 L1440,70 L1440,200 Z" fill="#7C3AED" opacity="0.15" />
          <path d="M0,200 L0,150 L300,100 L500,140 L700,90 L900,120 L1100,80 L1440,110 L1440,200 Z" fill="#7C3AED" opacity="0.1" />
        </svg>
      </div>

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
            Join {siteConfig.socialProof.count} Students Already<br />
            Crushing Their Exams
          </h2>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary rounded-full hover:bg-primary-dark shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4" />
            Get Started Free
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
