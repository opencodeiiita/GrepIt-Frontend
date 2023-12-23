import React, { useState } from 'react';
import './assets/styles/App.css';
import Loader from './components/Loader.jsx';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignUp from './components/SignUp.js';
import AppRouter from './routers/AppRouter.jsx';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoaderComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <>
      {!loadingComplete ? <Loader onLoaderComplete={handleLoaderComplete} /> :
        <div className="App">
          <AppRouter />
        </div>}
    </>
  );
}

export default App;
