import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import News from './components/News';
import Contacts from './components/Contacts';
import Seite from './components/Seite';
import Spinner from './components/Spinner';
import './App.css';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => setLoading(false), 3000); // Задержка для демонстрации спиннера
    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <div id="body">
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Seite />} />
            <Route path='news' element={<News />} />
            <Route path='contacts' element={<Contacts />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
