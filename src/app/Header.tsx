"use client"
import React from "react";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";

const words =` Belajar Programming Menyenangkan Hanya di`;

export default function Header() {
  return (
    <>
      <section
        id="header"
        className="pt-32 sm:pt-40 md:pt-32 pb-6 min-h-screen border-b"
      >
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="relative -z-[999]">
            <h1>
             <TextGenerateEffect words={words} className="text-4xl"/>
            </h1>
            <div className="mx-auto pt-5 pb-5 flex items-center justify-center text-center rotate-2 ">
              <span className="border border-border rounded py-6 px-6 text-4xl sm:text-4xl lg:text-5xl font-bold shadow-md">
                WPU
              </span>
            </div>
            <p className="text-slate-400 text-center mb-3">
              Selamat datang di Channel Web Programming Unpas, tempat di mana
              kreativitas bertemu teknologi! Bergabunglah dengan kami untuk
              menjelajahi dunia pemrograman web yang penuh inspirasi, dan jangan
              lupa titik koma—karena setiap detail sangat berarti dalam
              menciptakan karya yang luar biasa!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://www.youtube.com/@sandhikagalihWPU"
              className="inline-flex p-2 bg-slate-800 rounded-full shadow-sm hover:bg-slate-90 text-white cursor-pointer"
            >
              Kunjungi Channel WPU
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
