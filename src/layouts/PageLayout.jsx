import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SideCart from '../components/SideCart';

const PageLayout = ({ children }) => {
  
const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar open={open} setOpen={setOpen} />
      <SideCart open={open} setOpen={setOpen} />
      {children}
    </div>
  );
}

export default PageLayout