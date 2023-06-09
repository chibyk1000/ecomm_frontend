import React from 'react'
import { getCart } from '../redux/reducers/cartReducers';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const useAddCart = () => {
const dispatch = useDispatch()
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
  return addCount
}

export default useAddCart