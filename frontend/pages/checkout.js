import React, { useEffect, useState } from 'react'
import Script from 'next/Script'


const checkout = ({ cart }) => {

  const [subTotal, setSubTotal] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", address: "", phone: "" })

  useEffect(() => {
    let myTotal = 0;
    for (let index = 0; index < cart.length; index++) {
      myTotal = myTotal + cart[index][2];

    }
    setSubTotal(myTotal);
  }, [cart])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    // console.log({ ...form, [e.target.name]: e.target.value })
  }


  return (
    <div>
      <Script type="application/javascript" src={`https://securegw.paytm.in/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_MID=}.js`} onload="onScriptLoad();" crossorigin="anonymous"></Script>
      <Script>
        function onScriptLoad(){
var config = {
          "root": "",
        "flow": "DEFAULT",
        "data": {
          "orderId": "", /* update order id */
        "token": "", /* update token value */
        "tokenType": "TXN_TOKEN",
        "amount": "" /* update amount */
},
        "handler": {
          "notifyMerchant": function(eventName,data){
          console.log("notifyMerchant handler function called");
console.log("eventName => ",eventName);
console.log("data => ",data);
}
}
};
        if(window.Paytm && window.Paytm.CheckoutJS){
          window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
            // initialze configuration using init method
            window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
              // after successfully updating configuration, invoke JS Checkout
              window.Paytm.CheckoutJS.invoke();
            }).catch(function onError(error) {
              console.log("error => ", error);
            });
          });
}
}
      </Script>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Checkout</h1>
            <h2 className='text-2xl text-black'>Cart</h2>
            <div>{cart.length ? `Your cart details are as follows:` : `Your cart is empty!`}
              <ul className=' ml-8 list-decimal'>
                {cart.map((item) => {
                  return <li key={Math.random()} className="pl-2">{item[0]}: ₹ {item[2]}</li>
                })}
              </ul>
              <p className='mt-2 font-medium'>Subtotal: ₹ {subTotal}</p>
            </div>

          </div>
          <div className="">
            <div className="flex flex-wrap -m-2">
              {/* name */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input onChange={handleChange} value={form.name} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              {/* email */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input onChange={handleChange} value={form.email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              {/* phone */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone No.</label>
                  <input onChange={handleChange} value={form.phone} type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              {/* address */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                  <textarea onChange={handleChange} value={form.address} id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              {/* submit-btn */}
              <div className="p-2 w-full">
                <button type="submit" className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default checkout