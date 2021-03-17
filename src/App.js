import './App.css';
import logo from './images/nautilus.png'

function App() {
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
          <span>X</span>
        </label>
      </header>
    </>
  );
}

export default App;
