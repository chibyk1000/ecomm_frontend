import {
  FilledInput,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { MdVisibility } from "react-icons/md";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const resp = await axios.post('http://localhost:8080/user/login', { email, password })
      
      if (resp.status === 200) {
        toast.success(resp.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });

        setTimeout(()=> navigate('/') )
      }
    } catch (err) {
      toast.error(err.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  }
  return (
    <div className="min-h-screen bg-slate-100 pt-10">
      <h2 className="text-center uppercase text-4xl mb-10  font-semibold">
        Login{" "}
      </h2>
      <form action="" className="w-1/3 mx-auto bg-white p-8" onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">
            Username or email
          </InputLabel>
          <FilledInput id="filled-adornment-amount" endAdornment={<HiMail />} value={ email} onChange={(event)=> setEmail(event.target.value)} />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Password</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            type="password"
            endAdornment={<MdVisibility />}
            value={password}
            onChange={(event)=> setPassword(event.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <button className="bg-main text-white w-full mx-auto block py-2 ">
            Login
          </button>
        </FormControl>

        <p>
          Don't have an account?
          <Link to="/create-account" className="underline ml-3">
            create account here
          </Link>
        </p>
        <ToastContainer/>
      </form>
    </div>
  );
};

export default Login;
