import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import News from './components/News';
import Contacts from './components/Contacts';
import Seite from './components/Seite';
import Spinner from './components/Spinner';
import Schriftstellerei from './components/Schriftstellerei';
import SohnLuzifers from './components/SohnLuzifers';
import Jack from './components/SohnLuzifers/Jack';
import Anfang from './components/SohnLuzifers/Anfang';
import './App.css';
import Gedichte from './components/Gedichte';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  // Динамический импорт всех Стихов
  const gedichtFiles = import.meta.glob('./components/Gedichte/Gedicht*.tsx');
  const gedichtRoutes = Object.keys(gedichtFiles).map((path) => {
    const fileName = path.split('/').pop()?.replace('.tsx', '');
    const loadComponent = gedichtFiles[path] as () => Promise<{ default: React.ComponentType<unknown> }>;
    const LazyComponent = React.lazy(() =>
      loadComponent().then((module) => ({ default: module.default }))
    );
    return {
      path: `/gedichte/${fileName?.toLowerCase()}`,
      element: <LazyComponent />,
    };
  });

  // Динамический импорт всех Дней
  const dayFiles = import.meta.glob('./components/SohnLuzifers/Tag*.tsx');
  const dayRoutes = Object.keys(dayFiles).map((path) => {
    const fileName = path.split('/').pop()?.replace('.tsx', '');
    const loadComponent = dayFiles[path] as () => Promise<{ default: React.ComponentType<unknown> }>;
    const LazyComponent = React.lazy(() =>
      loadComponent().then((module) => ({ default: module.default }))
    );
    return {
      path: `/sohnluzifers/${fileName?.toLowerCase()}`,
      element: <LazyComponent />,
    };
  });

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => setLoading(false), 1333); // Задержка для демонстрации спиннера
    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <div id="body">
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Seite />} />
            <Route path="news" element={<News />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="schriftstellerei" element={<Schriftstellerei />} />
            <Route path="sohnluzifers" element={<SohnLuzifers />} />
            <Route path="/sohnluzifers/jack" element={<Jack />} />
            <Route path="/sohnluzifers/anfang" element={<Anfang />} />
            <Route path="gedichte" element={<Gedichte />} />
            {gedichtRoutes.map((route, index) => (
              <Route
                key={`gedicht-${index}`}
                path={route.path}
                element={
                  <React.Suspense fallback={<Spinner />}>
                    {route.element}
                  </React.Suspense>
                }
              />
            ))}
            {dayRoutes.map((route, index) => (
              <Route
                key={`day-${index}`}
                path={route.path}
                element={
                  <React.Suspense fallback={<Spinner />}>
                    {route.element}
                  </React.Suspense>
                }
              />
            ))}
          </Route>
        </Routes>
      )}
    </div>
  );
};

export default App;
