import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import DropDownListMenu from './DropDownListMenu'


const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                    <Logo />
                    <span className="ml-2 text-xl font-light text-sky-500">พูลวิลล่า</span>
                </div>
                <div className="hidden md:flex space-x-8">
                    <button><Link href={'/'} className="text-gray-700 hover:text-sky-500 transition">หน้าแรก</Link></button>
                    <button><Link href={'/villas'} className="text-gray-700 hover:text-sky-500 transition">บ้านทั้งหมด</Link></button>
                    <DropDownListMenu />
                </div>
                <button className="md:hidden">
                    <i data-feather="menu" className="w-6 h-6 text-gray-700"></i>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar