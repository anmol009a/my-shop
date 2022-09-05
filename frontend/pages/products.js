import React from 'react'
import Link from 'next/link';


const products = (props,addToCart) => {
    return (
        <div>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 text-center">Products</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {props.products.data.map((item) => {
                            let productName = item.attributes.name;
                            // let {price} = item.attributes.price[0];
                            let productSlug = item.attributes.slug;
                            let imgSrc = `http://localhost:1337${item.attributes.img.data && item.attributes.img.data.attributes.formats.small.url}`;
                            let imgAlt = item.attributes.img.data && item.attributes.img.data.attributes.alternativeText;
                            return (
                                // post-item
                                <Link href={`/product/${productSlug}`}>
                                    <div key={productSlug} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer">
                                        <a className="block relative h-48 rounded overflow-hidden">
                                            <img alt={imgAlt} className="object-cover object-center w-full h-full block" src={imgSrc} />
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CAKE</h3>
                                            <span className="text-gray-900 title-font text-lg font-medium">{productName}</span>
                                            {/* <span className="mt-1">₹ {price}</span> */}

                                            <button className="finline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none rounded text-base md:mt-0 float-right ml-1">Buy</button>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getServerSideProps(context) {
    let headers = { Authorization: "Bearer d31d0b4cfcc2ebf0ce5d3bd727f037529211b637e0ac1ffa51e0c637e412017339af7ca65937c2dcfdc480fbc9b0eb3f5bb19b41f15f718ff31f12153295d49c28b5328e818ae3941154f47b263e1f0d1786e729a7796b784a038b12366407fe6c67355c99337d83c1cc1a746a638d8e37c62b2326b9729e78e479bef7547ac0" }
    let a = await fetch("http://localhost:1337/api/products?populate=*", { headers: headers })
    let products = await a.json()
    // console.log(products);
    return {
        props: { products }, // will be passed to the page component as props
    }
}

export default products