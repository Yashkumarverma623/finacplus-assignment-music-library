import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import LoginForm from './components/LoginForm';
import MusicLibrary from './components/MusicLibrary';

const AppContent = () => {
  const { user } = useContext(AuthContext);
  
  return user ? <MusicLibrary /> : <LoginForm />;
};

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <AppContent />
      </div>
    </AuthProvider>
  );
};

export default App;