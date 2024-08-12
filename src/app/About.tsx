import React from "react";
import "animate.css"
export default function About() {
  return (
    <section
      id="about"
      className="pt-[32px] sm:pt-40 md:pt-32 pb-6 min-h-screen border-b"
    >
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <div className="gap-6 space-y-12 md:flex md:space-y-0">
          <div className="relative -z-[999] md:w-1/2 animate__animated animate__fadeInLeft">
              <p className="text-1xl text-slate-400 capitalize text-center md:text-left md:leading-loose mb-3">
                Tentang Kami
              </p>
              <h1 className="text-center text-4xl font-bold text-slate-900 sm:text-4xl lg:text-left lg:text-5xl md:leading-loose mb-4">
                Seklias Tentang Web Programming Unpas
              </h1>
            <p className="text-slate-400 text-center md:text-left mb-3 leading-loose text-[14px]">
              Channel khusus yang membahas mengenai teknologi internet dan
              pengembangan web, dikelola oleh Sandhika Galih (Pa Dhika), adalah
              tempat terbaik untuk mempelajari segala hal tentang pemrograman
              web. Dengan konten yang edukatif dan inspiratif, Pa Dhika
              membimbing Anda melalui berbagai tutorial dan proyek nyata, dari
              dasar hingga teknologi terkini, membuat proses belajar menjadi
              menarik dan menyenangkan. Mari bergabung dan kembangkan
              keterampilan Anda di dunia digital bersama kami!
            </p>
          </div>
          <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
            <div className="relative -z-[999] bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700 animate__animated animate__fadeInRight">
              <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                <div className="mx-auto pt-5 pb-5 flex items-center justify-center text-center rotate-2 ">
                  <img src="https://ik.imagekit.io/ez2pfjbvj/undraw_website_78wh.svg?updatedAt=1723088686885" alt="WPU" />
                  {/* <span className="border border-border rounded py-6 px-6 text-4xl sm:text-4xl lg:text-5xl font-bold shadow-md mx-3">Web Programming Unpas</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
