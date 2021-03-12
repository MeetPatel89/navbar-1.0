import './App.css';

function App() {
  return (
    <>
      <header>
        <h1 className='name'>Meet Patel</h1>
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
          <span></span>
        </label>
      </header>
      
        <p>Hello Navbar!</p>
      
    </>
  );
}

export default App;
