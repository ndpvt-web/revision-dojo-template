"use client";

import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";

const cardStyles = [
  { bg: "bg-white", statColor: "text-purple-600", icon: "⭐" },
  { bg: "bg-gray-900 text-white", statColor: "text-purple-400", icon: "" },
  { bg: "bg-white", statColor: "text-purple-600", icon: "💜" },
  { bg: "bg-gray-900 text-white", statColor: "text-purple-400", icon: "" },
  { bg: "bg-gray-900 text-white", statColor: "text-purple-400", icon: "" },
  { bg: "bg-white", statColor: "text-purple-600", icon: "😊" },
  { bg: "bg-gray-900 text-white", statColor: "text-purple-400", icon: "" },
  { bg: "bg-white", statColor: "text-purple-600", icon: "🎈" },
];

export default function ImpactCards() {
  const { impactCards } = siteConfig;

  return (
    <section className="w-full bg-purple-50 py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {impactCards.map((card, i) => {
            const style = cardStyles[i % cardStyles.length];
            const isTestimonial = i % 2 === 1;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Stat card */}
                <div className={`${isTestimonial ? "bg-gray-900" : "bg-white"} rounded-2xl p-6 h-full border ${isTestimonial ? "border-gray-800" : "border-gray-100"} flex flex-col`}>
                  {!isTestimonial && (
                    <>
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">{card.title}</h3>
                      <div className="text-3xl mb-2">{style.icon}</div>
                      <p className={`text-3xl font-black ${style.statColor} mb-2`}>{card.stat}</p>
                      <p className={`text-xs ${isTestimonial ? "text-gray-400" : "text-gray-500"} mt-auto`}>{card.label}</p>
                    </>
                  )}
                  {isTestimonial && (
                    <>
                      <h3 className="text-sm font-semibold text-gray-400 mb-4">{card.title}</h3>
                      <p className={`text-3xl font-black text-purple-400 mb-2`}>{card.stat}</p>
                      <p className="text-xs text-gray-400 mt-auto">{card.label}</p>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
