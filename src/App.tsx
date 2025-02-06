import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import News from './components/News';
import Contacts from './components/Contacts';
import Seite from './components/Seite';
import Schriftstellerei from './components/Schriftstellerei';
import SohnLuzifers from './components/SohnLuzifers';
import Jack from './components/SohnLuzifers/Jack';
import Anfang from './components/SohnLuzifers/Anfang';
import Gedichte from './components/Gedichte';
import Tagebucher from './components/Tagebucher';
import Drehbuch from './components/Drehbuch';
import './App.css';
import Gefangnis from './components/Gefangnis';
import Gefangnistagebucher from './components/Gefangnis/Gefangnistagebucher';
import Zweiundvierzig from './components/Gefangnis/Zweiundvierzig';
import Karzer from './components/Gefangnis/Karzer';
import Lieder from './components/Lieder';
import Ideology from './components/Ideology';
import { Auth0Provider } from "@auth0/auth0-react";
import LK from './components/LK';
import Woche from './components/Woche';
import SearchResults from './components/SearchResults';



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

// Динамический импорт всех Дневников
const tagebuchFiles = import.meta.glob('./components/Tagebucher/Tagebuch*.tsx');
const tagebuchRoutes = Object.keys(tagebuchFiles).map((path) => {
  const fileName = path.split('/').pop()?.replace('.tsx', '');
  const loadComponent = tagebuchFiles[path] as () => Promise<{ default: React.ComponentType<unknown> }>;
  const LazyComponent = React.lazy(() =>
    loadComponent().then((module) => ({ default: module.default }))
  );
  return {
    path: `/tagebucher/${fileName?.toLowerCase()}`,
    element: <LazyComponent />,
  };
});

// Динамический импорт всех Сценариев
const szenariumFiles = import.meta.glob('./components/Drehbuch/Szenarium*.tsx');
const szenariumRoutes = Object.keys(szenariumFiles).map((path) => {
  const fileName = path.split('/').pop()?.replace('.tsx', '');
  const loadComponent = szenariumFiles[path] as () => Promise<{ default: React.ComponentType<unknown> }>;
  const LazyComponent = React.lazy(() =>
    loadComponent().then((module) => ({ default: module.default }))
  );
  return {
    path: `/drehbuch/${fileName?.toLowerCase()}`,
    element: <LazyComponent />,
  };
});

// Динамический импорт всех Песен
const liedFiles = import.meta.glob('./components/Lieder/Lied*.tsx');
const liedRoutes = Object.keys(liedFiles).map((path) => {
  const fileName = path.split('/').pop()?.replace('.tsx', '');
  const loadComponent = liedFiles[path] as () => Promise<{ default: React.ComponentType<unknown> }>;
  const LazyComponent = React.lazy(() =>
    loadComponent().then((module) => ({ default: module.default }))
  );
  return {
    path: `/lieder/${fileName?.toLowerCase()}`,
    element: <LazyComponent />,
  };
});

// Динамический импорт всех Газет
const zeitungFiles = import.meta.glob('./components/Woche/Zeitung*.tsx');
const zeitungRoutes = Object.keys(zeitungFiles).map((path) => {
  const fileName = path.split('/').pop()?.replace('.tsx', '');
  const loadComponent = zeitungFiles[path] as () => Promise<{ default: React.ComponentType<unknown> }>;
  const LazyComponent = React.lazy(() =>
    loadComponent().then((module) => ({ default: module.default }))
  );
  return {
    path: `/woche/${fileName?.toLowerCase()}`,
    element: <LazyComponent />,
  };
});


const App: React.FC = () => {
  return (

    <Auth0Provider
      domain="sergey-mavrodi.eu.auth0.com"
      clientId="hH4nnxKYWMIsvGNXTwZj4dqO638p45sX"
      authorizationParams={{
        redirect_uri: window.location.origin + "/lk", 
      }}
    >

    <div id="body">
      <React.Suspense fallback={<div>...</div>}>
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
            <Route path="tagebucher" element={<Tagebucher />} />
            <Route path="drehbuch" element={<Drehbuch />} />
            <Route path="gefangnis" element={<Gefangnis />} />
            <Route path="/gefangnis/gefangnistagebucher" element={<Gefangnistagebucher />} />
            <Route path="/gefangnis/karzer" element={<Karzer />} />
            <Route path="/gefangnis/zweiundvierzig" element={<Zweiundvierzig />} />
            <Route path="lieder" element={<Lieder />} />
            <Route path="ideology" element={<Ideology />} />
            <Route path="/lk" element={<LK />} />
            <Route path="woche" element={<Woche />} />
            <Route path="/search" element={<SearchResults />} />


            {gedichtRoutes.map((route, index) => (
              <Route key={`gedicht-${index}`} path={route.path} element={route.element} />
            ))}
            {dayRoutes.map((route, index) => (
              <Route key={`day-${index}`} path={route.path} element={route.element} />
            ))}
            {tagebuchRoutes.map((route, index) => (
              <Route key={`tagebuch-${index}`} path={route.path} element={route.element} />
            ))} 
            {szenariumRoutes.map((route, index) => (
              <Route key={`szenarium-${index}`} path={route.path} element={route.element} />
            ))}
            {liedRoutes.map((route, index) => (
              <Route key={`lied-${index}`} path={route.path} element={route.element} />
            ))}
            {zeitungRoutes.map((route, index) => (
              <Route key={`zeitung-${index}`} path={route.path} element={route.element} />
            ))}

          </Route>
        </Routes>
      </React.Suspense>
    </div>

    </Auth0Provider>

  );
};

export default App;
