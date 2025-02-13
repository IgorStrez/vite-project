import { useState, useEffect } from 'react';
import './Coin.css';

const Coin = () => {
  const [side, setSide] = useState<string | null>(null);
  const [flipping, setFlipping] = useState(false);
  const [flipped, setFlipped] = useState<boolean>(() => {
    return localStorage.getItem('flipped') === 'true'; // Проверяем, крутили ли монету раньше
  });

  useEffect(() => {
    if (flipped) {
      setSide(localStorage.getItem('coinSide') || null); // Загружаем сохранённую сторону
    }
  }, [flipped]);

  const flipCoin = () => {
    if (flipping || flipped) return; // Если уже крутили — блокируем

    setFlipping(true);

    setTimeout(() => {
      const rand = Math.random();
      let result: string;

      if (rand < 0.5) result = '0';
      else if (rand < 0.999) result = 'I';
      else result = '▲';

      setSide(result);
      setFlipping(false);
      setFlipped(true);
      localStorage.setItem('flipped', 'true'); // Сохраняем, что монета уже крутилась
      localStorage.setItem('coinSide', result); // Сохраняем выпавшую сторону
    }, 4000);
  }; 

  return (
    <div className="coin-container">
      <div className={`coin ${flipping ? 'flipping' : ''}`} onClick={flipCoin}>
        {side ? <span>{side}</span> : <span>ВЫЗОВ</span>}
      </div>
    </div>
  );
};

export default Coin;
