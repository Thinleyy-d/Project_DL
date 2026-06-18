// app/api/test/route.ts
// This is a test to check if Supabase is connected
// We will DELETE this file after testing

import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Try to fetch from curriculum table
    const { data, error } = await supabase
      .from('curriculum')
      .select('*')
      .limit(1)

    // If error from Supabase
    if (error) {
      return NextResponse.json({
        status: 'error',
        message: error.message
      }, { status: 500 })
    }

    // Success!
    return NextResponse.json({
      status: 'success',
      message: '✅ Supabase is connected to DrukLearn!',
      tables_working: true,
      data: data
    })

  } catch (err) {
    return NextResponse.json({
      status: 'error',
      message: 'Connection failed',
      error: String(err)
    }, { status: 500 })
  }
}