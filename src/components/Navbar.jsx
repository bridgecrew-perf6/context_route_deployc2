import React from "react";
import { Routes } from "react-router-dom";
import {Link} from 'react-router-dom'
import styled from "styled-components";
const NavbarWrapper=styled.div`
display:flex;`;
const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to='/'>Home</Link>

      <Link to='/login'>login</Link>
    </NavbarWrapper>

  )
};

export default Navbar;
