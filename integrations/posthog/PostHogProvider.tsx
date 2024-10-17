'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'
import { POSTHOG_ROUTE, POSTHOG_UI_HOST } from './config'

export function PHProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
      api_host: POSTHOG_ROUTE, // process.env.NEXT_PUBLIC_POSTHOG_HOST || '',
      ui_host: POSTHOG_UI_HOST,
      person_profiles: 'identified_only',
      capture_pageview: false, // Disable automatic pageview capture, as we capture manually
      capture_pageleave: true // Enable pageleave capture
    })
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}