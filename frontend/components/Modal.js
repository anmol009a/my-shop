import React from 'react'

const Modal = (props) => {

    console.log(props);
    return (
        <>
            {props.products.data.map((item) => {
                let productId = item.id;
                let productName = item.attributes.name;
                // let {price} = item.attributes.price[0];
                let productSlug = item.attributes.slug;
                let imgSrc = `http://localhost:1337${item.attributes.img.data && item.attributes.img.data.attributes.formats.small.url}`;
                let imgAlt = item.attributes.img.data && item.attributes.img.data.attributes.alternativeText;
                return (
                    <div id={`modal-${productId}`} className='h-full w-full bg-slate-900/80 left-0 top-0 fixed z-10 hidden' onClick={() => closeModal()}>
                        <div className="h-full w-full flex justify-center items-center">
                            <div className="flex justify-center py-16 bg-white w-2/3 overflow-auto">
                                <div className='w-1/2 px-4'>
                                    <img id="modal-img" src={imgSrc} alt="" />
                                </div>
                                <div id="modal-details" className='w-1/2 px-4'>
                                    <h3 id="modal-heading">{productName}</h3>
                                    <h6>Choose One</h6>


                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem temporibus beatae dolores esse, praesentium itaque odit, dicta porro necessitatibus ducimus, molestiae aperiam! Corporis assumenda ut quod sequi fuga harum atque?</p>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}


        </>
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

export default Modal