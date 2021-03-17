import './App.css';
import logo from './images/nautilus.png';
import { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <header>
        <h1 className='name-logo'>
          Meet Patel <img src={logo} alt='logo' />
        </h1>
        <input type='checkbox' id='nav-toggle' className='nav-toggle' />
        <nav>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
        <label htmlFor='nav-toggle' className='nav-toggle-label'>
          <span>
            <HamburgerMenu
              isOpen={open}
              menuClicked={handleClick}
              color='white'
              height={20}
            />
          </span>
        </label>
      </header>
    </>
  );
}

export default App;
