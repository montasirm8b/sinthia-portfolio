import React from 'react'
import { mulishBold, mulishSemibold } from '../fonts'
import Link from 'next/link'
import Highlight from './Highlight'

const Header = () => {
  return (
    <header className="px-16 py-8 bg-amber-50">
        <nav className="flex justify-between items-center">
        <div className={`text-2xl text-black ${mulishBold.className}`}>
            Sinthia.
        </div>
        <div className="flex space-x-6">
            <Link href="#works" className={`relative text-lg ${mulishSemibold.className}`}>
              <Highlight>Works</Highlight>
            </Link>
            <Link href="#skills" className={`relative text-lg ${mulishSemibold.className}`}>
              <Highlight>Skills</Highlight>
            </Link>
            <Link href="#contact" className={`relative text-lg ${mulishSemibold.className}`}>
              <Highlight>Contact</Highlight>
            </Link>
        </div>
        </nav>
    </header>
  )
}

export default Header