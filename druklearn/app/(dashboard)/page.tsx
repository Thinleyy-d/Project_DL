// app/(dashboard)/dashboard/page.tsx
// Student Dashboard — after login

import { createClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()

  // Get current logged in user
  const { data: { user } } = await supabase.auth.getUser()

  // If not logged in → send to login page
  if (!user) {
    redirect('/login')
  }

  // Get student profile from database
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">

      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇧🇹</span>
            <span className="text-xl font-bold text-orange-600">DrukLearn</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 text-sm">
              👋 {profile?.full_name || user.email}
            </span>
            {profile?.is_pro ? (
              <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">
                👑 PRO
              </span>
            ) : (
              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">
                FREE
              </span>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Welcome Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {profile?.full_name?.split(' ')[0] || 'Student'} 👋
          </h1>
          <p className="text-gray-500 mt-1">
            Class {profile?.class_level || '—'} •{' '}
            {profile?.is_pro ? '👑 Pro Member' : 'Free Plan'}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            {
              label: 'Questions Asked',
              value: profile?.total_questions_asked || 0,
              icon: '💬',
              color: 'bg-blue-50 text-blue-700',
            },
            {
              label: 'Quizzes Taken',
              value: profile?.total_quizzes_taken || 0,
              icon: '⚡',
              color: 'bg-green-50 text-green-700',
            },
            {
              label: 'Your Class',
              value: `Class ${profile?.class_level || '—'}`,
              icon: '📚',
              color: 'bg-purple-50 text-purple-700',
            },
            {
              label: 'Plan',
              value: profile?.is_pro ? 'Pro 👑' : 'Free',
              icon: '💳',
              color: 'bg-orange-50 text-orange-700',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`${stat.color} rounded-xl p-5 border border-white`}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm opacity-70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          What do you want to do?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Ask AI — FREE */}
          <a
            href="/ask-ai"
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-200 transition cursor-pointer group"
          >
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-orange-600 transition">
              Ask AI
            </h3>
            <p className="text-gray-500 text-sm">
              Get instant answers to your BHSEC questions
            </p>
            <span className="inline-block mt-3 text-xs bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full">
              FREE
            </span>
          </a>

          {/* Competency Answers — PRO */}
          <div
            className={`rounded-xl p-6 shadow-sm border transition group ${
              profile?.is_pro
                ? 'bg-white border-gray-100 hover:shadow-md hover:border-orange-200 cursor-pointer'
                : 'bg-gray-50 border-gray-100 cursor-not-allowed opacity-70'
            }`}
          >
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">
              Competency Answers
            </h3>
            <p className="text-gray-500 text-sm">
              Deep competency-based explanations aligned to BHSEC
            </p>
            <span className="inline-block mt-3 text-xs bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full">
              {profile?.is_pro ? 'PRO 👑' : '🔒 Upgrade to PRO'}
            </span>
          </div>

          {/* Mock Exam — PRO */}
          <div
            className={`rounded-xl p-6 shadow-sm border transition group ${
              profile?.is_pro
                ? 'bg-white border-gray-100 hover:shadow-md hover:border-orange-200 cursor-pointer'
                : 'bg-gray-50 border-gray-100 cursor-not-allowed opacity-70'
            }`}
          >
            <div className="text-3xl mb-3">📝</div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">
              Mock Exam
            </h3>
            <p className="text-gray-500 text-sm">
              Practice with real BHSEC past paper questions
            </p>
            <span className="inline-block mt-3 text-xs bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full">
              {profile?.is_pro ? 'PRO 👑' : '🔒 Upgrade to PRO'}
            </span>
          </div>

          {/* Quiz — PRO */}
          <div
            className={`rounded-xl p-6 shadow-sm border transition group ${
              profile?.is_pro
                ? 'bg-white border-gray-100 hover:shadow-md hover:border-orange-200 cursor-pointer'
                : 'bg-gray-50 border-gray-100 cursor-not-allowed opacity-70'
            }`}
          >
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">
              Competency Quiz
            </h3>
            <p className="text-gray-500 text-sm">
              Test yourself with competency-based questions
            </p>
            <span className="inline-block mt-3 text-xs bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full">
              {profile?.is_pro ? 'PRO 👑' : '🔒 Upgrade to PRO'}
            </span>
          </div>

          {/* Progress — PRO */}
          <div
            className={`rounded-xl p-6 shadow-sm border transition group ${
              profile?.is_pro
                ? 'bg-white border-gray-100 hover:shadow-md hover:border-orange-200 cursor-pointer'
                : 'bg-gray-50 border-gray-100 cursor-not-allowed opacity-70'
            }`}
          >
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold text-lg text-gray-900 mb-1">
              My Progress
            </h3>
            <p className="text-gray-500 text-sm">
              Track your performance across all subjects
            </p>
            <span className="inline-block mt-3 text-xs bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full">
              {profile?.is_pro ? 'PRO 👑' : '🔒 Upgrade to PRO'}
            </span>
          </div>

          {/* Upgrade Card — only show if FREE */}
          {!profile?.is_pro && (
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 shadow-sm text-white cursor-pointer hover:shadow-lg transition">
              <div className="text-3xl mb-3">👑</div>
              <h3 className="font-bold text-lg mb-1">
                Upgrade to Pro
              </h3>
              <p className="text-orange-100 text-sm">
                Unlock competency-based learning, mock exams and more
              </p>
              <div className="mt-3 bg-white text-orange-600 font-bold text-sm px-4 py-2 rounded-lg inline-block">
                Nu. 99/month →
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}