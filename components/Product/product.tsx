import { HeartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Product() {
  return (
    <div className="bg-white dark:bg-gray-800 relative rounded-lg overflow-hidden">
      <div className="absolute top-0 left-0 m-1 bg-blue-500 p-1 rounded-tl-2xl rounded-br-2xl text-white font-bold italic ">
        50%
      </div>
      <HeartIcon className="absolute top-0 right-0 m-1 w-4 fill-red-500" />
      <Image
        className="bg-red-700 w-full"
        alt="logo"
        src="/table.webp"
        quality={100}
        width={500}
        height={500}
      />
      <div className="flex justify-between p-1 font-bold italic">
        <h1>
            Table
        </h1>
        <span>₡ 300.000</span>
      </div>
    </div>
  );
}
