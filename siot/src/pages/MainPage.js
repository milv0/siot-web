// src/pages/MainPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Navbar 컴포넌트 추가
import { Navbar, Nav } from "react-bootstrap";



const MainPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>

    </div>
  );
};

export default MainPage;
