import React from 'react';
import './assets/styles/App.css';
import AppRouter from './routers/AppRouter.jsx';
import Loader from './components/Loader.jsx';
import { useState } from 'react';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleLoaderComplete = () => {
    setLoadingComplete(true);
  };
  return (
    <>
      {!loadingComplete && <Loader onLoaderComplete={handleLoaderComplete} />}
      {loadingComplete && <div className="App">
        <AppRouter />
      </div>}
    </>
  );
}

export default App;
