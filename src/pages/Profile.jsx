import { MdVisibility } from "react-icons/md";
import { FilledInput, FormControl, InputLabel } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useGetUserProfileQuery } from "../redux/userApi";
const Profile = () => {
  const user = useGetUserProfileQuery();
  console.log(user.data);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (event) => {
    try {
    } catch (err) {}
  };
  return (
    <div className="min-h-screen bg-slate-100 pt-10">
      <h2 className="text-center uppercase text-4xl mb-10  font-semibold">
        Profile
      </h2>
      <form
        action=""
        className="max-sm:w-4/5 max-lg:w-2/3 w-1/3 mx-auto bg-white p-8"
        onSubmit={handleSubmit}
      >
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">First Name</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
          />
        </FormControl>
         <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Last Name</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Email</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            endAdornment={<HiMail size={25} color="grey" />}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormControl> 
         <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Password</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            type="password"
            endAdornment={<MdVisibility size={25} color="grey" />}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl> 
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">
            Confirm password
          </InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
              </FormControl> 
              
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <button className="bg-main text-white w-full mx-auto block py-2 ">
            Signup
          </button>
        </FormControl> 

        <p>
          Already have an account?
          <Link to="/login" className="underline ml-3">
            Login here
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Profile;
