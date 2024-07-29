import React from 'react';
import './News.css'; // не забудьте добавить CSS файл для стилей
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
              <a>03 Августа, 2024</a>
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
                      <a href="https://www.kinotheater-luzifer.com/" target="_blank">
                        <strong>
                          <span className='zolt'>
                            <br />
                            ВНИМАНИЕ!
                            <br />
                            <br />
                            KinoTheater "LUZIFER"
                            <br />
                            Ищет на постоянную занятость:
                            <br />
                            Кинорежиссёра, Аниматора,(и)Творческих людей
                            <br />
                            Цель проекта - экранизация Книги "Сын Люцифера"
                            <br />
                          </span>
                        </strong>
                      </a>
                    </p>
                  </div>
                  <div className="share_soc"> */}
                    {/* <a data-share-type="tw" tw_text="" href="http://3py4p4ods8eqivzcenynzr9rp7gt35bzg399i2tksesul6wmpyfe1nsawtno.com/news/37145-.html" title="Твитнуть"></a>
                    <a data-share-type="fb" href="http://3py4p4ods8eqivzcenynzr9rp7gt35bzg399i2tksesul6wmpyfe1nsawtno.com/news/37145-.html" title="Поделиться Facebook"></a>
                    <a data-share-type="vk" href="http://3py4p4ods8eqivzcenynzr9rp7gt35bzg399i2tksesul6wmpyfe1nsawtno.com/news/37145-.html" title="Поделиться Вконтакте"></a> */}
                  {/* </div>
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
              <a>02 Августа, 2024</a>
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
                      <a href="https://www.wetterpate.de/namenslisten/hochdruckgebiete/hoch2024/index.html" target="_blank">
                        <strong>
                          <span className='zolt'>
                            <br />
                            Информация для Размышления. ))
                            <br />
                            <br />
                            <br />
                          </span>
                        </strong>
                      </a>
                    </p>
                  </div>
                  <div className="share_soc"> */}
                    {/* <a data-share-type="tw" tw_text="" href="/web/20150419165756/http://3py4p4ods8eqivzcenynzr9rp7gt35bzg399i2tksesul6wmpyfe1nsawtno.com/news/37145-.html" title="Твитнуть"></a>
                    <a data-share-type="fb" href="/web/20150419165756/http://3py4p4ods8eqivzcenynzr9rp7gt35bzg399i2tksesul6wmpyfe1nsawtno.com/news/37145-.html" title="Поделиться Facebook"></a>
                    <a data-share-type="vk" href="/web/20150419165756/http://3py4p4ods8eqivzcenynzr9rp7gt35bzg399i2tksesul6wmpyfe1nsawtno.com/news/37145-.html" title="Поделиться Вконтакте"></a> */}
                  {/* </div>
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
                            <br />
                            Официальный сайт Сергея Мавроди - функционирует Правильно!
                            <br />
                            <br />
                            <br />
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
