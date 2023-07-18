import Image from 'next/image'
import React from 'react'

const LogoComp = () => {
  return (
    <>
      <Image className='fixed top-0 left-0 mt-11 ml-24'
        src='https://res.cloudinary.com/knoxknoxcloud/image/upload/v1689112386/Proyectos%20Nico/logo-txt-negro_eqgzm8.svg'
        alt='Logo'
        width={200}
        height={200}
      />
    </>
  )
}
export default LogoComp;