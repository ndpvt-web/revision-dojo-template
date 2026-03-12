"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function CourseworkSection() {
  const { coursework } = siteConfig;

  return (
    <section className="w-full bg-gradient-to-b from-gray-950 via-purple-950/30 to-gray-950 py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-400">
            <CheckCircle className="w-4 h-4" />
            {coursework.tag}
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black text-white leading-tight">
            {coursework.title}
          </h2>
          <p className="mt-4 text-base text-gray-400 max-w-2xl mx-auto">
            {coursework.description}
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col lg:flex-row items-center gap-8">
          {/* Document mock */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 max-w-lg"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-5 text-left">
              <div className="flex items-center gap-2 mb-3 text-xs text-gray-400">
                <span>Physics IA</span>
                <span className="ml-auto">32 annotations</span>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3 mb-3 border-l-4 border-yellow-400">
                <p className="text-xs font-bold text-gray-700">
                  Investigating the relationship between the length of suspension and the period of a bifilar pendulum
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-gray-600">
                  <span className="font-semibold text-gray-700">Introduction</span>
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  A pendulum is a system in which a free weight is suspended and oscillated in harmonic motion. The bifilar pendulum is what piqued my interest the most.
                </p>
                <div className="bg-green-50 rounded-lg p-2 border-l-4 border-green-400 mt-2">
                  <p className="text-xs font-semibold text-green-600">Criteria A: Research Design</p>
                  <p className="text-xs text-green-700 mt-1">✓ Strength: You define r, L, θ concisely...</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Score panel mock */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 max-w-lg"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 text-left">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                {["Scores", "Rubric", "Exemplars", "Chat"].map((tab, i) => (
                  <button
                    key={tab}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                      i === 0 ? "bg-green-50 text-green-700" : "text-gray-400"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Overall Score: <span className="text-purple-600">21/24</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Criteria A: Research Design</span>
                    <span className="text-sm font-bold">5/6</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-400 to-green-400 rounded-full" style={{ width: "83%" }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs font-medium text-green-700">Excellent</span>
                    <span className="text-xs text-gray-500 ml-2">Research question context</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span className="text-xs font-medium text-yellow-700">Good</span>
                    <span className="text-xs text-gray-500 ml-2">Methodological considerations</span>
                  </div>
                </div>
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <p className="text-xs text-gray-600">Clear, focused research question is well framed and supported by concise definitions of variables.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <p className="text-xs text-gray-600">The methodological description enables reproducibility with only minor ambiguities.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <Link
            href={coursework.cta.href}
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5"
          >
            {coursework.cta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
