import React from 'react';
import './News.css';
import { Link } from 'react-router-dom';



const News: React.FC = () => {
  return (
    <div>
      <div className="breadcrumbs">
        <div id="breadcrumb">
          <Link to="/">Главная страница</Link> → Новости
        </div>
      </div>
      <div className="content">
        <h2>НОВОСТИ</h2>

        {/* <div className="news_block">
          <div className="news_block_head">
            <div className="news_date">
              <i></i>
              <a>25 Января, 2025</a>
            </div>
          </div>
          <div className="content_white_cloud">
            <div className="cwc_top"></div>
            <div className="cwc_mid">
              <div className="news_item">
                <div className="news_item_one">
                  <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0009"></div>
                  <div className="anons">
                    <p>                      
                        <strong>
                          <p>
                          <Link to="/ideology" className="yellow-underline3" 
                          style={{ fontSize: '33px', textAlign: 'center', background: '#d3d3d3'}}><br />ИДЕОЛОГИЯ<br /><br /></Link><br />
                          <p style={{textAlign: 'center'}}>Буду тексты писать идеологические. И выкладывать периодически. :-))<br /></p>
                          </p>
                        </strong>
                    </p>
                  </div>
                  <div className="share_soc">
                    </div>
                </div>
              </div>
            </div>
            <div className="cwc_bot"></div>
          </div>
        </div> */}

        {/* <div className="news_block">
          <div className="news_block_head">
            <div className="news_date">
              <i></i>
              <a>11 Февраля, 2025</a>
            </div>
          </div>
          <div className="content_white_cloud">
            <div className="cwc_top"></div>
            <div className="cwc_mid">
              <div className="news_item">
                <div className="news_item_one">
                  <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0012"></div>
                  <div className="anons">
                    <div>                      
                        <strong>
                          <p>///</p>
                          <Link to="/gefangnis" className="yellow-underline" style={{ fontSize: '33px' }}>ПЕРЕВОД</Link><br /><br />
                          <p>///</p>
                          <br /><hr></hr> 
                          <p>///</p>
                        </strong>
                    </div>
                  </div>
                  <div className="share_soc">
                    </div>
                </div>
              </div>
            </div>
            <div className="cwc_bot"></div>
          </div>
        </div> */}

        {/* <div className="news_block">
                  <div className="news_block_head">
                    <div className="news_date">
                      <i></i>
                      <a>22 Марта, 2025</a>
                    </div>
                  </div>
                  <div className="content_white_cloud">
                    <div className="cwc_top"></div>
                    <div className="cwc_mid">
                      <div className="news_item">
                        <div className="news_item_one">
                          <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0020"></div>
                          <div className="anons">
                            <div>                      
                                <strong>
                                  <p>Этап — 6. Сделка между ТСМ и КТL. (01.06.2021)</p>
                                  <Link to="/kinotheater/sohnluzifers/ktltag1" className="yellow-underline" style={{ fontSize: '33px' }}>Сын Люцифера — День 1, Игра</Link><br /><br />                     
                                  <p>
                                    В городе Анапа готовится Гастрольный показ Спектакля "Игра".<br/>
                                    Между уполномоченными Представителями было договорено:<br/>
                                    КТL - осуществляет финансирование ТСМ крупной Суммой.<br/>
                                    КТL - получает 33% чистой Прибыли от деятельности ТСМ.
                                    <br/><br/>
                                    P.S. Сделка была закреплена деловым Рукопожатием.
                                    <br/><br/>
                                    P.P.S. Приказ №333 от 30.01.24 - КТL безвозмездно передаёт ТСМ 13% (из 33).
                                    </p>
                                  <br /><hr></hr>
                                  <p>Управляющий: Igor Strez
            <a href="https://vk.com/theatermavrodi" target="_blank" rel="noopener noreferrer">
              <img src="/images/v1.webp" alt="VK" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100056900434020" target="_blank" rel="noopener noreferrer">
              <img src="/images/f2.webp" alt="Facebook" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
            <a href="https://www.youtube.com/channel/UCxq5hrk1N1pZ8_Xmkv4xKLg" target="_blank" rel="noopener noreferrer">
              <img src="/images/y3.webp" alt="YouTube" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
            <a href="https://rutube.ru/channel/39271788/" target="_blank" rel="noopener noreferrer">
              <img src="/images/r4.webp" alt="RuTube" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
                                  </p>
                                  </strong>
                            </div>
                          </div>
                          <div className="share_soc">
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="cwc_bot"></div>
                  </div>
                </div> */}

        {/* <div className="news_block">
                  <div className="news_block_head">
                    <div className="news_date">
                      <i></i>
                      <a>17 Марта, 2025</a>
                    </div>
                  </div>
                  <div className="content_white_cloud">
                    <div className="cwc_top"></div>
                    <div className="cwc_mid">
                      <div className="news_item">
                        <div className="news_item_one">
                          <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0019"></div>
                          <div className="anons">
                            <div>                      
                                <strong>
                                  <p>Этап — 5. Самостоятельность КиноТеатра LUZIFER. (20.12.2020)</p>
                                  <Link to="/kinotheater/sohnluzifers/ktltag83" className="yellow-underline" style={{ fontSize: '33px' }}>Сын Люцифера — День 83, Писатель</Link><br /><br />                     
                                  <Link to="/kinotheater/sohnluzifers/ktltag37" className="yellow-underline" style={{ fontSize: '33px' }}>Сын Люцифера — День 37, Подарок</Link><br /><br />                     
                                  <Link to="/kinotheater/sohnluzifers/ktltag38" className="yellow-underline" style={{ fontSize: '33px' }}>Сын Люцифера — День 38, Шантаж</Link><br /><br />                     
                                  <p>
                                    КиноТеатр - организовал полный Выпуск трёх Экранизаций (Самостоятельно, без какой-либо Помощи), 
                                    в том числе профинансировал все Направления (режиссёрское, рекламное, юридическое и другие).
                                    <br/><br/>
                                    P.S. КиноТеатр - создал Юридическое лицо для показа Фильмов и Спектаклей.
                                  </p>
                                  <br /><hr></hr>
                                  <p>Управляющий: Igor Strez
            <a href="https://vk.com/theatermavrodi" target="_blank" rel="noopener noreferrer">
              <img src="/images/v1.webp" alt="VK" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100056900434020" target="_blank" rel="noopener noreferrer">
              <img src="/images/f2.webp" alt="Facebook" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
            <a href="https://www.youtube.com/channel/UCxq5hrk1N1pZ8_Xmkv4xKLg" target="_blank" rel="noopener noreferrer">
              <img src="/images/y3.webp" alt="YouTube" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
            <a href="https://rutube.ru/channel/39271788/" target="_blank" rel="noopener noreferrer">
              <img src="/images/r4.webp" alt="RuTube" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
                                  </p>
                                  </strong>
                            </div>
                          </div>
                          <div className="share_soc">
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="cwc_bot"></div>
                  </div>
                </div> */}

        {/* <div className="news_block">
                  <div className="news_block_head">
                    <div className="news_date">
                      <i></i>
                      <a>15 Марта, 2025</a>
                    </div>
                  </div>
                  <div className="content_white_cloud">
                    <div className="cwc_top"></div>
                    <div className="cwc_mid">
                      <div className="news_item">
                        <div className="news_item_one">
                          <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0018"></div>
                          <div className="anons">
                            <div>                      
                                <strong>
                                  <p>Этап — 4. Корона и КиноТеатра LUZIFER. (20.05.2020)</p>
                                  <Link to="/kinotheater/sohnluzifers/ktltag9" className="yellow-underline" style={{ fontSize: '33px' }}>Сын Люцифера — День 9, Интервью</Link><br /><br />                     
                                  <p>
                                    КиноТеатр - организовал и профинансировал Кастинг на должность Режиссёра.
                                    <br/><br/>
                                    В следствие этого, Энтузиасты Творчества Сергея Мавроди совместно с Режиссёром и КиноТеатром 
                                    - создали в условиях Пандемии уникальную Экранизацию (онлайн) Спектакля. <br/><br/>
                                    Этот творческий Союз ознаменовал появление Театра Сергея Мавроди.
                                    <Link to="/news/news4" className="yellow-underline2">(Идея создания Театра Сергея Мавроди)</Link>
                                    <br/><br/>
                                    P.S. КиноТеатр - организовал и профинансировал рекламную Компанию представления "Интервью".
                                  </p>
                                  <br /><hr></hr>
                                  <p>Управляющий: Igor Strez
            <a href="https://vk.com/theatermavrodi" target="_blank" rel="noopener noreferrer">
              <img src="/images/v1.webp" alt="VK" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100056900434020" target="_blank" rel="noopener noreferrer">
              <img src="/images/f2.webp" alt="Facebook" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
            <a href="https://www.youtube.com/channel/UCxq5hrk1N1pZ8_Xmkv4xKLg" target="_blank" rel="noopener noreferrer">
              <img src="/images/y3.webp" alt="YouTube" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
            <a href="https://rutube.ru/channel/39271788/" target="_blank" rel="noopener noreferrer">
              <img src="/images/r4.webp" alt="RuTube" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
                                  </p>
                                  </strong>
                            </div>
                          </div>
                          <div className="share_soc">
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="cwc_bot"></div>
                  </div>
                </div> */}

        {/* <div className="news_block">
                  <div className="news_block_head">
                    <div className="news_date">
                      <i></i>
                      <a>10 Марта, 2025</a>
                    </div>
                  </div>
                  <div className="content_white_cloud">
                    <div className="cwc_top"></div>
                    <div className="cwc_mid">
                      <div className="news_item">
                        <div className="news_item_one">
                          <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0017"></div>
                          <div className="anons">
                            <div>                      
                                <strong>
                                  <p>Этап — 3. Первая "неудача" КиноТеатра LUZIFER. (20.05.2018)</p>
                                  <span className="yellow-underline"><a href="https://volga-kaspiy.ru/conflict/v-volzhskom-reshili-postavit-syna-lyutsifera-mavrodi.html/" style={{ fontSize: '21px', textDecorationColor: 'rgb(255, 205, 0)' }} target="_blank" rel="noopener noreferrer">
                                  В Волжском решили поставить «Сына Люцифера» Мавроди</a></span><br/><br/>                       
                                  <p>
                                    КиноТеатр совместно с Энтузиастами Творчества Сергея Мавроди - предпринял "попытку" осуществления Спектакля "Игра" на Сцене города Волжский.
                                    <br/><br/>
                                    P.S. КиноТеатр - возместил затраченные Финансовые средства на Организацию.
                                  </p>
                                  <br /><hr></hr>
                                  <p>Управляющий: Igor Strez
            <a href="https://vk.com/theatermavrodi" target="_blank" rel="noopener noreferrer">
              <img src="/images/v1.webp" alt="VK" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100056900434020" target="_blank" rel="noopener noreferrer">
              <img src="/images/f2.webp" alt="Facebook" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
            <a href="https://www.youtube.com/channel/UCxq5hrk1N1pZ8_Xmkv4xKLg" target="_blank" rel="noopener noreferrer">
              <img src="/images/y3.webp" alt="YouTube" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
            <a href="https://rutube.ru/channel/39271788/" target="_blank" rel="noopener noreferrer">
              <img src="/images/r4.webp" alt="RuTube" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
                                  </p>
                                  </strong>
                            </div>
                          </div>
                          <div className="share_soc">
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="cwc_bot"></div>
                  </div>
                </div> */}

        {/* <div className="news_block">
                  <div className="news_block_head">
                    <div className="news_date">
                      <i></i>
                      <a>08 Марта, 2025</a>
                    </div>
                  </div>
                  <div className="content_white_cloud">
                    <div className="cwc_top"></div>
                    <div className="cwc_mid">
                      <div className="news_item">
                        <div className="news_item_one">
                          <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0016"></div>
                          <div className="anons">
                            <div>                      
                                <strong>
                                  <p>Этап — 2. Явление и Первый шаг КиноТеатра LUZIFER. (10.02.2018)</p>
                                  <Link to="/kinotheater/sohnluzifers" className="yellow-underline" style={{ fontSize: '33px' }}>Сын Люцифера (экранизация)</Link><br /><br />
                                  <p>
                                    КиноТеатр - организовал и Полностью профинансировал Выпуск первого АудиоСпектакля в ВидеоФормате. <br/>
                                    КиноТеатр - организовал и Полностью профинансировал Выпуск первой Экранизации.<br/>
                                    Представители КиноТеатра - приняли личное участие в Съёмках.<br/><br/>
                                    P.S. Создано при Участии - Энтузиастов Творчества Сергея Мавроди. 
                                  </p>
                                  <br /><hr></hr>
                                  <p>Управляющий: Igor Strez
            <a href="https://vk.com/theatermavrodi" target="_blank" rel="noopener noreferrer">
              <img src="/images/v1.webp" alt="VK" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100056900434020" target="_blank" rel="noopener noreferrer">
              <img src="/images/f2.webp" alt="Facebook" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
            <a href="https://www.youtube.com/channel/UCxq5hrk1N1pZ8_Xmkv4xKLg" target="_blank" rel="noopener noreferrer">
              <img src="/images/y3.webp" alt="YouTube" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
            <a href="https://rutube.ru/channel/39271788/" target="_blank" rel="noopener noreferrer">
              <img src="/images/r4.webp" alt="RuTube" width="30" height="30" style={{ marginLeft: '20px' }} />
            </a>
                                  </p>
                                  </strong>
                            </div>
                          </div>
                          <div className="share_soc">
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="cwc_bot"></div>
                  </div>
                </div> */}

        {/* <div className="news_block">
          <div className="news_block_head">
            <div className="news_date">
              <i></i>
              <a>03 Марта, 2025</a>
            </div>
          </div>
          <div className="content_white_cloud">
            <div className="cwc_top"></div>
            <div className="cwc_mid">
              <div className="news_item">
                <div className="news_item_one">
                  <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0015"></div>
                  <div className="anons">
                    <div>                      
                        <strong>
                          <p>Этап — 1. Зарождение КиноТеатра LUZIFER. (05.09.2015)</p>
                          <Link to="/kinotheater/zombi" className="yellow-underline" style={{ fontSize: '33px' }}>ZОМБИ</Link><br /><br />
                          <p>
                            КиноТеатр - осуществил Хорошую финансовую Помощь на развитие Сериала.<br/>
                            КиноТеатр - организовал Локацию для первой Серии в городе Волжский.<br/>
                            Представитель КиноТеатра - принял личное участие в Съёмках. 
                          </p>
                          <br /><hr></hr>
                          <p>Управляющий: Igor Strez
    <a href="https://vk.com/theatermavrodi" target="_blank" rel="noopener noreferrer">
      <img src="/images/v1.webp" alt="VK" width="30" height="30" style={{ marginLeft: '20px' }} />
    </a>
    <a href="https://www.facebook.com/profile.php?id=100056900434020" target="_blank" rel="noopener noreferrer">
      <img src="/images/f2.webp" alt="Facebook" width="30" height="30" style={{ marginLeft: '20px' }} />
    </a>
    <a href="https://www.youtube.com/channel/UCxq5hrk1N1pZ8_Xmkv4xKLg" target="_blank" rel="noopener noreferrer">
      <img src="/images/y3.webp" alt="YouTube" width="30" height="30" style={{ marginLeft: '20px' }} />
    </a>
    <a href="https://rutube.ru/channel/39271788/" target="_blank" rel="noopener noreferrer">
      <img src="/images/r4.webp" alt="RuTube" width="30" height="30" style={{ marginLeft: '20px' }} />
    </a>
                          </p>
                          </strong>
                    </div>
                  </div>
                  <div className="share_soc">
                    </div>
                </div>
              </div>
            </div>
            <div className="cwc_bot"></div>
          </div>
        </div> */}

        <div className="news_block">
          <div className="news_block_head">
            <div className="news_date">
              <i></i>
              <a>23 Февраля, 2025</a>
            </div>
          </div>
          <div className="content_white_cloud">
            <div className="cwc_top"></div>
            <div className="cwc_mid">
              <div className="news_item">
                <div className="news_item_one">
                  <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0014"></div>
                  <div className="anons">
                    <p>                      
                        <strong>
                          <span className='zolt'>
                            Так, ну что...
                            <br />
                            Нужно следовать за Звездой.
                            <br />
                            Скоро - обновление раздела KinoTheater.
                          </span>
                        </strong>
                    </p>
                    <div style={{ position: "relative", paddingTop: "56.25%", width: "100%" }}>
  <iframe
    src="https://player.vimeo.com/video/1058204133?h=131bf8b157&badge=0&autopause=0&player_id=0&app_id=58479"
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
    title="СНЕГ / Сергей Мавроди"
  ></iframe>
</div>

                  </div>
                  <div className="share_soc">
                    </div>
                </div>
              </div>
            </div>
            <div className="cwc_bot"></div>
          </div>
        </div>

        <div className="news_block">
          <div className="news_block_head">
            <div className="news_date">
              <i></i>
              <a>19 Февраля, 2025</a>
            </div>
          </div>
          <div className="content_white_cloud">
            <div className="cwc_top"></div>
            <div className="cwc_mid">
              <div className="news_item">
                <div className="news_item_one">
                  <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0013"></div>
                  <div className="anons">
                    <div>                      
                        <strong>
                          <p>Всё очень просто. Мёртвые почуяли живого.</p>
                          <Link to="/woche" className="yellow-underline" style={{ fontSize: '33px' }}>Неделька</Link><br /><br />
                          <p>Любые вопросы в наш век всевозможных коммуникаций решить можно по телефону, и мое личное присутствие, таким образом, — сплошные понты.</p>
                          <br /><hr></hr> 
                          <span>
          Читайте подборку самых смешных и забавных стихотворений газеты в разделах&nbsp;
          <a href="http://sergey-mavrodi.com/woche/zeitung111" style={{ textUnderlineOffset: '5px' , textDecorationColor: 'rgb(255, 205, 0)' }}>Журнал (Сатира и юмор)</a>&nbsp;и&nbsp;
          <a href="http://sergey-mavrodi.com/woche/zeitung333" style={{ textUnderlineOffset: '5px' , textDecorationColor: 'rgb(255, 205, 0)' }}>Журнал (Переделка песен)</a>. </span>
                          </strong>
                    </div>
                  </div>
                  <div className="share_soc">
                    </div>
                </div>
              </div>
            </div>
            <div className="cwc_bot"></div>
          </div>
        </div>

        <div className="news_block">
          <div className="news_block_head">
            <div className="news_date">
              <i></i>
              <a>11 Февраля, 2025</a>
            </div>
          </div>
          <div className="content_white_cloud">
            <div className="cwc_top"></div>
            <div className="cwc_mid">
              <div className="news_item">
                <div className="news_item_one">
                  <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0012"></div>
                  <div className="anons">
                    <div>                      
                        <strong>
                          <p>Существует только первое место. И − все остальные.</p>
                          <img src="./images/1102.webp" style={{ width: "593px", height: "auto" }} />
                          <p>Заниматься литературным творчеством мне нравится. Поэтому я им и занимаюсь. Я, кстати, считаю (знаю!), что мой литературный дар уж не ниже по крайней мере моего финансового. Так что советую почитать. Настоятельно рекомендую! Не пожалеете! Много нового и неожиданного о себе узнаете.</p>
                          <br /><hr></hr> 
                          <div className="yellow-underline2" style={{ textAlign: "center", marginBottom: "13px" }}>
  <a href="https://sergeymavrodi.narod.ru/" style={{ textDecorationColor: 'rgb(255, 205, 0)' }}>
    https://sergeymavrodi.narod.ru/
  </a>
</div>
<div className="yellow-underline2" style={{ display: "flex", justifyContent: "space-between" }}>
  <a href="https://proza.ru/avtor/mavrodi" style={{ textDecorationColor: 'rgb(255, 205, 0)' }}>
    https://proza.ru/avtor/mavrodi
  </a>
  <a href="https://stihi.ru/avtor/sergeymavrodi" style={{ textDecorationColor: 'rgb(255, 205, 0)' }}>
    https://stihi.ru/avtor/sergeymavrodi
  </a>
</div>
                        </strong>
                    </div>
                  </div>
                  <div className="share_soc">
                    </div>
                </div>
              </div>
            </div>
            <div className="cwc_bot"></div>
          </div>
        </div>

        <div className="news_block">
          <div className="news_block_head">
            <div className="news_date">
              <i></i>
              <a>30 Января, 2025</a>
            </div>
          </div>
          <div className="content_white_cloud">
            <div className="cwc_top"></div>
            <div className="cwc_mid">
              <div className="news_item">
                <div className="news_item_one">
                  <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0011"></div>
                  <div className="anons">
                    <div>                      
                        <strong>
                          <p>Колебаться надо лишь при выборе цели. Далее надо просто действовать.</p>
                          <Link to="/lieder" className="yellow-underline" style={{ fontSize: '33px' }}>Песни</Link><br /><br />
                          <p>Я ничего не читаю, не слушаю и не смотрю. А также, по возможности, ни с кем не общаюсь. Меня вполне устраивает собственное общество. И терпеть не могу события! Это они меня просто обожают.</p>
                          <br /><hr></hr> 
                          <Link to="/lieder/lied4" className="yellow-underline2">Цикл песен "Ромео и Джульетта"</Link>
                        </strong>
                    </div>
                  </div>
                  <div className="share_soc">
                    </div>
                </div>
              </div>
            </div>
            <div className="cwc_bot"></div>
          </div>
        </div>
        
<div className="news_block">
          <div className="news_block_head">
            <div className="news_date">
              <i></i>
              <a>27 Января, 2025</a>
            </div>
          </div>
          <div className="content_white_cloud">
            <div className="cwc_top"></div>
            <div className="cwc_mid">
              <div className="news_item">
                <div className="news_item_one">
                  <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0010"></div>
                  <div className="anons">
                    <div>                      
                        <strong>
                          <p>Всегда стоишь перед выбором: остановиться или идти дальше? И всегда идёшь дальше, хотя следовало бы остановиться. Но остановиться − невозможно.</p>
                          <Link to="/drehbuch" className="yellow-underline" style={{ fontSize: '33px' }}>Киносценарии</Link><br /><br />
                          <p>Изумрудная оса. Знаете, в тропиках живёт? Жалит таракана в мозг, в результате чего тот теряет способность принимать самостоятельные решения. После чего берёт его за усы (за рога!) и ведёт к себе в нору (в стойло!). Где откладывает в него яйца. Вылупившиеся личинки пожирают бедного таракана заживо. Вот так же и женщина. Жалит постоянно. На ментальном уровне. Это у неё инстинктивно. Самой природой заложено. Самка! Сопротивляться невозможно. Физиология. Поэтому нельзя встречаться слишком часто. С одной и той же. Яда слишком много в крови накапливается. Впрочем, рано или поздно всё равно ошибаешься. Природу не обманешь.</p>
                          <br /><hr></hr> 
                          <p>У меня не бывает свободного времени. В обычном понимании этого слова. Мне его всегда катастрофически не хватает. Сколько еще не написано, не сделано!.. Скажем, та же литература. Обычная проблема большинства авторов — отсутствие сюжетов. У меня же проблема прямо противоположная — их избыток! Они переполняют меня! Я не успеваю их записывать! А есть еще ведь и стихи, и сценарии к фильмам. Да и финансовый апокалипсис, мать его! Надо все же доделать. Раз обещал. Время, время!</p>
                        </strong>
                    </div>
                  </div>
                  <div className="share_soc">
                    </div>
                </div>
              </div>
            </div>
            <div className="cwc_bot"></div>
          </div>
        </div>

        <div className="news_block">
          <div className="news_block_head">
            <div className="news_date">
              <i></i>
              <a>24 Января, 2025</a>
            </div>
          </div>
          <div className="content_white_cloud">
            <div className="cwc_top"></div>
            <div className="cwc_mid">
              <div className="news_item">
                <div className="news_item_one">
                  <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0009"></div>
                  <div className="anons">
                    <div>                      
                        <strong>
                          <p>Свобода − это как возможность дышать.</p>
                          <Link to="/gefangnis" className="yellow-underline" style={{ fontSize: '33px' }}>Тюрьма</Link><br /><br />
                          <p>Тюрьма это как свалка. Всё гниёт. Не гниют в этом мире, как известно, только благородные металлы. Золото, платина, серебро. Вот если у вас есть в душе что-то из золота, платины или серебра, это останется. Остальное же… Увы! Ну, если вы, конечно, весь из одних только благородных металлов состоите, то вам никакая тюрьма не страшна. Остальным же − не рекомендуется. Гниль − останется.</p>
                          <br /><hr></hr> 
                          <Link to="/gefangnis/zweiundvierzig" className="yellow-underline42" style={{ textDecorationColor: 'rgb(255, 205, 0)' }}>42</Link>
                        </strong>
                    </div>
                  </div>
                  <div className="share_soc">
                    </div>
                </div>
              </div>
            </div>
            <div className="cwc_bot"></div>
          </div>
        </div>

        <div className="news_block">
          <div className="news_block_head">
            <div className="news_date">
              <i></i>
              <a>20 Января, 2025</a>
            </div>
          </div>
          <div className="content_white_cloud">
            <div className="cwc_top"></div>
            <div className="cwc_mid">
              <div className="news_item">
                <div className="news_item_one">
                  <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0008"></div>
                  <div className="anons">
                    <div>                      
                        <strong>
                          <p>Я не гений. Я — единственный!</p>
                          <Link to="/tagebucher" className="yellow-underline" style={{ fontSize: '33px' }}>Дневники Сына Люцифера</Link><br /><br />
                          <p>У меня присутствует совершенно ясное и чёткое внутреннее… убеждение?.. ощущение?.. что никто, никто! в целом свете не может меня ни искушать, ни соблазнять, ни вообще как-то на меня влиять и воздействовать. НИКТО! Ни Бог, ни Дьявол. Я сам делаю всегда свой выбор. Я и только я!</p>
                          <br /><hr></hr> 
                          <p>Люцифер (Lucifer – «несущий свет», «утренняя звезда», «денница»  лат.)</p>
                        </strong>
                    </div>
                  </div>
                  <div className="share_soc">
                    </div>
                </div>
              </div>
            </div>
            <div className="cwc_bot"></div>
          </div>
        </div>

        <div className="news_block">
          <div className="news_block_head">
            <div className="news_date">
              <i></i>
              <a>17 Января, 2025</a>
            </div>
          </div>
          <div className="content_white_cloud">
            <div className="cwc_top"></div>
            <div className="cwc_mid">
              <div className="news_item">
                <div className="news_item_one">
                  <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0007"></div>
                  <div className="anons">
                    <div style={{ textAlign: 'center' }}>                      
                        <strong>
                          <Link to="/gedichte" className="yellow-underline" style={{ fontSize: '33px' }}>Мои стихи</Link><br /><br />
                          <p style={{textAlign: 'center'}}>
Все пишут спокойно, а я – задыхаясь!<br/>
От гнева и боли<br/>
На стоны срываясь.<br/>
А я – поневоле!<br/>
Тоскуя и маясь.<br/>
От страха и боли<br/>
Боясь задохнуться.<br/>
Заснуть – не проснуться.<br/>
Уйти – не вернуться.<br/>
И не обернуться.</p>
                        </strong>
                    </div>
                  </div>
                  <div className="share_soc">
                   </div>
                </div>
              </div>
            </div>
            <div className="cwc_bot"></div>
          </div>
        </div>

        <div className="news_block">
          <div className="news_block_head">
            <div className="news_date">
              <i></i>
              <a>13 Января, 2025</a>
            </div>
          </div>
          <div className="content_white_cloud">
            <div className="cwc_top"></div>
            <div className="cwc_mid">
              <div className="news_item">
                <div className="news_item_one">
                  <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0006"></div>
                  <div className="anons">
                    <div>                      
                        <strong>
                          <p>Более великой книги, чем «Сын Люцифера» − не существует. <br />Если люди пока этого не понимают − тем хуже для них.</p>
                          <Link to="/sohnluzifers" className="yellow-underline" style={{ fontSize: '33px' }}>Сын Люцифера</Link><br /><br />
                          <p>Это роман. Состоит он из отдельных, независимых новелл–дней, в которых Люцифер показывает Своему Сыну на конкретных жизненных примерах все человеческие пороки. Ставя обычных, простых людей в необычные и непростые отнюдь ситуации, когда им приходится делать выбор. Искушая их! И искушений этих люди большей частью, увы, не выдерживают...</p>
                          <br /><hr></hr> 
                          <p>Роман опубликован целиком, без купюр и именно в авторской редакции.<br />
                          Надеюсь, вам понравится. Да уверен просто! Приятного чтения. :–))</p>
                        </strong>
                    </div>
                  </div>
                  <div className="share_soc">
                    </div>
                </div>
              </div>
            </div>
            <div className="cwc_bot"></div>
          </div>
        </div>

        <div className="news_block">
          <div className="news_block_head">
            <div className="news_date">
              <i></i>
              <a>01 Января, 2025</a>
            </div>
          </div>
          <div className="content_white_cloud">
            <div className="cwc_top"></div>
            <div className="cwc_mid">
              <div className="news_item">
                <div className="news_item_one">
                  <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0005"></div>
                  <div className="anons">
                    <p>                      
                        <strong>
                          <span className='zolt'>
                            Так, ну что...
                            <br />
                            Нужно следовать за Звездой.
                            <br />
                            Скоро - обновление раздела Творчество.
                          </span>
                        </strong>
                    </p>
                  </div>
                  <div className="share_soc">
                    </div>
                </div>
              </div>
            </div>
            <div className="cwc_bot"></div>
          </div>
        </div>


          <div className="news_block">
          <div className="news_block_head">
            <div className="news_date">
              <i></i>
              <a>25 Декабря, 2024</a>
            </div>
          </div>
          <div className="content_white_cloud">
            <div className="cwc_top"></div>
            <div className="cwc_mid">
              <div className="news_item">
                <div className="news_item_one">
                  <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0004"></div>
                  <div className="anons">
                  
                        <strong>
                        <Link to="/news/news4" className="yellow-underline" style={{ fontSize: '33px' }}>Идея создания Театра Сергея Мавроди</Link><br /><br />
                        </strong>
                  
                  </div>
                  <div className="share_soc"> 
                   </div>
                </div>
              </div>
            </div>
            <div className="cwc_bot"></div>
          </div>
        </div> 

<div className="news_block">
          <div className="news_block_head">
            <div className="news_date">
              <i></i>
              <a>19 Декабря, 2024</a>
            </div>
          </div>
          <div className="content_white_cloud">
            <div className="cwc_top"></div>
            <div className="cwc_mid">
              <div className="news_item">
                <div className="news_item_one">
                  <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0003"></div>
                  <div className="anons">
                    <p>                      
                        <strong>
                          <span className='zolt'>
                            "Слухи о моей смерти сильно преувеличены."
                            <br />
                            <br />
                            Цитата.
                          </span>
                        </strong>
                    </p>
                  </div>
                  <div className="share_soc">
                  </div>
                </div>
              </div>
            </div>
            <div className="cwc_bot"></div>
          </div>
        </div>

        <div className="news_block">
          <div className="news_block_head">
            <div className="news_date">
              <i></i>
              <a>05 Августа, 2024</a>
            </div>
          </div>
          <div className="content_white_cloud">
            <div className="cwc_top"></div>
            <div className="cwc_mid">
              <div className="news_item">
                <div className="news_item_one">
                  <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0002"></div>
                  <div className="anons">
                    <p>
                        <strong>
                          <span className='zolt'>
                            Зеркала сайта Сергея Мавроди:
                            <br />
                            <br />
                            <a href="https://www.mavrodi-mmm-2011.com/" target="_blank">www.mavrodi-mmm-2011.com</a>
                            <br />
                            <br />
                            <a href="https://www.sergey-mavrodi.ms/" target="_blank">www.sergey-mavrodi.ms</a>
                          </span>
                        </strong>
                    </p>
                  </div>
                  <div className="share_soc">
                    </div>
                </div>
              </div>
            </div>
            <div className="cwc_bot"></div>
          </div>
        </div>

        <div className="news_block">
          <div className="news_block_head">
            <div className="news_date">
              <i></i>
              <a>29 Июля, 2024</a>
            </div>
          </div>
          <div className="content_white_cloud">
            <div className="cwc_top"></div>
            <div className="cwc_mid">
              <div className="news_item">
                <div className="news_item_one">
                  <div className="liked liked-scope-true" data-liked-type="news" data-liked-id="0001"></div>
                  <div className="anons">
                    <p>                      
                        <strong>
                          <span className='zolt'>
                            Официальный сайт Сергея Мавроди - 
                            <br />
                            функционирует Правильно!
                          </span>
                        </strong>
                    </p>
                  </div>
                  <div className="share_soc">
                    {/* <a data-share-type="fb" href="https://www.facebook.com/sharer/sharer.php?u=ссылка_на_вашу_новость" title="Поделиться Facebook"></a>
                    <a data-share-type="vk" href="https://www.vk.com/share.php?url=ссылка_на_вашу_новость" title="Поделиться Вконтакте"></a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="cwc_bot"></div>
          </div>
        </div>

        {/* <div className="paginator">
          <ul>
            <li className="active">1</li>
            <li><a href="/web/20150419165756/http://3py4p4ods8eqivzcenynzr9rp7gt35bzg399i2tksesul6wmpyfe1nsawtno.com/news/page-2/">2</a></li>
            <li><a href="/web/20150419165756/http://3py4p4ods8eqivzcenynzr9rp7gt35bzg399i2tksesul6wmpyfe1nsawtno.com/news/page-3/">3</a></li>
            <li><a href="/web/20150419165756/http://3py4p4ods8eqivzcenynzr9rp7gt35bzg399i2tksesul6wmpyfe1nsawtno.com/news/page-4/">4</a></li>
            <li><a href="/web/20150419165756/http://3py4p4ods8eqivzcenynzr9rp7gt35bzg399i2tksesul6wmpyfe1nsawtno.com/news/page-5/">5</a></li>
            <li><a href="/web/20150419165756/http://3py4p4ods8eqivzcenynzr9rp7gt35bzg399i2tksesul6wmpyfe1nsawtno.com/news/page-6/">6</a></li>
            <li><a href="/web/20150419165756/http://3py4p4ods8eqivzcenynzr9rp7gt35bzg399i2tksesul6wmpyfe1nsawtno.com/news/page-7/">7</a></li>
            <li><a href="/web/20150419165756/http://3py4p4ods8eqivzcenynzr9rp7gt35bzg399i2tksesul6wmpyfe1nsawtno.com/news/page-8/">8</a></li>
            <li><a href="/web/20150419165756/http://3py4p4ods8eqivzcenynzr9rp7gt35bzg399i2tksesul6wmpyfe1nsawtno.com/news/page-9/">9</a></li>
            <li><a href="/web/20150419165756/http://3py4p4ods8eqivzcenynzr9rp7gt35bzg399i2tksesul6wmpyfe1nsawtno.com/news/page-10/">10</a></li>
            <li><a href="/web/20150419165756/http://3py4p4ods8eqivzcenynzr9rp7gt35bzg399i2tksesul6wmpyfe1nsawtno.com/news/page-11/">&gt;&gt;&gt;</a></li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default News;
