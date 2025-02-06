import { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [timer, setTimer] = useState('');

  useEffect(() => {
    // Установить дату и время запуска сайта
    const launchDate = new Date('2025-01-29 00:00:00').getTime();

    // Обновление таймера каждую секунду
    const timerInterval = setInterval(() => {
      // Получить текущее время
      const now = new Date().getTime();

      // Рассчитать разницу между текущим временем и временем запуска сайта
      const distance = launchDate - now;

      // Рассчитать дни, часы, минуты и секунды
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Обновить состояние таймера
      setTimer(`${days} ${hours} ${minutes} ${seconds}`);

      // Если время до запуска сайта истекло, очистить интервал
      if (distance < 0) {
        clearInterval(timerInterval);
        setTimer('300/31(:2)/476');
      }
    }, 1000); // Обновлять каждую секунду

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div id="footer">
      <div className="footer">
        <div className="ilike">
          <p>Если сайт Вам понравился и оказался для Вас полезным, то поделитесь им с другими.</p>
          <div className="ilike_but_top">
            <div className="share42init">
              <span id="share42"></span>
            </div>
          </div>
          <div id="timer" className="timer">{timer}</div>
          <div className="ilike_but_bot"></div>
        </div>

        <div className="copy">
          <p>
            Все права защищены Ⓒ 2011-2025 Официальный сайт Сергея Мавроди \
            <a href="mailto:theatermavrodi@gmail.com" style={{ color: 'rgb(234, 204, 171)', textDecoration: 'none' }}>
            / theatermavrodi@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
