"use client";

import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";

const bgColors = [
  "bg-blue-50",
  "bg-green-50",
  "bg-purple-50",
  "bg-pink-50",
  "bg-orange-50",
  "bg-amber-50",
  "bg-cyan-50",
  "bg-emerald-50",
  "bg-rose-50",
];

const flagMap: Record<string, string> = {
  TR: "🇹🇷", CA: "🇨🇦", IN: "🇮🇳", MY: "🇲🇾", KR: "🇰🇷", BR: "🇧🇷", EG: "🇪🇬",
  US: "🇺🇸", GB: "🇬🇧", AU: "🇦🇺", DE: "🇩🇪", FR: "🇫🇷", JP: "🇯🇵", ES: "🇪🇸",
};

export default function Testimonials() {
  const { socialProof, testimonials } = siteConfig;

  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Social proof header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-16"
        >
          <div className="flex-1">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900">
              👥 {socialProof.count} {socialProof.title}
            </h2>
            <p className="mt-3 text-base text-gray-500">
              {socialProof.subtitle}
            </p>
            <button className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
              View all reviews
            </button>
          </div>
          {/* Globe placeholder */}
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-80 shrink-0 hidden lg:flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <span className="text-6xl">🌍</span>
          </div>
        </motion.div>

        {/* Testimonial grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className={`break-inside-avoid ${bgColors[i % bgColors.length]} rounded-2xl p-6 border border-gray-100`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.name} {flagMap[t.country] || ""}
                  </p>
                  <p className="text-xs text-gray-500">{t.school}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {t.highlight ? (
                  <>
                    <span className="font-semibold text-purple-700 underline decoration-purple-300">{t.highlight}</span>
                    {t.text.includes(t.highlight)
                      ? t.text.substring(t.text.indexOf(t.highlight) + t.highlight.length)
                      : ` - ${t.text}`
                    }
                  </>
                ) : (
                  t.text
                )}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trustpilot */}
        <div className="mt-8 flex justify-end">
          <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
            <p className="text-lg font-bold text-gray-900">Rated Excellent</p>
            <p className="text-sm text-gray-500">On Trustpilot</p>
            <button className="mt-2 px-4 py-2 text-xs font-medium text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors">
              Read more reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
