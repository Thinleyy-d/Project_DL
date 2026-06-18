// app/(auth)/signup/page.tsx
// Student Registration Page — FIXED VERSION

'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase-client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignupPage() {
  const router = useRouter()

  // Form state
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [classLevel, setClassLevel] = useState('')
  const [schoolName, setSchoolName] = useState('')

  // UI state
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Basic validation
    if (!fullName || !email || !password || !classLevel) {
      setError('Please fill in all required fields')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      setLoading(false)
      return
    }

    try {
      // Create a fresh supabase client inside the function
      const supabase = createClient()

      // Step 1 — Create account
      const { data, error: signupError } = await supabase.auth.signUp({
        email: email.trim(),
        password: password,
        options: {
          data: {
            full_name: fullName.trim(),
          },
        },
      })

      // Handle signup errors
      if (signupError) {
        console.error('Signup error:', signupError)

        // Show friendly error messages
        if (signupError.message.includes('already registered')) {
          setError('This email is already registered. Please log in instead.')
        } else {
          setError(signupError.message)
        }
        setLoading(false)
        return
      }

      // Check if user was actually created
      if (!data.user) {
        setError('Account creation failed. Please try again.')
        setLoading(false)
        return
      }

      console.log('User created:', data.user.id)

      // Step 2 — Update profile with extra info
      // Wait a moment for the trigger to create the profile first
      await new Promise(resolve => setTimeout(resolve, 1000))

      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          full_name: fullName.trim(),
          class_level: classLevel,
          school_name: schoolName.trim(),
        })
        .eq('id', data.user.id)

      if (profileError) {
        console.error('Profile update error:', profileError)
        // Not critical — continue anyway
      }

      // Step 3 — Sign in immediately after signup
      const { error: loginError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      })

      if (loginError) {
        console.error('Auto login error:', loginError)
        // Signup worked but auto-login failed
        // Send them to login page with success message
        router.push('/login?message=Account created! Please log in.')
        return
      }

      // Step 4 — Go to dashboard
      router.push('/dashboard')
      router.refresh()

    } catch (err) {
      console.error('Unexpected error:', err)
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="text-3xl">🇧🇹</span>
            <span className="text-2xl font-bold text-orange-600">DrukLearn</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-4">
            Create your account
          </h1>
          <p className="text-gray-500 mt-1">
            Start learning smarter today — it is free
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 text-sm">
              ❌ {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Tenzin Wangchuk"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition text-gray-900"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition text-gray-900"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition text-gray-900"
                required
              />
            </div>

            {/* Class Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Your Class <span className="text-red-500">*</span>
              </label>
              <select
                value={classLevel}
                onChange={(e) => setClassLevel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition text-gray-900 bg-white"
                required
              >
                <option value="">Select your class</option>
                <option value="6">Class 6</option>
                <option value="8">Class 8</option>
                <option value="10">Class 10</option>
                <option value="12">Class 12</option>
              </select>
            </div>

            {/* School Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                School Name{' '}
                <span className="text-gray-400 text-xs">(optional)</span>
              </label>
              <input
                type="text"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                placeholder="e.g. Thimphu Higher Secondary School"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition text-gray-900"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? '⏳ Creating account...' : 'Create Free Account →'}
            </button>

          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-orange-600 font-medium hover:underline"
            >
              Log in here
            </Link>
          </p>

        </div>

        {/* Terms */}
        <p className="text-center text-xs text-gray-400 mt-4">
          By signing up you agree to our Terms of Service
        </p>

      </div>
    </main>
  )
}