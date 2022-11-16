'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useState } from 'react'

export default function Search() {
  const [search, setSearch] = useState('')

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
  }

  return (
    <div className="flex bg-black/5 dark:bg-slate-800/50 p-1 rounded h-10 w-full mr-4 shadow-md">
      <input
        onChange={handleSearch}
        placeholder="¿Que buscaremos hoy?"
        value={search}
        type="seach"
        className="bg-transparent w-full caret-current outline-none"
      />
      
      <Link href="/search/[...search]" as={`search/${search}`}>
        <MagnifyingGlassIcon className="w-8 fill-slate-500" />
      </Link>
    </div>
  )
}
