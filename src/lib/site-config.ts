// ============================================================================
// SITE CONFIGURATION - Change these values to adapt this template for ANY business
// ============================================================================

export const siteConfig = {
  // Brand
  name: "RevisionDojo",
  tagline: "Expert-Written Exam Prep, All in One Place",
  description: "Real questions, top-scoring notes, AI grading. Everything you need to crush your exams.",
  logo: "/logo.svg",
  url: "https://revisiondojo.com",

  // Navigation
  nav: [
    {
      label: "Features",
      href: "/features",
      children: [
        { label: "Question Bank", href: "/features#question-bank", icon: "book-open" },
        { label: "Study Notes", href: "/features#study-notes", icon: "file-text" },
        { label: "Flashcards", href: "/features#flashcards", icon: "layers" },
        { label: "AI Tutor", href: "/features#ai-tutor", icon: "bot" },
        { label: "Grading", href: "/features#grading", icon: "check-circle" },
        { label: "Mock Exams", href: "/features#mock-exams", icon: "clock" },
      ],
    },
    {
      label: "Courses",
      href: "#courses",
      children: [
        { label: "Mathematics", href: "#", icon: "calculator" },
        { label: "Sciences", href: "#", icon: "flask-conical" },
        { label: "Humanities", href: "#", icon: "globe" },
        { label: "Languages", href: "#", icon: "languages" },
      ],
    },
    { label: "Tutoring", href: "/features#tutoring" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ],

  // Hero Section
  hero: {
    badge: "Backed by Y Combinator",
    title: "Expert-Written Exam Prep, All in One Place",
    subtitle: "Real questions, top-scoring notes, AI grading. Everything you need to crush your exams.",
    cta: { label: "Get Started Free", href: "/signup" },
    secondaryCtas: [
      { label: "I'm a Teacher", href: "/teachers" },
      { label: "I'm a Parent", href: "/parents" },
    ],
  },

  // Stats bar
  stats: [
    { icon: "bar-chart", value: "#1", label: "Trusted by 500,000+ students and teachers across 180+ countries" },
    { icon: "trending-up", value: "86%", label: "prefer us over competing platforms and other resources" },
    { icon: "heart", value: "92%", label: "of students report less exam anxiety after using our platform" },
    { icon: "smile", value: "82%", label: "say we made studying actually enjoyable" },
  ],

  // Feature sections (alternating color themes)
  features: [
    {
      id: "question-bank",
      tag: "Question Bank",
      tagColor: "cyan",
      title: "Free Exam Style Questions",
      description: "Thousands of questions that mirror your real exams, filtered by topic, paper, and level.",
      cta: { label: "Start Practicing Free", href: "/signup" },
      image: "question-bank",
      bgColor: "cyan",
    },
    {
      id: "study-notes",
      tag: "Textbooks",
      tagColor: "orange",
      title: "Textbooks Authored by Industry Experts",
      description: "Complete textbooks authored by experts and top professionals. Every topic, every technique, every subject.",
      cta: { label: "Read Textbooks for Free", href: "/signup" },
      image: "textbook",
      bgColor: "orange",
    },
    {
      id: "interactive-lessons",
      tag: "Learn Mode",
      tagColor: "purple",
      title: "Interactive Lessons That Stick",
      description: "Bite-sized lessons that actually stick. Flashcards, quizzes, and zero boredom.",
      cta: { label: "Try It Free", href: "/signup" },
      image: "lessons",
      bgColor: "purple",
    },
    {
      id: "flashcards",
      tag: "Flashcards",
      tagColor: "green",
      title: "Pre-Made Flashcards",
      description: "Ready-to-use flashcards organized for your curriculum. Every topic covered, perfectly categorized, with spaced repetition.",
      cta: { label: "Study Flashcards for Free", href: "/signup" },
      image: "flashcards",
      bgColor: "green",
    },
  ],

  // AI Section
  aiSection: {
    name: "Jojo",
    title: "Meet Jojo\nYour AI Study Partner",
    subtitle: "Instant help, custom quizzes, and answers that adapt to how you learn best",
    cta: { label: "Try Jojo for free", href: "/signup" },
    capabilities: ["Quiz", "Math", "Search", "Flashcards"],
    chatDemo: {
      title: "Always Available, Never Judges",
      description: "Stuck on a concept? Need help visualizing something? Jojo's got you covered 24/7.",
      cta: { label: "Chat With Jojo for Free", href: "/signup" },
    },
    gradingDemo: {
      title: "Know Exactly Where You Stand",
      description: "AI grading that shows you exactly what you're missing and how to fix it. Like having a tutor mark every answer.",
      cta: { label: "Try Jojo's Grading Free", href: "/signup" },
    },
  },

  // Coursework section
  coursework: {
    tag: "Grade your coursework",
    title: "Instant feedback on your EE/IA/TOK",
    description: "Upload your essays and coursework for comprehensive grading with detailed rubric breakdown, annotations, and improvement suggestions.",
    cta: { label: "Try Coursework Grader for Free", href: "/signup" },
  },

  // Social proof
  socialProof: {
    count: "500,000+",
    title: "Students Can't Be Wrong",
    subtitle: "Rated excellent on Trustpilot by people who've actually done their exams",
  },

  // Testimonials
  testimonials: [
    {
      name: "Desen",
      school: "Istanbul International School",
      country: "TR",
      text: "I got into Brown University with a 44 predicted IB grade, and this platform was my study buddy especially for Chem, Bio, and Math AA HL.",
      highlight: "I got into Brown University with a 44 predicted IB grade",
    },
    {
      name: "Swetha",
      school: "Toronto French School",
      country: "CA",
      text: "Loved the AI tool as it helped me greatly prepare for my psych exam and IAs by providing feedback on my writing and helping fix any mistakes.",
      highlight: "Loved the AI tool as it helped me greatly prepare for my psych exam and IAs",
    },
    {
      name: "Dyuthi",
      school: "The International School Bangalore",
      country: "IN",
      text: "I love the notes and question banks! Its short and really easy to get.",
      highlight: "I love the notes and question banks!",
    },
    {
      name: "Oscar",
      school: "International School of Kuala Lumpur",
      country: "MY",
      text: "I love this platform!! Got a 43 - you're the best :)",
      highlight: "Got a 43",
    },
    {
      name: "Dx",
      school: "York House School",
      country: "CA",
      text: "Made studying for exams a lot easier. Resources are super easy to access and high quality. Would definitely recommend buying the plus subscription - trust me!",
      highlight: "goated review",
    },
    {
      name: "Beverly",
      school: "Seoul International School",
      country: "KR",
      text: "I've been using this platform since December 2024, and it has completely transformed the way I view and approach my studies.",
      highlight: "it has completely transformed the way I view and approach my studies",
    },
    {
      name: "Jusleen",
      school: "Branksome Hall",
      country: "CA",
      text: "Amazing in terms of the education they provide. In biology I started the semester out with a level 4 and ended up scoring a level 6.",
      highlight: "ended up scoring a level 6",
    },
    {
      name: "Matheus",
      school: "Escola Americana do Rio de Janeiro",
      country: "BR",
      text: "Honestly I would be completely lost without this platform. The notes and lessons are awesome.",
      highlight: "Honestly I would be completely lost without this platform",
    },
    {
      name: "Amina",
      school: "Cairo American College",
      country: "EG",
      text: "The AI tool is actually a LIFESAVER!! Writes brilliant outlines, and finds such good rich resources.",
      highlight: "the AI tool is actually a LIFESAVER!!",
    },
  ],

  // Impact cards
  impactCards: [
    { title: "Journey", stat: "38%+", label: "Say we made studying actually bearable." },
    { title: "Outcome", stat: "35%+", label: "Finally understand mark scheme requirements." },
    { title: "Joy", stat: "38%+", label: "Stress less about exams (up to 39% reduction, seriously)." },
    { title: "Opportunity", stat: "35%", label: "Ditch their school's platform for us." },
  ],

  // All features grid
  allFeatures: [
    { title: "Question Bank", description: "Thousands of exam-style questions", icon: "book-open" },
    { title: "Study Notes", description: "Expert-authored comprehensive notes", icon: "file-text" },
    { title: "Flashcards", description: "Spaced repetition flashcards", icon: "layers" },
    { title: "AI Chat", description: "24/7 AI study assistant", icon: "bot" },
    { title: "Grade EE/IA/TOK", description: "AI coursework grading", icon: "check-circle" },
    { title: "Predicted Papers", description: "AI-generated practice papers", icon: "file-check" },
    { title: "Mock Exams", description: "Full-length practice exams", icon: "clock" },
    { title: "EE/IA/TOK Library", description: "2500+ exemplar essays", icon: "library" },
    { title: "Tutors", description: "Expert tutors at $29/hr", icon: "users" },
    { title: "IO Practice", description: "Oral assessment preparation", icon: "mic" },
  ],

  // FAQ
  faq: [
    { q: "How is this platform different?", a: "We combine expert-written content, AI-powered tools, and community support into one integrated platform. Our content is written by examiners and top-scoring students, not auto-generated." },
    { q: "Who creates the content?", a: "Our content is authored by experienced examiners and top-scoring graduates who deeply understand the curriculum and marking criteria." },
    { q: "What resources can I access?", a: "You get access to question banks, study notes, flashcards, AI chat, coursework grading, mock exams, predicted papers, and much more." },
    { q: "How does the platform use my data?", a: "We take privacy seriously. Your data is used only to personalize your learning experience. We're GDPR compliant and never sell your data." },
    { q: "Can I try before committing?", a: "Yes! We offer a generous free tier with access to question banks, study notes, flashcards, and limited AI features." },
    { q: "Can I share my account?", a: "Each account is individual. We offer family plans and school licenses for multiple users." },
  ],

  // Pricing
  pricing: {
    headline: "One subscription,",
    headlineAccent: "all your learning needs.",
    plans: [
      { name: "Monthly", price: "$49", period: "/month", description: "Monthly billing, cancel anytime.", popular: false },
      { name: "Quarterly", price: "$99", period: "/3 months", description: "Billed every 3 months, cancel anytime.", popular: false },
      {
        name: "Annual Pass",
        price: "$199",
        originalPrice: "$398",
        period: "one-time",
        description: "One time payment. Best value.",
        popular: true,
        badge: "BEST VALUE",
        discount: "50% off",
        savings: "Save $199 compared to buying monthly",
      },
    ],
    features: [
      "Access to all subjects",
      "Access to all study notes, flashcards, and lessons",
      "Unlimited energy",
      "Unlimited AI chat & feedback",
      "Full feedback on your coursework",
      "2500+ exemplars",
      "Concept and walkthrough videos",
      "300+ cheatsheets",
      "20+ guides",
      "All predicted papers",
      "Plagiarism & AI detector",
      "Tutoring for $29/hr with TutorPass",
    ],
  },

  // About page
  about: {
    title: "About Us",
    intro: "We're building the learning platform you don't hate.",
    body: [
      "The best learning happens when we're engaged. So why is it that so many students find learning so deeply unengaging?",
      "The world has changed a lot in the last few decades, mostly for the better, and mostly thanks to technology. Learning (as we know it) however, has remained largely the same.",
      "What's more, we blame ourselves for the system's shortcomings. We've labeled ourselves \"dumb\" when textbooks overwhelm us, \"undisciplined\" when monotonous assignments fail to hold our interest, and \"disorganized\" when rigid schedules don't align with our lives.",
      "This needs to change, and that's why we're here.",
      "We believe being good at school and being \"smart\" are different. Being good at school is a skill. And like any skill, it is something you can master with time and consistency.",
    ],
  },

  // Footer
  footer: {
    columns: [
      {
        title: "General",
        links: [
          { label: "For parents", href: "/parents" },
          { label: "Pricing", href: "/pricing" },
          { label: "About us", href: "/about" },
          { label: "Tutoring", href: "/features#tutoring" },
          { label: "Blog", href: "/blog" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Features",
        links: [
          { label: "AI Tutor", href: "/features#ai-tutor" },
          { label: "Question Bank", href: "/features#question-bank" },
          { label: "Study Notes", href: "/features#study-notes" },
          { label: "Flashcards", href: "/features#flashcards" },
          { label: "Mock Exams", href: "/features#mock-exams" },
          { label: "Coursework Grading", href: "/features#grading" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "State of Learning Survey", href: "#" },
          { label: "Research", href: "#" },
          { label: "Content Philosophy", href: "#" },
          { label: "Trustpilot Reviews", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Terms and Conditions", href: "/terms" },
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Cookie Policy", href: "/cookies" },
        ],
      },
    ],
    copyright: "2024 - 2026",
    disclaimer: "This platform was developed independently and is not endorsed by any examination body.",
  },

  // Theme colors (maps to Tailwind)
  theme: {
    primary: "#7C3AED",     // Purple
    secondary: "#06B6D4",   // Cyan
    accent: "#F97316",      // Orange
    success: "#22C55E",     // Green
    warning: "#EAB308",     // Yellow
    dark: "#0F172A",        // Slate-900
    light: "#F8FAFC",       // Slate-50
  },
};

export type SiteConfig = typeof siteConfig;
