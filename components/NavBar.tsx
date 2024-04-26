"use client";
import Image from "next/image";
import { Button } from "./ui/button";

function NavBar() {
  return (
    <nav className="bg-gray-200 p-6 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/plane.png"
          alt="Logo"
          className="h-8 mr-2"
          height={40}
          width={30}
        />
        <span className="text-4xl font-semibold text-green-500">Safe-Air</span>
      </div>

      <div className="flex items-center gap-8 text-2xl">
        <a
          href="#"
          className=" hover:text-green-800 text-green-600 transition-all"
        >
          Home
        </a>
        <a
          href="#"
          className=" hover:text-green-800 text-green-600 transition-all"
        >
          About
        </a>
        <a
          href="#"
          className=" hover:text-green-800 text-green-600 transition-all"
        >
          Services
        </a>
        <a
          href="#"
          className=" hover:text-green-800 text-green-600 transition-all"
        >
          Contact
        </a>

        <a
          href="#"
          className="hover:text-slate-50 text-green-600 transition-all rounded-full"
        >
          Demo
        </a>
        {/* <Button variant="outline" className="w-auto">
          Demo
        </Button> */}
      </div>
    </nav>
  );
}

export default NavBar;
