import { useEffect, useRef } from 'react';
import "./Seite.css";
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

const Seite = () => {
  const carouselRef = useRef(null);

  useEffect(() => { 
// // Проверяем, есть ли в сессионном хранилище информация о подтверждении
// if (!sessionStorage.getItem('confirmed')) {
//   // Показываем окно подтверждения
//   const isConfirmed = confirm('Официальный сайт Сергея Мавроди.');

//   if (!isConfirmed) {
//     // Замена содержимого страницы на сообщение
//     document.body.innerHTML = `
//         <h1 style="text-align: center; margin-top: 20%; color: rgb(131, 255, 131);">У трусости очень много имён…</h1>
//     `;
//   } else {
//     // Сохраняем в сессионное хранилище информацию о подтверждении
//     sessionStorage.setItem('confirmed', 'true');
//   }
// }


const $carousel = $(carouselRef.current);
    $carousel.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
      nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
    });

    return () => {
      $carousel.slick('unslick');
    };
  }, []);

  return (
    <div className="content">
      <h2>ГЛАВНАЯ СТРАНИЦА</h2>

      <center>
        <style>
          {`.slick-prev:before,
          .slick-next:before {
            font-size: 24px;
            opacity: 1;
            color: #f00;
          }

          .slick-prev,
          .slick-next {
            width: 55px;
          }`}
        </style>

        <table style={{ border: "0", padding: "0", margin: "0" }} className="img_border">
          <tbody>
            <tr>
              <td className="t1">&nbsp;</td>
              <td className="t2">&nbsp;</td>
              <td className="t3">&nbsp;</td>
            </tr>
            <tr>
              <td className="c1">&nbsp;</td>
              <td className="c2">
                <img
                  alt=""
                  src="/images/img7.webp"
                  title="Михаил Врубель. Демон поверженный"
                />
              </td>
              <td className="c3">&nbsp;</td>
            </tr>
            <tr>
              <td className="b1">&nbsp;</td>
              <td className="b2">&nbsp;</td>
              <td className="b3">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </center>

      <div className="carousel" ref={carouselRef}>
        <center>
          <table style={{ border: "0", padding: "0", margin: "0" }} className="img_border">
            <tbody>
              <tr>
                <td className="t1">&nbsp;</td>
                <td className="t2">&nbsp;</td>
                <td className="t3">&nbsp;</td>
              </tr>
              <tr>
                <td className="c1">&nbsp;</td>
                <td className="c2">
                  <video controls width="590" height="448">
                    <source src="/video/1.mp4" type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                </td>
                <td className="c3">&nbsp;</td>
              </tr>
              <tr>
                <td className="b1">&nbsp;</td>
                <td className="b2">&nbsp;</td>
                <td className="b3">&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </center>

        <center>
          <table style={{ border: "0", padding: "0", margin: "0" }} className="img_border">
            <tbody>
              <tr>
                <td className="t1">&nbsp;</td>
                <td className="t2">&nbsp;</td>
                <td className="t3">&nbsp;</td>
              </tr>
              <tr>
                <td className="c1">&nbsp;</td>
                <td className="c2">
                  <video controls width="590" height="448">
                    <source src="/video/2.mp4" type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                </td>
                <td className="c3">&nbsp;</td>
              </tr>
              <tr>
                <td className="b1">&nbsp;</td>
                <td className="b2">&nbsp;</td>
                <td className="b3">&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </center>

        <center>
          <table style={{ border: "0", padding: "0", margin: "0" }} className="img_border">
            <tbody>
              <tr>
                <td className="t1">&nbsp;</td>
                <td className="t2">&nbsp;</td>
                <td className="t3">&nbsp;</td>
              </tr>
              <tr>
                <td className="c1">&nbsp;</td>
                <td className="c2">
                  <video controls width="590" height="448">
                    <source src="/video/3.mp4" type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                </td>
                <td className="c3">&nbsp;</td>
              </tr>
              <tr>
                <td className="b1">&nbsp;</td>
                <td className="b2">&nbsp;</td>
                <td className="b3">&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>

      <center>
        <table style={{ border: "0", padding: "0", margin: "0" }} className="img_border">
          <tbody>
            <tr>
              <td className="t1">&nbsp;</td>
              <td className="t2">&nbsp;</td>
              <td className="t3">&nbsp;</td>
            </tr>
            <tr>
              <td className="c1">&nbsp;</td>
              <td className="c2">
                <video controls width="590" height="340">
                  <source src="/video/4.mp4" type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </td>
              <td className="c3">&nbsp;</td>
            </tr>
            <tr>
              <td className="b1">&nbsp;</td>
              <td className="b2">&nbsp;</td>
              <td className="b3">&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </center>

      <div className="main_fon">
        <div className="main_fon_text">
          <div style={{ margin: '0 auto', textAlign: 'center' }}>
            <p>
              <span style={{ fontSize: '150%' }}>ПРЕДУПРЕЖДЕНИЕ!</span>
            </p>
            <p>
              <span style={{ fontWeight: 'bold', color: 'red' }}>
                В настоящее время МММ не работает в России,
                Казахстане и Беларуси.<br />Все сайты в этих странах,
                выдающие себя за МММ - мошенники!
              </span>
            </p>
            <p>
              <span>В общем, будьте внимательны. Повторяю: это мошенники!</span>
            </p>
            <p><span>Сергей Мавроди</span></p>
            <br />
            <p>
              <span>
                P.S. Напоминаю также в очередной раз,<br />что ни в
                каких соц.сетях, твиттерах и пр. меня тоже нет. Всё
                это обычные прохвосты.<br />(Чего-то, кстати,
                расплодившиеся последнее время. :-))
              </span>
            </p>
            <p>
              <span>
                P.P.S. Ни к МММ, ни ко мне лично никакого отношения
                не имеют.<br />Обычное жульё. Не попадитесь!
              </span>
            </p>
            <p>
              <span>
                P.P.P.S. И никаких криптовалют, кстати, я не
                выпускал.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seite;
