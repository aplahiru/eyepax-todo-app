import React from 'react';
import './styles/App.css';
import AppRouter from './main/routes/AppRouter';
import Navbar from './main/components/navbar';
import { RootState } from './store';
import { useSelector } from 'react-redux';

function App() {
  const authenticated = useSelector((store: RootState) => store.authRef.authenticated);
  return (
      <>
        {
          authenticated && <Navbar />
        }
        <AppRouter />
      </>
  );
}

export default App;
