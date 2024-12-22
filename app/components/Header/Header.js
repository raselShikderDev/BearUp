import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-blue-950/20 py-2 fixed top-0 left-0 z-50 w-full text-white'>
      <div className="container">
        <nav className='flex justify-between items-center'>
          {/* Logo Section */}
          <div className="logo">
            <Link className='text-4xl text-gray-100' href="#"><span>Bear</span><span className='text-gray-300 text-3xl'>UP</span></Link>
          </div>
          {/* Navbar Section */}
          <div className="navLinks">
            <ul className='flex justify-center gap-2 items-center'>
              <li className='hover:text-black hover:bg-yellow-50 py-1.5 px-3 active:bg-gray-200 rounded'>
                <Link className='' href="#">Home</Link>
              </li>
              <li className='hover:text-black hover:bg-yellow-50 py-1.5 px-3 active:bg-gray-200 rounded'>
                <Link href="#">About</Link>
              </li>
              <li className='hover:text-black hover:bg-yellow-50 py-1.5 px-3 active:bg-gray-200 rounded'>
                <Link href="#">Projects</Link>
              </li>
              <li className='hover:text-black hover:bg-yellow-50 py-1.5 px-3 active:bg-gray-200 rounded'>
                <Link href="#">Register</Link>
              </li>
              <li className='hover:text-black hover:bg-yellow-50 py-1.5 px-3 active:bg-gray-200 rounded'>
                <Link href="#">LogIn</Link>
              </li>
            </ul>
          </div>
        </nav>
     </div>
    </header>
  )
}

export default Header
