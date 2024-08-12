import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className='pt-[20px] sm:pt-40 md:pt-20 pb-6 min-h-[70px] border-b'>
        <div className='mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0'>
        <h2 className='text-center text-3xl font-bold lg:text-3xl sm:text-3xl lg:text-center'>Get In Touch</h2>
        <h3 className='text-center text-1xl font-semibold lg:text-1xl sm:text-1xl lg:text-center'>Terhubunglah dengan Kami</h3>
        <div className='pt-7 pb-5 flex flex-wrap'>
          <div className='w-full lg:w-1/2 px-3 mb-4 lg:mb-0'>
            <div className='mb-4'>
              <input className='w-full p-4 text-xs font-semibold leading-none bg-slate-100 rounded outline-none' type='text' placeholder='subject'/>
            </div>
            <div className='mb-4'>
              <input className='w-full p-4 text-xs font-semibold leading-none bg-slate-100 rounded outline-none' type='text' placeholder='Name'/>
            </div>
            <div className='mb-4'>
              <input className='w-full p-4 text-xs font-semibold leading-none bg-slate-100 rounded outline-none' type='email' placeholder='email@subject.com'/>
            </div>
          </div>
          <div className='w-full lg:w-1/2 px-3'>
            <textarea className='w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-slate-100 rounded outline-none' placeholder='Message ....'></textarea>
          </div>
        </div>
        <div className='pl-3'>
          <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">Submit</button>
        </div>
        </div>
    </section>
  )
}
