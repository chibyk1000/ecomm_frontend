import { Route, Routes } from "react-router-dom"
import PageLayout from "./layouts/PageLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import axios from 'axios'
import Verify from "./pages/Verify"
import Dashboard from "./pages/Dashboard"
import Dashlayout from './layouts/Dashlayout'
import Profile from "./pages/Profile"
import { useEffect, useState, createContext } from "react"
import AddProduct from "./pages/AddProduct"
import { useDispatch } from "react-redux"
import { getCart } from "./redux/reducers/cartReducers"
import SingleProduct from "./pages/SingleProduct"
import Cart from "./pages/Cart"
export const UserContext = createContext()



const App = () => {
  axios.defaults.withCredentials = true
  const dispatch = useDispatch()
const [data, setData] = useState(null)
  useEffect(() => {
    axios.get('http://localhost:8080/user/profile')
      .then(resp => {
    if(resp){
      setData(resp.data)
    }
      })
    dispatch(getCart())
  },[])
  return (
    <UserContext.Provider value={data}>
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <Home />
            </PageLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/create-account" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <PageLayout>
              <Profile />
            </PageLayout>
          }
        />
        <Route
          path="/product/:title"
          element={
            <PageLayout>
              <SingleProduct />
            </PageLayout>
          }
        />
        <Route
          path="/cart"
          element={ 
            <PageLayout>
              <Cart />
            </PageLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashlayout>
              <Dashboard />
            </Dashlayout>
          }
        />
        <Route
          path="/addproduct"
          element={
            <Dashlayout>
              <AddProduct />
            </Dashlayout>
          }
        />
      </Routes>
    </UserContext.Provider>
  );
}

export default App