// eslint-disable-next-line no-unused-vars
import React from 'react'

function Navbar() {
  return (
    <div>   <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo */}
      <a href="/" className="text-white text-2xl font-bold">
        MyWebsite
      </a>

      {/* Navigation Links */}
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-white hover:text-blue-300">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-white hover:text-blue-300">
            About
          </a>
        </li>
        <li>
          <a href="/services" className="text-white hover:text-blue-300">
            Services
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-blue-300">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav></div>
  )
}

export default Navbar