// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  // Counter state using local storage
  const [counter, setCounter] = useState(
    () => parseInt(localStorage.getItem('counter')) || 0
  );

  // Email and Password state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Save counter to local storage
    localStorage.setItem('counter', counter);
  }, [counter]);

  const handleSaveSession = () => {
    // Save email and password to session storage
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);
  };

  const handleClearSession = () => {
    // Clear session storage
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
  };

  // Clear session storage when the component loads
  useEffect(() => {
    handleClearSession();
  }, []);

  return (
    <div className="container">
      <div style={{ padding: '20px' }}>
        <h1>Local Storage Counter</h1>
        <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
        <button onClick={() => setCounter((prev) => prev - 1)}>Decrement</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <p>Counter Value: {counter}</p>

        <h1>Session Storage Form</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSaveSession();
          }}
        >
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Save to Session</button>
        </form>
        <p>Email in session: {sessionStorage.getItem('email') || 'None'}</p>
        <p>Password in session: {sessionStorage.getItem('password') || 'None'}</p>
      </div>
    </div>
  );
};

export default App;