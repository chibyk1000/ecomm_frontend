import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { getCart } from '../redux/reducers/cartReducers';
const SingleProduct = () => {

    const { title } = useParams()
    const [product, setProduct] = useState({})
    const [rotate, setRotate] = useState(false);
    const [count, setCount] = useState(0);
const dispatch = useDispatch()
  const cart = useSelector((state) => state.cartReducer);
const [quantity, setQuantity] = useState(0)
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
    console.log(error)
}
    };
    useEffect(() => {
        const getItem = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/products/single/${title}`);
           
setProduct(response.data)
            } catch (error) {
                console.log(error)
            }
        }


        getItem()
    }, [title])

    if (!product) {
        return <p>loading ....</p>
    }


    useEffect(() => {
        if (Object.keys(cart).length > 0 && product) {
            const founditem = cart.item.find((p) => p.productId === product._id)
            if (founditem) {
                console.log(founditem);
                setCount(founditem.quantity)
            }
        }
    }, [cart, product])
    

    return (
      <>
        {product ? (
          <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
            <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
              {/* <!-- Description Div --> */}

              <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                {/* <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">
                  Home / Furniture / Wooden Stool
                </p> */}
                <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
               {product.title}
                </h2>

                <div className=" flex flex-row justify-between  mt-5">
                  <div className=" flex flex-row space-x-3">
            
                  </div>
                  <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">
                    22 reviews
                  </p>
                </div>

                <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
       {product.description}
                </p>
                <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
                  $ {new Intl.NumberFormat().format(product.price)}
                </p>

                <div className="lg:mt-11 mt-10">
                  <div className="flex flex-row justify-between">
                    <p className=" font-medium text-base leading-4 text-gray-600">
                      Select quantity
                    </p>
                    <div className="flex">
                      <button
                        onClick={()=>minusCount(product)}
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                      >
                        -
                      </button>
                      <input
                        id="counter"
                        aria-label="input"
                        className="border border-gray-300 h-full text-center w-14 pb-1"
                        type="text"
                        value={count}
                        onChange={(e) => e.target.value}
                      />
                      <button
                        onClick={()=>addCount(product)}
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <hr className=" bg-gray-200 w-full my-2" />
                  <div className=" flex flex-row justify-between items-center mt-4">
                    <p className="font-medium text-base leading-4 text-gray-600">
                      Dimensions
                    </p>
                    <svg
                      onClick={() => setRotate(!rotate)}
                      id="rotateSVG"
                      className={
                        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer transform " +
                        (rotate ? "rotate-180" : "rotate-0")
                      }
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1L5 5L1 1"
                        stroke="#4B5563"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <hr className=" bg-gray-200 w-full mt-4" />
                </div>

                <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6">
                  Add to shopping bag
                </button>
              </div>

              {/* <!-- Preview Images Div For larger Screen--> */}

              <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
              
                  <img
                    src={product.image}
                    alt="Wooden Chair Previw"
                  />

              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
}

export default SingleProduct