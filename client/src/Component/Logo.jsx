import React from 'react'
import { NavLink } from "react-router-dom";


const Logo = ({}) => {
  return (
      <header className={`mb-6 font-bold text-[#D9A441]`}>
        <NavLink to="/">Pocketwise</NavLink>
      </header>
  );
}

export default Logo
