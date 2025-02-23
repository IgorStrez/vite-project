import { useState } from 'react';
import './Coin.css';
{/* 
  import Coin from './Coin';
  <Coin /> 
  */}  

const Coin = () => {
  const [side, setSide] = useState<string | null>(null);
  const [flipping, setFlipping] = useState(false);

  const flipCoin = () => {
    if (flipping) return; // Запрещаем новый бросок, пока идёт анимация

    setFlipping(true);

    setTimeout(() => {
      const rand = Math.random();
      let result: string;

      if (rand < 0.5) result = '0';
      else if (rand < 0.999) result = 'I';
      else result = '▲';

      setSide(result);
      setFlipping(false);

      // Обновляем сохранённое значение при каждом броске
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
