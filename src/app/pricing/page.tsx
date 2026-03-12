"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight, BarChart3, TrendingUp, Heart, Smile } from "lucide-react";

const iconMap = [BarChart3, TrendingUp, Heart, Smile];
const iconColors = ["text-blue-400", "text-amber-400", "text-pink-400", "text-green-400"];

export default function PricingPage() {
  const { pricing, stats } = siteConfig;

  return (
    <>
      {/* Sale banner */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-green-500 to-emerald-500 py-2 text-center">
        <p className="text-sm font-semibold text-white">
          Spring Sale - 50% off &nbsp; 1d 12h 18m 34s
        </p>
      </div>

      {/* Hero */}
      <section className="w-full bg-gray-950 pt-36 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl text-center relative z-10">
          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto w-40 h-40 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 flex items-center justify-center mb-8 shadow-2xl shadow-purple-500/30"
          >
            <span className="text-7xl">🥷</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white"
          >
            {pricing.headline}<br />
            <span className="gradient-text">{pricing.headlineAccent}</span>
          </motion.h1>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((stat, i) => {
              const Icon = iconMap[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="bg-gray-900 rounded-xl p-4 border border-gray-800 text-left"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={`w-4 h-4 ${iconColors[i]}`} />
                    <span className="text-xl font-black text-white">{stat.value}</span>
                  </div>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="w-full bg-gray-950 py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Features list */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">What&apos;s included?</h2>
              <div className="space-y-4">
                {pricing.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400 shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Plan selector */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {pricing.plans.map((plan, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl p-5 border cursor-pointer transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/50 shadow-lg shadow-purple-500/10"
                      : "bg-gray-900 border-gray-800 hover:border-gray-700"
                  }`}
                >
                  {plan.discount && (
                    <span className="absolute top-4 right-4 px-2 py-0.5 text-xs font-bold text-white bg-red-500 rounded-full">
                      {plan.discount}
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      plan.popular ? "border-purple-400" : "border-gray-600"
                    }`}>
                      {plan.popular && <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-semibold text-white">{plan.name}</span>
                        {plan.badge && (
                          <span className="px-2 py-0.5 text-xs font-bold text-purple-300 bg-purple-500/20 rounded border border-purple-500/30">
                            {plan.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{plan.description}</p>
                    </div>
                    <div className="text-right">
                      {plan.originalPrice && (
                        <span className="text-sm text-gray-500 line-through mr-2">{plan.originalPrice}</span>
                      )}
                      <span className="text-2xl font-black text-white">{plan.price}</span>
                      <span className="text-sm text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  {plan.savings && (
                    <p className="mt-2 text-xs text-green-400 ml-8">{plan.savings}</p>
                  )}
                  {plan.popular && (
                    <div className="mt-3 ml-8 flex items-center gap-2 text-xs text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      Best value - Your all-access pass to succeed
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/signup"
                className="block w-full py-4 text-center text-base font-semibold text-gray-900 bg-white rounded-2xl hover:bg-gray-100 transition-colors mt-6"
              >
                Sign up
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-gray-950 py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {siteConfig.faq.slice(0, 4).map((item, i) => (
              <details key={i} className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden group">
                <summary className="px-6 py-5 text-base font-semibold text-white cursor-pointer flex items-center justify-between list-none">
                  {item.q}
                  <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gray-950 py-16 px-4 sm:px-6 text-center">
        <Link
          href="/signup"
          className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5"
        >
          Get Started Free
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
