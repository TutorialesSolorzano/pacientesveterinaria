import React from "react";
import PropTypes from "prop-types";

function Header({ titulo }) {
  return (
    <header className='text-center'>
      <h1>{titulo}</h1>
    </header>
  );  
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}

export default Header;
