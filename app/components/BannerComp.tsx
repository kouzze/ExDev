import Image from 'next/image'
import React from 'react'

const BannerComp = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-center '>
        <Image
          src="https://res.cloudinary.com/knoxknoxcloud/image/upload/v1689112386/Proyectos%20Nico/logo-txt-negro_eqgzm8.svg"
          alt="Imagen del banner" width={800} height={500}
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