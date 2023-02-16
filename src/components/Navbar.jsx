import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BiSearch, BiCartAlt } from "react-icons/bi";
import { Badge } from '@mui/material'
const Navbar = () => {
  return (
    <nav className="flex bg-gray-800 text-white py-4 justify-between px-5 items-center">
      <Link to="/">
        <img src="/logo.svg" alt="" />
      </Link>

      <ul className="flex w-2/3 justify-between items-center text-lg">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Sell With us</NavLink>
        </li>
        <li className="w-7/12">
          <form className="flex">
            <input
              type="search"
              placeholder="Search for products ..."
              className="h-10 w-9/12 pl-2 placeholder:text-[.9rem]"
            />
            <button type="submit" className="bg-main px-5 text-lg">
              <BiSearch />
            </button>
          </form>
        </li>
        <li>
          <NavLink to="/login" className="">Account</NavLink>
        </li>
        <li>
          <Link to="/cart">
            <Badge badgeContent={0} color="success">
              <BiCartAlt />
            </Badge>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar