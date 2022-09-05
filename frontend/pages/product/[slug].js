import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

const Slug = ({ product, addToCart }) => {
    const router = useRouter();
    const { slug } = router.query;
    // console.log("________________");
    // console.log(product);
    let productId = product.id;
    let productName = product.attributes.name;
    let productPrice = product.attributes.price;
    let productSlug = product.attributes.slug;
    let productImgSrc = `http://localhost:1337${product.attributes.img.data && product.attributes.img.data.attributes.formats.small.url}`;
    let imgAlt = product.attributes.img.data && product.attributes.img.data.attributes.alternativeText;

    return (
        <div>
            <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    {/* <Link href="/products"><button className='fixed top-50 right-[4vw] px-2 font-medium rounded text-white bg-red-500 items-center justify-center'>X</button></Link> */}
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={productImgSrc} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Braveheart Bakers</h2>
                            <h1 className="text-white text-3xl title-font font-medium mb-1">{productName}</h1>

                            <p className="leading-relaxed">Description</p>
                            {/* // post-item-price */}
                            <div className="flex flex-col">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="overflow-hidden">
                                            <table className="min-w-full">
                                                <thead className="bg-gray-50 border-b">
                                                    <tr>
                                                        <th scope="col" className="text-sm font-medium  text-gray-900 px-6 py-4 text-left">
                                                            Quantiy
                                                        </th>
                                                        <th scope="col" className="text-sm font-medium  text-gray-900 px-6 py-4 text-left">
                                                            Price
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {productPrice.map((value) => {
                                                        let { id, quantity, unit, price } = value;
                                                        return (
                                                            <tr key={id} className="bg-gray-100 border-b">
                                                                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                                                    {quantity}{unit}
                                                                </td>
                                                                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                                                                    ₹ {price}
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <button onClick={() => { addToCart(productName, 1, 500) }} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
                                <button onClick={() => { router.push('/checkout') }} className="flex ml-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Checkout</button>
                                {/* <button onClick={() => {
                                    addToCart(productName, 1, 500);
                                    router.push('/checkout')
                                }} className="flex ml-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getServerSideProps(context) {
    let headers = { Authorization: "Bearer d31d0b4cfcc2ebf0ce5d3bd727f037529211b637e0ac1ffa51e0c637e412017339af7ca65937c2dcfdc480fbc9b0eb3f5bb19b41f15f718ff31f12153295d49c28b5328e818ae3941154f47b263e1f0d1786e729a7796b784a038b12366407fe6c67355c99337d83c1cc1a746a638d8e37c62b2326b9729e78e479bef7547ac0" }
    let a = await fetch("http://localhost:1337/api/products/?populate=*&filters[slug]=" + context.query.slug, { headers: headers })
    let product = await a.json()
    // console.log(product);
    return {
        props: { product: product.data[0] }, // will be passed to the page component as props
    }
}

export default Slug