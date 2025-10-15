import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather';

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                    <Icon.Droplet className="pool-icon w-6 h-6" />
                    <span className="ml-2 text-xl font-light text-sky-500">Villas Pattaya</span>
                </div>
                <div className="hidden md:flex space-x-8">
                    <Link href={'/'} className="text-gray-700 hover:text-sky-500 transition">Home</Link>
                    <Link href={'/villas'} className="text-gray-700 hover:text-sky-500 transition">Villas</Link>
                    <Link href={'/signin'} className="text-gray-700 hover:text-sky-500 transition">Signin</Link>
                    <Link href={'/signup'} className="text-gray-700 hover:text-sky-500 transition">Signup</Link>
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