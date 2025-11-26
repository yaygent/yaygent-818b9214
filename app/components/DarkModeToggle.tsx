'use client'

import { useTheme } from './ThemeProvider'

export function DarkModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      cycleTheme()
    }
  }

  return (
    <button
      onClick={cycleTheme}
      onKeyDown={handleKeyDown}
      className="fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200 shadow-sm transition-all hover:bg-white hover:shadow-md dark:bg-zinc-900/80 dark:border-zinc-800 dark:hover:bg-zinc-900"
      aria-label={`Switch theme. Current: ${theme === 'system' ? 'system' : theme}. Click to cycle through light, dark, and system.`}
      title={`Theme: ${theme === 'system' ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}`}
    >
      {resolvedTheme === 'dark' ? (
        <MoonIcon className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
      ) : (
        <SunIcon className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
      )}
    </button>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}
