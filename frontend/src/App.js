import logo from './logo.svg';
import './App.css';
import NavLinks from './common/components/NavLinks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Package from './pages/Package';
import Auth from './pages/Auth';
import { useCallback, useState } from 'react';
import { AuthContext } from './common/authContext/authcontext';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLogin=useCallback(()=>{
setIsLoggedIn(true);
  },[])

  const setLogout=useCallback(()=>{
    setIsLoggedIn(false)
  },[])

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header> */}
      <AuthContext.Provider value={{isLoggedIn : isLoggedIn, login: setLogin, logout : setLogout}}>
      <Router>
        <NavLinks />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Package />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
