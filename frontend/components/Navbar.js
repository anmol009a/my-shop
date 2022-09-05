import React from 'react'
import Link from 'next/link';


const Navbar = ({cart}) => {
    return (
        <div>
            <div className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="/logo.jpg" alt="" className="w-9" />
                        <span className="ml-3 text-xl">Braveheart Bakers</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/"><a className="mr-5 hover:text-gray-900">Home</a></Link>
                        {/* <a href="/Order" className="mr-5 hover:text-gray-900">Order</a> */}
                        <Link href="/products"><a className="mr-5 hover:text-gray-900">Products</a></Link>
                        <Link href="/about"><a className="mr-5 hover:text-gray-900">About</a></Link>
                        <Link href="/contact"><a className="mr-5 hover:text-gray-900">Contact</a></Link>
                        <Link href="/checkout"><a className="mr-5 hover:text-gray-900">Cart[{cart.length}]</a></Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar