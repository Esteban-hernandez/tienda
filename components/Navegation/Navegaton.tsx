import { AdjustmentsVerticalIcon, Square3Stack3DIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import DarkMode from "@/components/DarkMode/DarkMode";
import Search from "@/components/Search/Search";
import Menu from "@/components/Menu/Menu";

export default function Navegation() {
  return (
    <>
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
        <AdjustmentsVerticalIcon className="w-10 fill-slate-500 dark:fill-slate-300" />
      </div>
    </nav>
    <Menu />
    </>
  );
}
