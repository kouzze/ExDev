import Image from 'next/image'
import React from 'react'

const BannerComp = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-center '>
        <img
          src="https://res.cloudinary.com/dsjsqkalp/image/upload/v1689730675/Exdev/Group_46_lqfoaq.svg"
          alt="Imagen del banner" style={{ width: '100%', height: '25rem', objectFit: 'cover'}} 
        />
      </div>
      {/* <div >
        <h2 className="text-lg font-semibold">¡Descuento especial!</h2>
        <p className="text-sm">Aprovecha nuestro descuento del 20% en todos los productos.</p>
      </div> */}
    </div>
  )
}

export default BannerComp