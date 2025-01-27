import React from 'react';
import { Link } from 'react-router-dom';

// Ленивая загрузка компонента с текстом
const LazyContent = React.lazy(() => import('./GefangnistagebuchContent'));

const Gefangnistagebucher = () => (
  <div className="breadcrumbs">
    <div className="breadcrumbs">
      <div id="breadcrumb">
        <Link to="/">Главная страница</Link> → <Link to="/schriftstellerei">Творчество</Link> →{' '}
        <Link to="/gefangnis">Тюрьма</Link> → Тюремные дневники
      </div>
    </div>
    <div className="content">
      <div className="content_white_cloud">
        <div className="cwc_top"></div>
        <div className="cwc_mid">
          <div className="content">
            <div className="post-body entry-content">
              <div style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                <h2>Тюремные дневники. <br />Бутырка, Матроска, спецблок...</h2>
                <br />
                <br />

                {/* Suspense для отображения "Загрузка...", пока текст подгружается */}
                <React.Suspense fallback={<div>Идёт загрузка текста...</div>}>
                  <LazyContent />
                </React.Suspense>
              </div>
            </div>
          </div>
        </div>
        <div className="cwc_bot"></div>
      </div>
    </div>
  </div>
);

export default Gefangnistagebucher;
