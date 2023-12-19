import React from 'react';
import './assets/styles/App.css';
import AppRouter from './routers/AppRouter.jsx';
import Loader from './components/Loader.jsx'

function App() {
  return (
      <Loader />
      <div className="App">
        <AppRouter />
      </div>
  );
}

export default App;
