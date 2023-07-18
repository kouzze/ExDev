'use client';

import 'swiper/css';
import 'swiper/css/navigation';


import { members, members2 } from '@/app/utils/integrantes';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const page = () => {

  return (
    <div className="mt-36">
      <div className="mt-20">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation]}
          className="select-none h-96"
        >
          {members.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-rem2 bg-white p-4 rounded-3xl shadow-xl text-center ">
                <img src={member.imagen} className="max-w-full h-auto" style={{ maxHeight: '200px' }} />
                <h1 className='font-semibold text-custom-title'>{member.nombre}</h1>
                <h1>{member.rol}</h1>
                <h1>{member.telefono}</h1>
                <h1>{member.carrera}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation]}
          className="select-none h-96"
        >
          {members2.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-rem2 bg-white p-4 rounded-3xl shadow-xl text-center ">
                <img src={member.imagen} className="max-w-full h-auto" style={{ maxHeight: '200px' }} />
                <h1 className='font-semibold text-custom-title'>{member.nombre}</h1>
                <h1>{member.rol}</h1>
                <h1>{member.telefono}</h1>
                <h1>{member.carrera}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

  )
}

export default page