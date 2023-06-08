import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";
import { useDispatch } from "react-redux";
import { addCart, getCart } from "../redux/reducers/cartReducers";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  const user = useContext(UserContext)
 const dispatch =  useDispatch()
  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios.get(
          "http://localhost:8080/products/get-products"
        );
        console.log(resp);
        setData(resp.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);


  const handleSubmit = async(data, user) => {
    try {
      dispatch(getCart())
      dispatch(addCart(data, user));
    } catch (error) {
      
    }
  }

  console.log(data);
  return (
    <div className="grid grid-cols-4 p-2 w-11/12 mx-auto gap-2">
      {data.map((product) => {
        return (
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-100 hover:shadow-xl py-3">
            <Link to={`/product/${product.title }`}>

            <img src={product.image} alt="plant" className="h-auto w-full" />
            <div className="px-5">
              <p className="font-bold text-xl capitalize text-rose-400">{ product.title}</p>
              <p className="font-bold"> ${ new Intl.NumberFormat().format(product.price)}</p>
              <p className="text-medium mb-5 text-gray-700">
                {product.description.substring(0, 20)}
              </p>
            </div>

            </Link>

            <div className="px-5">
              <button
                className="w-full rounded-md bg-green-800  py-2 text-indigo-100 hover:bg-rose-500 hover:shadow-md duration-75"
                onClick={() => handleSubmit(product, user)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
