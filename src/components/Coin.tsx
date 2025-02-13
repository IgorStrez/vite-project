import { useState, useEffect } from 'react';
import './Coin.css';

const Coin = () => {
  const [side, setSide] = useState<string | null>(null);
  const [flipping, setFlipping] = useState(false);
  const [flipped, setFlipped] = useState<boolean>(false);

  useEffect(() => {
    // Очистка localStorage при загрузке страницы
    const wasFlipped = sessionStorage.getItem('flipped') === 'true';
    if (wasFlipped) {
      setFlipped(true);
      setSide(sessionStorage.getItem('coinSide') || null);
    }
  }, []);

  const flipCoin = () => {
    if (flipping || flipped) return; // Запрещаем повторный бросок

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

      // Запоминаем, что монету уже бросали (но не навсегда!)
      sessionStorage.setItem('flipped', 'true');
      sessionStorage.setItem('coinSide', result);
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
