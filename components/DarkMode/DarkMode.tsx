'use client'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export default function DarkMode() {
  const [DarkMode, setDarkMode] = useState(false)

  const EnableDarkMode = () => {
    document.documentElement.classList.add('dark')
    window.localStorage.setItem('theme', 'dark')
    setDarkMode(true)
  }

  const DisableDarkMode = () => {
    document.documentElement.classList.remove('dark')
    window.localStorage.setItem('theme', 'light')
    setDarkMode(false)
  }

  useEffect(() => {
    const theme = window.localStorage.getItem('theme') === 'dark' ? true : false
    setDarkMode(theme)
    theme ? EnableDarkMode() : DisableDarkMode()
  })

  return (
    <>
      {DarkMode ? (
        <MoonIcon
        onClick={DisableDarkMode}
        className="w-8 mr-2 fill-slate-500"
        aria-label="Boton modo claro"
        />
        ) : (
        <SunIcon
          onClick={EnableDarkMode}
          className="w-8 text-yellow-300 mr-2"
          aria-label="Boton modo oscuro"
        />
      )}
    </>
  )
}
