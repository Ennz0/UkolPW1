import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-[#1a1219] text-[#c59f61] py-4 text-center">
        <div className="container mx-auto">
            <p className="text-sm">
             &copy; {new Date().getFullYear()} Sneaker Gallery. All rights reserved.
            </p>
        </div>
    </footer>
    </>
  )
}

export default Footer