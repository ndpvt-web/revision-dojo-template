"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative isolate min-h-[90vh] flex items-center overflow-hidden px-4 sm:px-6 pt-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/20 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm border border-gray-100 mb-8">
              <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-orange-500 text-white text-xs font-bold">
                Y
              </span>
              {hero.badge}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.05]"
          >
            {hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl"
          >
            {hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href={hero.cta.href}
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary rounded-full hover:bg-primary-dark shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              {hero.cta.label}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            {hero.secondaryCtas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className="inline-flex items-center px-6 py-4 text-base font-medium text-gray-700 bg-white rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                {cta.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute right-0 top-1/4 -z-10 hidden xl:block">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 opacity-20 rotate-12"
        />
      </div>
      <div className="absolute right-40 bottom-1/4 -z-10 hidden xl:block">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 opacity-20"
        />
      </div>
    </section>
  );
}
