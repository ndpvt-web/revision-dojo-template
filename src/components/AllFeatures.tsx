"use client";

import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import {
  BookOpen, FileText, Layers, Bot, CheckCircle, FileCheck,
  Clock, Library, Users, Mic
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "book-open": BookOpen,
  "file-text": FileText,
  layers: Layers,
  bot: Bot,
  "check-circle": CheckCircle,
  "file-check": FileCheck,
  clock: Clock,
  library: Library,
  users: Users,
  mic: Mic,
};

const featureDescriptions = [
  "Practice with thousands of questions that mirror real exams",
  "Expert-authored notes covering every topic",
  "Spaced repetition flashcards for efficient study",
  "Chat with AI and get instant feedback",
  "See what top-scoring coursework actually looks like",
  "AI-generated papers targeting your weak spots",
  "Full-length practice exams that feel like the real thing",
  "Browse 2500+ high-scoring exemplars",
  "Expert tutors at $29/hr with 0% commission",
  "Practice speaking assessments with AI feedback",
];

export default function AllFeatures() {
  return (
    <section className="w-full bg-white py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 text-center mb-12"
        >
          All Features
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {siteConfig.allFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon] || BookOpen;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 5) * 0.05 }}
                className="group bg-gray-50 hover:bg-white rounded-2xl p-5 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all cursor-pointer text-center"
              >
                <div className="mx-auto w-10 h-10 rounded-xl bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center transition-colors mb-3">
                  <Icon className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-500">{featureDescriptions[i] || feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
