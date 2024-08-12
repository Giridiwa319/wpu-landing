import React from 'react'
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='pt-[20px] sm:pt-40 md:pt-20 pb-6 min-h-[70px] border-b'>
        <div className='mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0'>
        <div className='pb-5 flex flex-wrap'>
          <div className='w-full lg:w-1/2  px-4 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left leading-loose'>
              <a href="/" className='text-3xl font-display lg:text-3xl sm:text-3xl md:text-3xl lg:text-left'>Web Programming Unpas</a>
              <h3>Sebuah channel inspiratif yang membantu programmer dalam belajar bahasa pemrogramman dengan cara yang asik dan menyenangkan</h3>
              <div className='pt-3 pb-2'>
                <input type='text' className='rounded bg-slate-100 py-2 px-3 outline-none placeholder:text-dark w-full' placeholder='your email....'/>
              </div>
              <button className='rounded bg-blue-400 outline-none shadow-sm inline-flex px-3 text-white hover:bg-blue-500 hover:text-blue-200'>Submit</button>
          </div>
          <div className='w-full lg:w-1/2 px-4 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left leading-loose r'>
            <h2 className='mt-3 text-2xl md:text-2xl font-semibold lg:text-center text-center'>Link Terkait :</h2>
            <div className='grid grid-cols-3 md:grid-cols-4 mx-auto mt-3 '>
              <a href="https://www.instagram.com/sandhikagalih">IG Pak Dhika</a>
              <a href="https://www.instagram.com/wpustore.id">IG WPU Store</a>
              <a href="https://discord.gg/wpu">Discord WPU</a>
              <a href="https://belajarlaravel.id/">Belajar Laravel</a>
              <a href="https://www.belajarmern.id/">Belajar MERN</a>
            </div>
          </div>
          <div className='flex items-center justify-center border-t-2 w-full mt-3'>
            <p className='mt-4 flex items-center'>&copy; 2024 - Web Programming Unpas - All Right Reseved.</p>
          </div>
        </div>
        </div>
    </footer>
  )
}
