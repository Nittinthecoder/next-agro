'use client'
import React from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import { images } from '../lib/images'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

const Banner = () => {
    return (
        <section className='py-1'>
            <div className='container'>
                <Swiper
                    navigation
                    autoplay
                    pagination={{ type: 'fraction' }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className='h-[880px] w-full rounded-lg '
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={image}>
                            <div className='flex h-full w-full items-center justify-center'>
                                <Image 
                                    src={image.src}
                                    alt={image.alt}
                                    className='block h-full w-full object-cover'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Banner