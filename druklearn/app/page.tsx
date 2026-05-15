// app/page.tsx
// DrukLearn Homepage with Freemium Business Model

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">

      {/* ===== NAVIGATION BAR ===== */}
      <nav className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇧🇹</span>
            <span className="text-xl font-bold text-orange-600">DrukLearn</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-gray-600 hover:text-orange-600 transition"
            >
              Features
            </a>
            <a
              href="#classes"
              className="text-gray-600 hover:text-orange-600 transition"
            >
              Classes
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-orange-600 transition"
            >
              Pricing
            </a>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition font-medium">
              Get Started Free
            </button>
          </div>

        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">

        <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          🎓 Built for Bhutanese Students
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI-Powered Learning
          <br />
          <span className="text-orange-500">for BHSEC Students</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Master your BHSEC exams with AI that understands the Bhutanese
          curriculum. Get instant answers, practice mock exams, and track your
          progress.
        </p>

        {/* ===== TWO CTA BUTTONS ===== */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* FREE BUTTON */}
          <button className="bg-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-orange-600 transition shadow-lg">
            Start Learning Free →
          </button>

          {/* PAID BUTTON */}
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition shadow-lg flex items-center justify-center gap-2">
            <span>👑</span>
            Subscribe — Nu. 99/month
          </button>

        </div>

        {/* What each button offers */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 text-sm">
          <p className="text-gray-400">
            ✅ Free — Ask questions, get AI answers
          </p>
          <p className="text-gray-400 hidden sm:block">•</p>
          <p className="text-orange-500 font-medium">
            👑 Pro — Competency-based answers + quizzes
          </p>
        </div>

      </section>

      {/* ===== PRICING SECTION ===== */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-16">

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Simple, Honest Pricing
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Start free. Upgrade when you are ready.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* ===== FREE PLAN ===== */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-sm hover:shadow-md transition">

            <div className="mb-6">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                Free Forever
              </span>
              <div className="flex items-end gap-1 mt-2">
                <span className="text-5xl font-bold text-gray-900">Nu. 0</span>
                <span className="text-gray-400 mb-2">/month</span>
              </div>
              <p className="text-gray-500 mt-2 text-sm">
                Perfect for getting started
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                { text: "Ask unlimited questions", included: true },
                { text: "Get AI answers from BHSEC curriculum", included: true },
                { text: "Basic subject coverage", included: true },
                { text: "Competency-based answers", included: false },
                { text: "Competency-based quizzes", included: false },
                { text: "Mock exam generator", included: false },
                { text: "Performance dashboard", included: false },
                { text: "AI study notes", included: false },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  {item.included ? (
                    <span className="text-green-500 font-bold text-lg">✓</span>
                  ) : (
                    <span className="text-gray-300 font-bold text-lg">✗</span>
                  )}
                  <span
                    className={
                      item.included ? "text-gray-700" : "text-gray-300"
                    }
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
              Start Free →
            </button>

          </div>

          {/* ===== PRO PLAN ===== */}
          <div className="relative bg-gradient-to-b from-orange-500 to-orange-600 rounded-2xl border-2 border-orange-400 p-8 shadow-xl text-white">

            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                👑 Most Popular
              </span>
            </div>

            <div className="mb-6">
              <span className="text-sm font-medium text-orange-200 uppercase tracking-wide">
                Pro Plan
              </span>
              <div className="flex items-end gap-1 mt-2">
                <span className="text-5xl font-bold text-white">Nu. 99</span>
                <span className="text-orange-200 mb-2">/month</span>
              </div>
              <p className="text-orange-200 mt-2 text-sm">
                Everything you need to top BHSEC
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Ask unlimited questions",
                "Get AI answers from BHSEC curriculum",
                "Full subject coverage (Class 6, 8, 10, 12)",
                "Competency-based AI answers",
                "Competency-based quizzes",
                "Mock exam generator",
                "Performance dashboard",
                "AI study notes with Bhutan examples",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-yellow-300 font-bold text-lg">✓</span>
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-white text-orange-600 py-3 rounded-xl font-bold hover:bg-orange-50 transition shadow-md">
              Subscribe — Nu. 99/month 👑
            </button>

            <p className="text-center text-orange-200 text-xs mt-3">
              Cancel anytime • No hidden fees
            </p>

          </div>

        </div>
      </section>

      {/* ===== CLASSES SECTION ===== */}
      <section id="classes" className="max-w-6xl mx-auto px-4 py-16">

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Choose Your Class
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Curriculum-aligned content for all BHSEC levels
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              class: "Class VI",
              emoji: "📚",
              color: "bg-blue-50 border-blue-200 text-blue-700",
            },
            {
              class: "Class VIII",
              emoji: "📖",
              color: "bg-green-50 border-green-200 text-green-700",
            },
            {
              class: "Class X",
              emoji: "🎯",
              color: "bg-purple-50 border-purple-200 text-purple-700",
            },
            {
              class: "Class XII",
              emoji: "🏆",
              color: "bg-orange-50 border-orange-200 text-orange-700",
            },
          ].map((item) => (
            <div
              key={item.class}
              className={`border-2 rounded-xl p-6 text-center cursor-pointer hover:scale-105 transition ${item.color}`}
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <div className="font-bold text-lg">{item.class}</div>
              <div className="text-sm mt-1 opacity-70">BHSEC Curriculum</div>
            </div>
          ))}
        </div>

      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section id="features" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Everything You Need to Ace BHSEC
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Powered by AI, designed for Bhutanese students
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤖",
                title: "AI Question Answering",
                description:
                  "Ask any question from your BHSEC syllabus and get instant, accurate answers based on your actual curriculum.",
                tag: "FREE",
                tagColor: "bg-green-100 text-green-700",
              },
              {
                icon: "🎯",
                title: "Competency-Based Answers",
                description:
                  "Get answers structured around learning competencies. Understand not just WHAT but WHY — the way BHSEC expects.",
                tag: "PRO 👑",
                tagColor: "bg-orange-100 text-orange-700",
              },
              {
                icon: "⚡",
                title: "Competency-Based Quizzes",
                description:
                  "Test yourself with quizzes built around BHSEC competencies. Know exactly which competency you are weak in.",
                tag: "PRO 👑",
                tagColor: "bg-orange-100 text-orange-700",
              },
              {
                icon: "📝",
                title: "Mock Exam Generator",
                description:
                  "Generate practice exams based on real past BHSEC question papers. Prepare exactly like the real exam.",
                tag: "PRO 👑",
                tagColor: "bg-orange-100 text-orange-700",
              },
              {
                icon: "📊",
                title: "Performance Dashboard",
                description:
                  "See your progress over time. Know exactly which topics need more attention before exam day.",
                tag: "PRO 👑",
                tagColor: "bg-orange-100 text-orange-700",
              },
              {
                icon: "📚",
                title: "AI Study Notes",
                description:
                  "Get AI-generated notes with real Bhutanese examples that make complex topics easy to understand.",
                tag: "PRO 👑",
                tagColor: "bg-orange-100 text-orange-700",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${feature.tagColor}`}
                  >
                    {feature.tag}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-white border-t border-gray-100 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xl">🇧🇹</span>
            <span className="font-bold text-orange-600">DrukLearn</span>
          </div>
          <p className="text-gray-400 text-sm">
            Made by Bhutanese college student with ❤️ for students of Bhutan • Powered by AI
          </p>
          <p className="text-gray-300 text-xs mt-2">
            Free plan available • Pro plan Nu. 99/month • Cancel anytime
          </p>
        </div>
      </footer>

    </main>
  );
}