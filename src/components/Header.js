import React from "react";

function Header({ titulo }) {
  return (
    <header className='text-center'>
      <h1>{titulo}</h1>
    </header>
  );
}

export default Header;
