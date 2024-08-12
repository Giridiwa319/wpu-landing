import React from 'react'
import { ThumbsUp, Youtube  } from 'lucide-react';

export default function Testimonial() {
  return (
    <section id='testimonial' className='pt-32 sm:pt-40 md:pt-32 pb-6 min-h-screen border-b'>
        <div className='mx-auto px-4 sm:px-12 xl:max-w-6xl xl-px-0'>
            <h2 className='text-center text-2xl font-normal text-slate-500 sm:text-2xl lg:text-2xl lg:text-center'>Testimonial</h2>
            <h3 className='text-center text-3xl font-bold lg:text-3xl sm:text-3xl lg:text-center'>Beberapa Komentar Dari Teman-Teman Youtube</h3>
            <div className='flex flex-wrap relative -z-[999]'>
                <div className='w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeInLeft animate animated '>
                    <div className='px-6 py-10 bg-white shadow rounded border-gray-100 hover:border-gray-200'>
                        <div className='flex items-center mb-4'>
                            <img src="https://yt3.ggpht.com/ytc/AIdro_ltas_H9nknnbeOlnfCSulozvQgfb7Gk1qJDtVShNiKJw=s176-c-k-c0x00ffffff-no-rj" className='h-16 w-16 rounded-full object-cover' alt=''/>
                            <div className='pl-4'>
                                <strong className='mt-6 mb-2 text-md'>Fajar Adi putra</strong>
                                <p className="text-gray-500 text-xs mt-3">@fajaradiputra8745</p>
                            </div>
                        </div>
                        <p className='leading-loose text-gray-400 mb-5 text-[14px]'>
                             Mksih pak sandhika atas ilmunya, mulai dari html sampe nodejs aku ikutin, sampe sekarang alhamdullilah bisa nyari duit sendiri dari ilmu yg dikasih pak dika semoga jadi amal jariyah pak
                        </p>
                        <div className='flex space-x-2 items-center gap-3 text-[14px]'>
                            <ThumbsUp className='w-4 h-4'/>23 Orang 
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 py-5 md:px-5 animate__animated animate__fadeInRight'>
                    <div className='px-6 py-10 bg-white shadow rounded border-gray-100 hover:border-gray-200'>
                        <div className='flex items-center mb-4'>
                            <img src="https://yt3.ggpht.com/ytc/AIdro_nhkFhwTpTADDDLQVwY2AI26aoqBXK6MPnB3vKpETOJt1gxMYLW7pekykIYotIXNfKauA=s88-c-k-c0x00ffffff-no-rj" className='h-16 w-16 rounded-full object-cover' alt=''/>
                            <div className='pl-4'>
                                <strong className='mt-6 mb-2 text-md'>Yunus Rochman</strong>
                                <p className="text-gray-500 text-xs mt-3">@yunusrochman4551</p>
                            </div>
                        </div>
                        <p className='leading-loose text-gray-400 mb-5 text-[14px]'>
                            terimakasih pak dika atas ilmunya saya udah satu tahun ngikutin channel pak dika tapi fokus di php dan codeigniter4 alhamdulillah udah bisa bikin web sederhana dan ini mau belajar css supaya 
                            lebih menarik web saya terimakasih pak dhika
                        </p>
                        <div className='flex space-x-2 items-center gap-3'>
                            <ThumbsUp className='w-4 h-4'/> Belum ada Like
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 py-5 md:px-5 animate__animated animate__fadeInUp'>
                    <div className='px-6 py-10 bg-white shadow rounded border-gray-100 hover:border-gray-200'>
                        <div className='flex items-center mb-4'>
                            <img src="https://yt3.ggpht.com/ytc/AIdro_m5a--2A0kSHPJTmfOyUzuJsCLEPkIBtYWgE0oYhjOZ492NqXOSvIXaZ7Lf_tvLkIVHtA=s88-c-k-c0x00ffffff-no-rj" className='h-16 w-16 rounded-full object-cover' alt=''/>
                            <div className='pl-4'>
                                <strong className='mt-6 mb-2 text-md'>mahasiswa go</strong>
                                <p className="text-gray-500 text-xs mt-3">@mahasiswago</p>
                            </div>
                        </div>
                        <p className='leading-loose text-gray-400 mb-5 text-[14px]'>
                        terimakasih telah memberi ilmu seputar IT pak, sangat dibutuhkan banyak orang seperti anda di Indonesia.
                        semoga sehat selalu pak

                        </p>
                        <div className='flex space-x-2 items-center gap-3'>
                            <ThumbsUp className='w-4 h-4'/> Belum ada Like
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
