import React from 'react'
import logo from '../img/react-logo.png'

export default function Header() {
  return (
    <header>
      <nav className="flex flex-row justify-between p-4 bg-black">
        <img src={logo} width="60px" />
        <ul className="flex text-react-blue text-2xl items-center">
          <li className="mx-2">Pricing</li>
          <li className="mx-2">About</li>
          <li className="mx-2">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

