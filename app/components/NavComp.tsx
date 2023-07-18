import Link from 'next/link'
import React from 'react'
import { links } from '../utils/links'

const NavComp = () => {
  return (
    <div>
      <nav className='navbar fixed top-0 right-0 mt-11 mr-24 text-2xl font-semibold'>
        <ul className="flex space-x-4 ">
          {links.map(({ label, route }) => (
            <li key={route} className='fas fa-home text-gray-600 hover:border-purple-500 hover:text-black hover:border-b-4'>
              <Link href={route} >{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default NavComp