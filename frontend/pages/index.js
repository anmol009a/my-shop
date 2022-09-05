import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home(props) {
  return (
    <div className="body">
      <Head>
        <title>Braveheart Bakers</title>
      </Head>
      
      
      {/* <Script src="/js/myscript.js" strategy="lazyOnload"></Script> */}

      {/*  */}
      <div className="lg:w-full mx-auto w-full">
        <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
          <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" src="/show.jpg" />
          <div className="text-center relative z-10 w-full bg-opacity-50 bg-gray-900">
            <h2 className="text-4xl text-amber-400 font-medium title-font mb-2">Braveheart Bakers</h2>
            <p className="leading-relaxed text-white">BraveHeart Bakers is a Home Bakery in Najafgarh, New Delhi delivering Cakes on Advance Order.</p>
            <Link href="/about"><a className="mt-3 text-amber-400 inline-flex items-center">Learn More</a></Link>
          </div>
        </div>
      </div>

      {/* Section: Flavours */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Menu</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"><b>Note:</b> Images are indicative only actual cake design may vary depending on local availability.</p>
          </div>

          {/* loop-content */}
          <div className="flex flex-wrap -m-4">
            {/*  */}
            {props.products.data.map((item) => {
              let productId = item.id;
              let productName = item.attributes.name;
              let productPrice = item.attributes.price;
              let productCategory = item.attributes.category.data && item.attributes.category.data.attributes.name;
              let productSlug = item.attributes.slug;
              let productImgSrc = `http://localhost:1337${item.attributes.img.data && item.attributes.img.data.attributes.formats.small.url}`;
              let productImgAlt = item.attributes.img.data && item.attributes.img.data.attributes.alternativeText;
              return (
                // post-item
                <div id={productId} key={productId} className="xl:w-1/4 md:w-1/2 p-4 post-item" onclick="displayModal(this)" >
                  {/* // post-item-details */}
                  <div className="bg-gray-100 p-6 rounded-lg">

                    {/* // post-item-img */}
                    <img className="h-48 rounded w-full object-cover object-center mb-6" src={productImgSrc} alt="content" />


                    {/* // post-item-category */}
                    {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{productCategory}</h3> */}


                    {/* // post-item-title */}
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{productName}</h2>

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

                  </div>
                </div>
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

