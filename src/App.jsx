import React from 'react';
import AppRouter from './routers/AppRouter.jsx';
import { AuthProvider } from './hooks/useAuth.jsx';

function App() {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  );
}

export default App;
