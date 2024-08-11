import React from "react";

import Footer from "../components/Footer";
import { Trash2 } from "lucide-react";
import Image from "next/image";
// Assuming your array is in this file

function CheckoutPage() {
  const products = [
    {
      id: 0,
      name: "Blade of Olympus God of War",
      status: "In Stock",
      shipsFrom: "Bagani Blades",
      shipsTo: "Greece",
      returns: "30-day refund/replacement",
      price: "₱5000",
      quantity: 1,
      imageSrc: "/assets/ProductList/item1.png",
    },
    {
      id: 1,
      name: 'Iron Man Suit Full Body Armor Iron Man',
      status: "In Stock",
      shipsFrom: "Bagani Blades",
      shipsTo: "USA",
      returns: "30-day refund/replacement",
      price: "₱50000",
      quantity: 2,
      imageSrc: '/assets/ProductList/item2.png',
    },
    {
      id: 2,
      name: 'The Dominator Psycho Pass',
      status: "In Stock",
      shipsFrom: "Bagani Blades",
      shipsTo: "China",
      returns: "30-day refund/replacement",
      price: "₱9000",
      quantity: 2,
      imageSrc: '/assets/ProductList/item3.png',
    },
    {
      id: 3,
      name: 'Chainsaw Chainsaw Man',
      status: "In Stock",
      shipsFrom: "Bagani Blades",
      shipsTo: "Japan",
      returns: "30-day refund/replacement",
      price: "₱5000",
      quantity: 2,
      imageSrc: '/assets/ProductList/item4.png',
    },
    // Add more products as needed
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full h-full md:p-8 p-2 gap-4 bg-[#f9fafc]">
        <div className="lg:w-3/4 md:h-[1000px] bg-white rounded-md md:p-8 p-4 shadow-lg md:overflow-auto">
          <h1 className="text-4xl font-medium mb-4">Your Shopping Cart</h1>

          <div className="hidden md:flex flex-row justify-between mb-2">
            <p>Item Image</p>
            <p>Item Details</p>
            <p>Item Price</p>
          </div>

          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row border-t-2 border-black pt-4 mb-4 gap-6"
            >
              <Image
                src={product.imageSrc}
                width={700}
                height={700}
                alt={product.name}
                priority={true}
                className="h-[300px] object-cover"
              />

              <div className="flex flex-col py-6 w-full">
                <h1 className="text-5xl">{product.name}</h1>
                <p className="text-green-500">{product.status}</p>

                <div className="flex flex-row mt-6 gap-6">
                  <div className="w-1/2">
                    <p className="text-sm">Ships from</p>
                    <p className="text-sm">Ships to</p>
                    <p className="text-sm">Returns</p>
                  </div>
                  <div>
                    <p className="text-sm">{product.shipsFrom}</p>
                    <p className="text-sm">{product.shipsTo}</p>
                    <a href="#" className="text-sm text-blue-500 underline">
                      {product.returns}
                    </a>
                  </div>
                </div>

                <div className="flex items-center mt-10">
                  <label
                    htmlFor={`quantity-${product.id}`}
                    className="mr-2 text-sm"
                  >
                    Qty.
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={50}
                    id={`quantity-${product.id}`}
                    defaultValue={product.quantity}
                    className="border outline-none rounded w-14 py-1 text-center"
                  />
                </div>
              </div>

              <div className="flex flex-row md:flex-col justify-between md:py-6 pb-6 items-end">
                <h1 className="text-2xl">{product.price}</h1>
                <button className="ml-4">
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-1/4 w-full min-h-64 bg-white rounded-md self-start p-4 space-y-8 shadow-lg mb-4">
          <h1 className="text-4xl font-medium">Summary</h1>

          {/* <div className="space-y-2">
            <div className="flex flex-row justify-between items-center">
              <span>Subtotal:</span>
              <span>₱62000</span>
            </div>
            <div className="flex flex-row justify-between items-center">
              <span>Shipping Fee:</span>
              <span>₱8000</span>
            </div>
            <div className="flex flex-row justify-between items-center">
              <span>Handling Fee:</span>
              <span>₱8000</span>
            </div>
          </div> */}

          <div className="flex flex-row mt-6 gap-6 justify-between">
            <div className="">
              <p className="text-lg">Subtotal</p>
              <p className="text-lg">Shipping Fee:</p>
              <p className="text-lg">Handling Fee:</p>
            </div>
            <div className="">
              <p className="text-lg">₱ 62000</p>
              <p className="text-lg">₱ 8000</p>
              <p className="text-lg">₱ 8000</p>
            </div>
          </div>

          <div className="flex flex-row mt-6 gap-6 justify-between">
            <div className="">
              <p className="tracking-[10px] font-bold">Total:</p>
            </div>
            <div className="">
              <p className="text-lg">₱ 78000</p>
            </div>
          </div>

          {/* <div className="flex flex-row justify-between items-center">
            <span className="tracking-[10px] font-bold">Total:</span>
            <span>₱78000</span>
          </div> */}

          <button className="w-full bg-[#4200ff] text-white font-medium py-2 rounded-3xl hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CheckoutPage;
