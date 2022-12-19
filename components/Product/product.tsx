import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Product() {
  return (
    <div className="bg-white dark:bg-gray-800 relative rounded-lg overflow-hidden shadow-md shadow-black/50 dark:shadow-white/20">
      <div className="absolute top-0 left-0 m-1 bg-blue-500 p-1 rounded-tl-2xl rounded-br-2xl text-white font-bold italic ">
        50%
      </div>
      <HeartIcon className="absolute top-0 right-0 m-1 w-8 text-red-500" />
      <Image
        className="w-full"
        alt="logo"
        src="https://picsum.photos/200"
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
