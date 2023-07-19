'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { carouselInfo } from '../utils/carousel';

const CarouselComp = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      modules={[Pagination, Navigation]}
    >
      <div>
        {carouselInfo.map((info, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col justify-center items-center text-rem2 bg-white p-4 rounded-3xl shadow-xl text-center'>
              <img style={{ width: '100%', height: '10rem', objectFit: 'cover' }} src={info.image} />
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