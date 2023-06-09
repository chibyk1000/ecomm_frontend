
import { Link, NavLink, useLocation, useParams,  } from 'react-router-dom'
import { BiSearch, BiCartAlt } from "react-icons/bi";
import { Badge } from '@mui/material'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App'
import { useSelector } from 'react-redux';
const Navbar = ({open, setOpen}) => {
  const user = useContext(UserContext)
  const location = useLocation()
  const params = useParams()

  console.log(params);
  // console.log(location.pathname === '/product/'+ /[]/);
  const cart = useSelector((state) => state.cartReducer)

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
              className="h-10 w-9/12 pl-2 placeholder:text-[.9rem] text-main"
            />
            <button type="submit" className="bg-main px-5 text-lg">
              <BiSearch />
            </button>
          </form>
        </li>

        <li>
          {user ? (
            <NavLink to="/dashboard" className="">
              Account
            </NavLink>
          ) : (
            <NavLink to="/login" className="">
              Login
            </NavLink>
          )}
        </li>

        <li>
          {params.title ? (
            <Link to="/cart">
              <Badge
                badgeContent={
                  Object.keys(cart).length > 0 ? cart.item.length : "0"
                }
                color="success"
              >
                <BiCartAlt />
              </Badge>
            </Link>
          ) : (
            <button onClick={()=> setOpen(true)}>
              <Badge
                badgeContent={
                  Object.keys(cart).length > 0 ? cart.item.length : "0"
                }
                color="success"
              >
                <BiCartAlt />
              </Badge>
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar