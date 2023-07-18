import BannerComp from '@/app/components/BannerComp'
import CarouselComp from '@/app/components/CarouselComp'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className=' absolute top-32 text-center items-center justify-center z-10 w-full'>
        <BannerComp />
      </div>
      <div className='flex relative items-center justify-center h-screen w-full top-28 '>
        <CarouselComp />
      </div>
    </div>


  )
}

export default page