// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Navbar/Navbar'
function Home() {
  return (
    <div>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <header>
          {/* Navbar can go here if you decide to add it */}
          {/* <nav className="bg-blue-500 p-4">Navbar content</nav> */}
        </header>

        <main className="mt-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to the Reporting Website</h1>
          <p className="text-gray-600 mt-4">Your reporting website content goes here.</p>
        </main>
      </div>

      {/* Footer can go here if you decide to add it */}
      {/* <footer className="bg-blue-500 p-4 text-center text-white">Footer content</footer> */}
    </div>
  
    </div>
  )
}

export default Home
