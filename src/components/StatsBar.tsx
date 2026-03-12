"use client";

import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Heart, Smile } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "bar-chart": BarChart3,
  "trending-up": TrendingUp,
  heart: Heart,
  smile: Smile,
};

const iconColors = ["text-blue-500", "text-amber-500", "text-pink-500", "text-green-500"];

export default function StatsBar() {
  return (
    <section className="w-full bg-white py-6 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {siteConfig.stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || BarChart3;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-2 rounded-2xl bg-gray-50 p-5 border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <Icon className={`w-5 h-5 ${iconColors[i]}`} />
                  <span className="text-2xl font-black tracking-tight">{stat.value}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-4 flex justify-center">
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
            Read our State of Learning report
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
