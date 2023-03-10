import { Route, Routes } from "react-router-dom"
import PageLayout from "./layouts/PageLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import axios from 'axios'
import Verify from "./pages/Verify"

import Profile from "./pages/Profile"

const App = () => {
  axios.defaults.withCredentials = true

  // useEffect(() => {
  //   axios.get('http://localhost:8080/user/profile')
  //     .then(resp => {
  //     console.log(resp)
  //   })
  // },[])
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <PageLayout>
            <Home />
          </PageLayout>
        } />
        <Route path="/login" element={<Login/> } />
        <Route path="/verify" element={<Verify/> } />
        <Route path="/create-account" element={<SignUp/> } />
        <Route path="/profile" element={
             <PageLayout>
               <Profile />
             </PageLayout>
        } />

</Routes>
    </div>
  )
}

export default App