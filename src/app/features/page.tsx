"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import {
  BookOpen, FileText, Layers, Bot, CheckCircle, FileCheck,
  Clock, Library, Users, Mic, ArrowRight, Sparkles
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

const featureDetails = [
  {
    color: "bg-cyan-50 border-cyan-200",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    details: [
      "Thousands of exam-style questions mirroring real exams",
      "Filter by topic, paper, and difficulty level",
      "AI-powered grading with detailed mark scheme feedback",
      "Track your progress across all topics",
    ],
  },
  {
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    details: [
      "Written by experienced examiners and top-scoring graduates",
      "Complete curriculum coverage for every subject",
      "Clear explanations with worked examples",
      "Regular updates to match latest syllabus changes",
    ],
  },
  {
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    details: [
      "Pre-made flashcards organized by topic and subtopic",
      "Spaced repetition algorithm for optimal retention",
      "Audio support for language subjects",
      "Create and share your own custom decks",
    ],
  },
  {
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    details: [
      "24/7 AI study assistant powered by advanced models",
      "Understands your curriculum and marking criteria",
      "Can generate custom quizzes, explain concepts, and solve problems",
      "Math-capable with graphing and step-by-step solutions",
    ],
  },
  {
    color: "bg-pink-50 border-pink-200",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    details: [
      "Upload your essays and coursework for instant feedback",
      "Detailed rubric breakdown with criterion-level scores",
      "Line-by-line annotations and improvement suggestions",
      "Compare against 2500+ exemplar essays",
    ],
  },
  {
    color: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    details: [
      "AI-generated practice papers based on past exam patterns",
      "Full-length mock exams with realistic timing",
      "Detailed answer keys and marking schemes",
      "Performance analytics to target weak areas",
    ],
  },
  {
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    details: [
      "Timed practice under real exam conditions",
      "Automatic question selection based on your weak areas",
      "Grade prediction based on mock performance",
      "Review mode with detailed solutions",
    ],
  },
  {
    color: "bg-emerald-50 border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    details: [
      "Browse 2500+ high-scoring exemplar essays",
      "Filter by subject, criteria score, and topic",
      "See examiner comments and scoring rationale",
      "Use as inspiration for your own coursework",
    ],
  },
  {
    color: "bg-indigo-50 border-indigo-200",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    details: [
      "Expert tutors at $29/hr with 0% commission",
      "All tutors are verified top-scoring graduates or examiners",
      "Flexible scheduling across all time zones",
      "In-platform video calls with screen sharing",
    ],
  },
  {
    color: "bg-rose-50 border-rose-200",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    details: [
      "Practice Individual Oral assessments with AI",
      "Get real-time feedback on your speaking skills",
      "Analyze your performance against assessment criteria",
      "Record and review your practice sessions",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full pt-28 pb-16 px-4 sm:px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 mb-4">
              <Sparkles className="w-4 h-4" />
              Everything you need to succeed
            </span>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-gray-900">
              Powerful Features,<br />
              <span className="gradient-text">One Platform</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
              From AI-powered tutoring to expert-written content, every tool you need to excel in your exams is right here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="w-full py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-8">
          {siteConfig.allFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon] || BookOpen;
            const style = featureDetails[i] || featureDetails[0];

            return (
              <motion.div
                key={i}
                id={feature.title.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-")}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className={`${style.color} rounded-3xl p-8 border flex flex-col lg:flex-row items-start gap-8`}
              >
                <div className={`${style.iconBg} rounded-2xl p-4 shrink-0`}>
                  <Icon className={`w-8 h-8 ${style.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-base text-gray-600 mb-4">{feature.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {style.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className={`w-4 h-4 ${style.iconColor} shrink-0 mt-0.5`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 px-4 sm:px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Ready to get started?</h2>
        <p className="text-base text-gray-500 mb-8">Join 500,000+ students already using these features.</p>
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
