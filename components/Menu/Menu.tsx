import {
  CogIcon,
  HeartIcon,
  HomeIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Menu() {
  return (
    <nav className="fixed flex justify-around items-center bottom-0 bg-white dark:bg-slate-800 w-full p-2 z-10">
      <Link href={"/"} title="Inicio" className="flex items-center gap-2 text-3xl
      ">
        <HomeIcon className="w-8 fill-slate-500 dark:fill-slate-300" />
        <span className="hidden sm:block text-slate-500 dark:text-slate-300 " >Inicio</span>
      </Link>
      <Link href={"/carrito"} title="Carrito">
        <ShoppingBagIcon className="w-8 fill-slate-500 dark:fill-slate-300" />
      </Link>
      <Link href={"/perfil"} title="Perfil">
        <UserIcon className="w-8 fill-slate-500 dark:fill-slate-300" />
      </Link>
      <Link href={"/lista-de-deseo"} title="Lista de deseo">
        <HeartIcon className="w-8 fill-slate-500 dark:fill-slate-300" />
      </Link>
      <Link href={"/ajuste"} title="Ajuste">
        <CogIcon className="w-8 fill-slate-500 dark:fill-slate-300" />
      </Link>
    </nav>
  );
}
