"use client";

import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Globe, Award, Heart } from "lucide-react";

const teamMembers = [
  { name: "Alex Chen", role: "CEO & Co-founder", bio: "Former IB student, Stanford CS" },
  { name: "Sarah Kim", role: "CTO & Co-founder", bio: "Ex-Google engineer, education tech pioneer" },
  { name: "Dr. James Wright", role: "Head of Content", bio: "IB examiner for 15+ years" },
  { name: "Maria Garcia", role: "Head of Product", bio: "Ex-Duolingo product lead" },
];

const milestones = [
  { year: "2022", event: "Founded with a mission to transform exam prep" },
  { year: "2023", event: "Reached 100,000 students across 80+ countries" },
  { year: "2024", event: "Launched AI tutor Jojo, backed by Y Combinator" },
  { year: "2025", event: "500,000+ students, 180+ countries, Trustpilot Excellent" },
];

export default function AboutPage() {
  const { about } = siteConfig;

  return (
    <>
      {/* Hero */}
      <section className="w-full pt-28 pb-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-black tracking-tight text-gray-900 text-center"
          >
            {about.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-10 space-y-6"
          >
            <p className="text-lg leading-relaxed text-gray-700">
              <span className="text-purple-600 font-semibold">
                At {siteConfig.name}, we&apos;re building the learning platform you don&apos;t hate.
              </span>{" "}
              {about.body[0]}
            </p>

            <blockquote className="border-l-4 border-gray-900 pl-6 py-2">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
                {about.body[1]}
              </p>
            </blockquote>

            <p className="text-base leading-relaxed text-gray-600">
              {about.body[2]}
            </p>

            <blockquote className="border-l-4 border-gray-900 pl-6 py-2">
              <p className="text-2xl font-bold text-gray-900">
                {about.body[3]}
              </p>
            </blockquote>

            <p className="text-base leading-relaxed text-gray-600">
              {about.body[4]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full py-16 px-4 sm:px-6 bg-gray-50">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, value: "500k+", label: "Students worldwide" },
              { icon: Globe, value: "180+", label: "Countries" },
              { icon: Award, value: "#1", label: "Rated platform" },
              { icon: Heart, value: "92%", label: "Less exam anxiety" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <p className="text-3xl font-black text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-gray-900 text-center mb-12"
          >
            Meet the Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-purple-600 font-medium">{member.role}</p>
                <p className="text-xs text-gray-500 mt-1">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full py-20 px-4 sm:px-6 bg-gray-50">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-gray-900 text-center mb-12"
          >
            Our Journey
          </motion.h2>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="shrink-0 w-16 text-right">
                  <span className="text-lg font-black text-purple-600">{m.year}</span>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-purple-500" />
                  <div className="absolute left-1.5 top-5 w-px h-8 bg-purple-200" />
                </div>
                <p className="text-base text-gray-700 pl-6">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Ready to transform your learning?</h2>
        <p className="text-base text-gray-500 mb-8">Join 500,000+ students already on the platform.</p>
        <Link
          href="/signup"
          className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary rounded-full hover:bg-primary-dark shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
        >
          Get Started Free
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
