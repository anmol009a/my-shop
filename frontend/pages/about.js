import React from 'react'
import Head from 'next/head'


const about = () => {
    return (
        <div>
            <Head>
                <title>Braveheart Bakers - About Us</title>
            </Head>

            {/* <!-- component --> */}
            <div class="py-16 bg-white">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div class="md:5/12 lg:w-5/12">
                            <img src="/logo.jpg" alt="image" loading="lazy" width="" height=""/>
                        </div>
                        <div class="md:7/12 lg:w-6/12">
                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">About Us</h2>
                            <p class="mt-6 text-gray-600">BraveHeart Bakers is a Home Bakery in Najafgarh, New Delhi delivering Cakes on Advance Order.</p>
                            {/* <p class="mt-4 text-gray-600"> Run by a Five Star Hotel Bakery Chef</p> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default about