import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <img src="/logo.jpg" alt="" className="w-9" />
                            <span className="ml-3 text-xl">Braveheart Bakers</span>
                        </a>
                        <p className="mt-2 text-sm text-gray-500">BraveHeart Bakers is a Home Bakery in Najafgarh, New Delhi delivering Cakes on Advance Order.</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Quick Links</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href="/">
                                        <a className="text-gray-600 hover:text-gray-800">Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products">
                                        <a className="text-gray-600 hover:text-gray-800">Products</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a className="text-gray-600 hover:text-gray-800">About Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
                                    </Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <Link href="/">
                            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                                <img src="/logo.jpg" alt="" className="w-9" />
                                <span className="ml-3 text-xl">Braveheart Bakers</span>
                            </a>
                        </Link>
                        <span className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Braveheart Bakers
                        </span>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a href="#"><img src="/twitter.svg" alt="" className="w-6 mx-1" /></a>
                            <a href="#"><img src="/facebook.svg" alt="" className="w-6 mx-1" /></a>
                            <a href="#"><img src="/instagram.svg" alt="" className="w-6 mx-1" /></a>
                            <a href="#"><img src="/linkedin.svg" alt="" className="w-6 mx-1" /></a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer