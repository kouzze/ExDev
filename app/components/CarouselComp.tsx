'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { carouselInfo } from '../utils/carousel';

const CarouselComp = () => {
  // flex reflex items-center text-center justify-center h-screen
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      loop
      modules={[Pagination, Navigation]}
    >
      <div>
        {carouselInfo.map((info, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col justify-center items-center text-rem2 bg-white p-4 rounded-3xl shadow-xl text-center'>
              <img src={info.image} />
              <h1 className='font-semibold text-custom-title'>{info.title}</h1>
              <p>{info.body}</p>
            </div>
          </SwiperSlide>
        ))}
      </div>

    </Swiper >

  )
}

export default CarouselComp