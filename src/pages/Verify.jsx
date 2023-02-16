import {
  FilledInput,
  FormControl,

  InputLabel,

} from "@mui/material";

import React,{useState} from "react";

import { HiMail } from "react-icons/hi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Verify = () => {
    const navigate = useNavigate()
    const [code, setCode] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const resp = await axios.post('http://localhost:8080/user/verify-email', {code})  

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
                setTimeout(() => navigate("/login"), 5000);
                
            }
            
        } catch (err) {
         
              toast.error(err.response.data.message, {
                position: "top-right",
                autoClose: 100,
                hideProgressBar: true,
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
        Verify account
      </h2>
      <form
        action=""
        className="w-1/3 mx-auto bg-white p-8"
        onSubmit={handleSubmit}
      >
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">
            Verification Code
          </InputLabel>
                  <FilledInput id="filled-adornment-amount" endAdornment={<HiMail />} value={ code} onChange={(event)=>setCode(event.target.value)} />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <button className="bg-main text-white w-full mx-auto block py-2 ">
            Login
          </button>
        </FormControl>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Verify;
