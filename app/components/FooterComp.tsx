import React from 'react'

const FooterComp = () => {
  return (
    <div className="footer fixed bottom-0 left-0 right-0 bg-white-400 py-4 text-center">
      <p className="text-black">© {new Date().getFullYear()} Creado por el Club de Desarrollo Experimental</p>
    </div>
  )
}

export default FooterComp