import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/reducers/cartReducers";
import axios from "axios";



export default function SideCart({open, setOpen}) {
 
    const cart = useSelector((state) => state.cartReducer);
        const [count, setCount] = useState(0);
    const [item, setItem] = useState([]);  
  
    const dispatch =  useDispatch()
          const addCount = async (item) => {
            try {
              const response = await axios.post(
                "http://localhost:8080/cart/increment",
                item
              );

              if (response.data) {
                dispatch(getCart());
              }
            } catch (error) {
              console.log(error);
            }
    };
    

      const minusCount = async (item) => {
        try {
          const response = await axios.post(
            "http://localhost:8080/cart/decrement",
            item
          );

          if (response.data) {
            dispatch(getCart());
          }
        } catch (error) {
          console.log(error);
        }
      };
    useEffect(() => {
      
        if (Object.keys(cart).length > 0) {
            setItem(cart.item)
        }
  }, [cart]);
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {item.length > 0
                                                            ? item.map((product) =>
                                                            {

                
                                    return (
                                      <li
                                        key={product._id}
                                        className="flex py-6"
                                      >
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                          <img
                                            src={product.image}
                                            alt={product.title}
                                            className="h-full w-full object-cover object-center"
                                          />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                          <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                              <h3>
                                                <a href="">{product.title}</a>
                                              </h3>
                                              <p className="ml-4">
                                                {product.price}
                                              </p>
                                            </div>
                                            <div className="flex mt-4 items-center">
                                              <button
                                                onClick={() =>
                                                  minusCount({...product, _id: product.productId})
                                                }
                                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                                              >
                                                -
                                              </button>
                                              <input
                                                id="counter"
                                                aria-label="input"
                                                className="border border-gray-300 h-full text-center w-14 pb-1"
                                                type="text"
                                                disabled
                                                value={product.quantity}
                                                onChange={(e) => e.target.value}
                                              />
                                              <button
                                                onClick={() =>
                                                  addCount(product)
                                                }
                                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "
                                              >
                                                +
                                              </button>
                                            </div>
                                          </div>
                                          <div className="flex flex-1 items-end justify-end text-sm">
                                            <div className="flex">
                                              <button
                                                type="button"
                                                className="font-medium text-green-600 hover:text-green-500"
                                              >
                                                Remove
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    );
                                })
                                : ""}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                                                {Object.keys(cart).length > 0 && <p>{ cart.total}</p>}
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700"
                          >
                            Checkout
                          </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
}
