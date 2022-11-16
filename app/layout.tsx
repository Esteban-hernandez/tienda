import Link from 'next/link'
import React from 'react'
import {
  AdjustmentsVerticalIcon,
  Square3Stack3DIcon,
  CogIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/24/solid'
import './globals.css'
import DarkMode from '@/components/DarkMode/DarkMode'
import Search from '@/components/Search/Search'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" >
      <body className='bg-gray-100 dark:bg-slate-900'>
        <nav className="fixed top-0 w-full p-2 bg-white dark:bg-slate-900 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Square3Stack3DIcon className="w-10 fill-indigo-500" />
            <span className="relative w-full text-center text-black dark:text-blue-600 font-RedHatBold">
              Inicio
            </span>
            <DarkMode />
            <UserCircleIcon className="w-10 fill-slate-500 dark:fill-slate-300" />
          </div>
          <div className="flex justify-between">
            <Search />
            <AdjustmentsVerticalIcon className="w-10 fill-slate-500 dark:fill-slate-300"/>
          </div>
        </nav>
        <div className='mt-28 px-4 text-gray-900 dark:text-slate-300'>{children}</div>
        {/*Menu inferior */}
        <nav className="fixed flex justify-around items-center bottom-0 bg-white dark:bg-slate-800 w-full p-2">
          <Link href={'/'} title="Inicio">
            <HomeIcon className="w-8 fill-slate-500 dark:fill-slate-300" />
          </Link>
          <Link href={'/carrito'} title="Carrito">
            <ShoppingBagIcon className="w-8 fill-slate-500 dark:fill-slate-300" />
          </Link>
          <Link href={'/perfil'} title="Perfil">
            <UserIcon className="w-8 fill-slate-500 dark:fill-slate-300" />
          </Link>
          <Link href={'/lista-de-deseo'} title="Lista de deseo">
            <HeartIcon className="w-8 fill-slate-500 dark:fill-slate-300" />
          </Link>
          <Link href={'/ajuste'} title="Ajuste">
            <CogIcon className="w-8 fill-slate-500 dark:fill-slate-300" />
          </Link>
        </nav>
      </body>
    </html>
  )
}
