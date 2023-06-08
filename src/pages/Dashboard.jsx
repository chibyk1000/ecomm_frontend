import React, { useEffect } from 'react'
import axios from 'axios'
const Dashboard = () => {

  useEffect(() => {
    axios
      .delete("http://localhost:8080/products/single/dksjfkljsdkljl", {
        title: "dksjfkljsdkljl",
        description: "dkfldkfl;dk;lsk;l",
        price: "6000",
      })
      .then((res) => { 
        console.log(res.data);
      });
  })
  return (
      <div>
          <h1>dkjdjkjk</h1>
    </div>
  )
}

export default Dashboard