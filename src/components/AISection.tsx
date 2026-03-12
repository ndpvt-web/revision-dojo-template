"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import { ArrowRight, HelpCircle, TrendingUp, Search, Layers } from "lucide-react";

const capabilityIcons: Record<string, React.ElementType> = {
  Quiz: HelpCircle,
  Math: TrendingUp,
  Search: Search,
  Flashcards: Layers,
};

export default function AISection() {
  const { aiSection } = siteConfig;

  return (
    <>
      {/* Main AI Hero - Dark section */}
      <section className="w-full bg-gray-950 py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl text-center relative z-10">
          {/* AI Character placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-8 shadow-2xl shadow-purple-500/20"
          >
            <span className="text-5xl">🤖</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight whitespace-pre-line"
          >
            {aiSection.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
          >
            {aiSection.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <Link
              href={aiSection.cta.href}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5"
            >
              {aiSection.cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Capability tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 p-1.5"
          >
            {aiSection.capabilities.map((cap, i) => {
              const Icon = capabilityIcons[cap] || HelpCircle;
              return (
                <button
                  key={cap}
                  className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-colors ${
                    i === 0
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cap}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Chat Demo - Dark section */}
      <section className="w-full bg-gray-950 py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <span className="text-sm font-semibold text-pink-400">Chat with {aiSection.name}</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white leading-tight">
                {aiSection.chatDemo.title}
              </h2>
              <p className="mt-4 text-base text-gray-400 leading-relaxed">
                {aiSection.chatDemo.description}
              </p>
              <Link
                href={aiSection.chatDemo.cta.href}
                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5"
              >
                {aiSection.chatDemo.cta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 w-full"
            >
              {/* Chat mock UI */}
              <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 shadow-2xl max-w-md mx-auto">
                <div className="flex items-center gap-2 mb-4">
                  {aiSection.capabilities.map((cap, i) => {
                    const Icon = capabilityIcons[cap] || HelpCircle;
                    return (
                      <button
                        key={cap}
                        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full ${
                          i === 1 ? "bg-white/10 text-white" : "text-gray-500"
                        }`}
                      >
                        <Icon className="w-3 h-3" />
                        {cap}
                      </button>
                    );
                  })}
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 mb-4">
                  <p className="text-white text-sm">Help me graph the function f(x) = x² - 4x + 3</p>
                </div>
                <p className="text-gray-400 text-sm mb-4">Let me create a visual representation:</p>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-green-400 font-medium">GRAPH</span>
                    <span className="text-xs text-gray-500 ml-auto">Fullscreen</span>
                  </div>
                  <div className="h-32 bg-gray-900/50 rounded-lg grid place-items-center">
                    <svg className="w-full h-full" viewBox="0 0 200 120">
                      <line x1="100" y1="0" x2="100" y2="120" stroke="#374151" strokeWidth="0.5" />
                      <line x1="0" y1="60" x2="200" y2="60" stroke="#374151" strokeWidth="0.5" />
                      <path d="M 20 10 Q 60 110 100 60 Q 140 10 180 100" fill="none" stroke="#A78BFA" strokeWidth="2" />
                      <text x="195" y="58" fill="#6B7280" fontSize="8">x</text>
                      <text x="102" y="8" fill="#6B7280" fontSize="8">y</text>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grading Demo - Dark section */}
      <section className="w-full bg-gray-950 py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <span className="text-sm font-semibold text-pink-400">Grade Your Answers</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white leading-tight">
                {aiSection.gradingDemo.title}
              </h2>
              <p className="mt-4 text-base text-gray-400 leading-relaxed">
                {aiSection.gradingDemo.description}
              </p>
              <Link
                href={aiSection.gradingDemo.cta.href}
                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5"
              >
                {aiSection.gradingDemo.cta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 w-full"
            >
              {/* Grading mock UI */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold">Question 3</span>
                  <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded font-medium">HL</span>
                  <span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded font-medium">Math</span>
                  <span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded font-medium">Paper 2</span>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Find the derivative of f(x) = 3x³ - 2x√x + 1 &nbsp;[3]
                </p>
                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                  <p className="text-sm text-gray-700">f&apos;(x) = 9x² - 3√x</p>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-gray-400">Graded!</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full border-4 border-green-400 flex items-center justify-center shrink-0">
                    <span className="text-lg font-black text-green-600">3/3</span>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-2">
                      <span className="text-green-500 text-sm">✓</span>
                      <span className="text-xs text-green-700">Correct application of power rule to x³ term</span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-2">
                      <span className="text-green-500 text-sm">✓</span>
                      <span className="text-xs text-green-700">Correct differentiation of x√x term</span>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-2">
                      <span className="text-green-500 text-sm">✓</span>
                      <span className="text-xs text-green-700">Final answer correctly simplified</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2">
                      <span className="text-blue-500 text-sm">ℹ</span>
                      <span className="text-xs text-blue-700">Excellent work! All steps shown clearly</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
