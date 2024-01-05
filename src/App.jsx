import React from 'react';
import AppRouter from './routers/AppRouter.jsx';
import { AuthProvider } from './hooks/useAuth.jsx';
import { ConfigProvider, App as AppFeedBackProvider } from 'antd';
import theme from './utils/theme.ts';

function App() {
  return (
    <ConfigProvider theme={theme}>
      <AuthProvider>
        <AppFeedBackProvider>
          <AppRouter />
        </AppFeedBackProvider>
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
