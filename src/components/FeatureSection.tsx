"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const bgColorMap: Record<string, string> = {
  cyan: "bg-cyan-50",
  orange: "bg-orange-50",
  purple: "bg-purple-50",
  green: "bg-green-50",
};

const tagColorMap: Record<string, string> = {
  cyan: "text-cyan-600",
  orange: "text-orange-600",
  purple: "text-purple-600",
  green: "text-green-600",
};

const btnColorMap: Record<string, string> = {
  cyan: "bg-cyan-500 hover:bg-cyan-600 shadow-cyan-500/25",
  orange: "bg-orange-500 hover:bg-orange-600 shadow-orange-500/25",
  purple: "bg-purple-500 hover:bg-purple-600 shadow-purple-500/25",
  green: "bg-green-500 hover:bg-green-600 shadow-green-500/25",
};

const mockScreens: Record<string, React.ReactNode> = {
  "question-bank": (
    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm font-semibold">Question 4</span>
        <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded font-medium">HL</span>
        <span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded font-medium">Paper 2</span>
      </div>
      <p className="text-sm text-gray-700 mb-4">
        A local community is developing a new park and wants to model the height of a parabolic fountain using the quadratic function f(x) = p + qx - x².
      </p>
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <span className="text-xs text-gray-500 mt-0.5">1.</span>
          <span className="text-sm text-gray-700">Determine the values of p and q that define this fountain&apos;s height.</span>
          <span className="text-xs text-gray-400 ml-auto">[4]</span>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-sm text-gray-400 italic">Write your answer here...</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">Markscheme</span>
          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded font-medium">Grade answer ⚡ 2</span>
        </div>
      </div>
    </div>
  ),
  textbook: (
    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md">
      <h4 className="font-bold text-base mb-2">Equations of Straight Lines</h4>
      <h5 className="font-semibold text-sm mb-3">Different Forms of Linear Equations</h5>
      <div className="space-y-2 text-sm text-gray-700">
        <p>Linear equations can be expressed in various forms:</p>
        <ol className="list-decimal list-inside space-y-1 ml-2">
          <li><strong>Gradient-Intercept Form:</strong> y = mx + c</li>
          <li><strong>General Form:</strong> ax + by + d = 0</li>
          <li><strong>Point-Gradient Form:</strong> y - y₁ = m(x - x₁)</li>
        </ol>
        <div className="mt-3 bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
          <p className="text-xs font-semibold text-blue-600 mb-1">Example</p>
          <p className="text-xs text-gray-600">Consider a line passing through point (2, 5) with gradient 3...</p>
        </div>
      </div>
    </div>
  ),
  lessons: (
    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-2 bg-blue-500 rounded-full w-1/4" />
        <div className="h-2 bg-gray-200 rounded-full flex-1" />
        <span className="text-xs text-amber-500 font-medium">⚡ 5</span>
      </div>
      <div className="bg-blue-50 rounded-lg p-2 mb-3">
        <p className="text-xs font-semibold text-blue-600">NOTE</p>
      </div>
      <h4 className="font-bold text-sm mb-2">Multiple Angle Equations</h4>
      <p className="text-xs text-gray-600 mb-3">When solving equations with multiple angles, follow these steps:</p>
      <ol className="list-decimal list-inside text-xs text-gray-700 space-y-1">
        <li>Treat the multiple angle as a <strong>single variable</strong> first.</li>
        <li>Solve the equation normally.</li>
        <li>Divide the solutions by the <strong>multiple</strong> to find x.</li>
      </ol>
      <div className="mt-3 bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
        <p className="text-xs font-semibold text-green-600 mb-1">Example</p>
        <p className="text-xs text-gray-600">For sin(2x) = 1: Solve 2x = π/2 + 2kπ</p>
      </div>
      <div className="mt-2 bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
        <p className="text-xs font-semibold text-red-600 mb-1">Common Mistake</p>
        <p className="text-xs text-gray-600">Remember the interval for 2x is twice as large as for x.</p>
      </div>
    </div>
  ),
  flashcards: (
    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-gray-500">1 / 15</span>
        <div className="flex items-center gap-2">
          <button className="text-xs text-gray-400">&larr;</button>
          <div className="h-1.5 bg-blue-500 rounded-full w-8" />
          <div className="h-1.5 bg-gray-200 rounded-full flex-1 min-w-[120px]" />
          <button className="text-xs text-gray-400">&rarr;</button>
        </div>
      </div>
      <div className="bg-gray-50 rounded-xl p-8 min-h-[180px] flex items-center justify-center border-2 border-gray-100">
        <p className="text-center text-sm font-medium text-gray-800">
          Rearrange <em>ax + by + d = 0</em> to <em>y = -a/b(x) - d/b</em>
        </p>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="text-xs text-gray-400">Flip</span>
        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">Spacebar</span>
      </div>
    </div>
  ),
};

export default function FeatureSections() {
  return (
    <>
      {siteConfig.features.map((feature, i) => (
        <section
          key={feature.id}
          id={feature.id}
          className={`w-full ${bgColorMap[feature.bgColor]} py-20 px-4 sm:px-6`}
        >
          <div className="mx-auto max-w-7xl">
            {/* Subject tabs */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-1 rounded-full bg-white p-1.5 shadow-sm border border-gray-100">
                {["Maths", "Economics", "Biology", "Psychology", "+20 Others.."].map((tab, j) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      j === 0
                        ? "bg-gray-900 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 max-w-lg"
              >
                <span className={`text-sm font-semibold ${tagColorMap[feature.tagColor]}`}>
                  {feature.tag}
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 leading-tight">
                  {feature.title}
                </h2>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <Link
                  href={feature.cta.href}
                  className={`mt-8 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-full shadow-lg transition-all hover:-translate-y-0.5 ${btnColorMap[feature.bgColor]}`}
                >
                  {feature.cta.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Mock screen */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 flex justify-center"
              >
                {mockScreens[feature.image] || (
                  <div className="w-80 h-60 rounded-2xl bg-white/50 shadow-lg" />
                )}
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
