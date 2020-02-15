import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Users from './components/UserProfile/UserProfile'
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar />
      </header>
      <body>
        <div>
          <Users />
        </div>
      </body>
    </div>
  );
}

export default App;
