import React from 'react';
import AppRouter from './routers/AppRouter.jsx';
import { AuthProvider } from './hooks/useAuth.jsx';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider
    theme={{
      token: {
        
        fontFamily:'Arial,Sans Serif',

        // Alias Token
        colorBgContainer: '#ffffff',
      },
    }}
  >
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
