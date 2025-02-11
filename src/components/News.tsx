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
  <a href="http://sergey-mavrodi.com/woche/zeitung111">Журнал (Сатира и юмор)</a>&nbsp;и&nbsp;
  <a href="http://sergey-mavrodi.com/woche/zeitung333">Журнал (Переделка песен)</a>.
</span>
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
                          <img src="./images/1102.png" style={{ width: "593px", height: "auto" }} />
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
                    <p>
                        <strong>
                          <span className='zolt1'>
                          <span className='zolt'>Театрализованная экранизация Идеологии МММ.</span>
                            <br />
                            <br />
                            Внимание! Всем участникам и руководителям МММ. Объявление!
                            <br />
                            <br />
                            Все мы отлично понимаем и знаем, почти что наизусть текст Идеологии МММ,
но для людей, которые пока не знакомы с МММ и смотрят этот фильм впервые,
кое-что все еще остается непонятным, в том числе и некоторые принципиальные
моменты, показанные и озвученные в фильме. Что бы показать наглядно а также
выразить в более яркой форме то, что происходит сейчас в Мировой экономике,
всем участникам и руководителям МММ предлагается рассмотреть возможность
написать небольшой сценарий и организовать театрализованное представление,
в котором будут наглядно показаны действия таких организаций, как ФРС, Банки
и всех, кто стоит в цепочке, начиная от производства (печати) денежных купюр
и до тех, кому приходится эти деньги заРАБатывать, тех, кто считает, что деньги
с неба не валятся, что их надо в поте лица... и т.д. Тот же пример с Петей и Олей
и банкиром Иваном Ивановичем, хорошо бы показать на живом примере, причем
в буквальном смысле слова, а связь ФРС с Центральными банками государств,
а также с другими банками, да и с народом в том числе, показать цепями или
веревкой. В общем, в спектакле необходимо наглядно показать движение денег
в современном обществе, что бы зритель мог сразу же уличить все банки в том,
что в их действиях есть признаки состава преступления, предусмотренные статьей
159 УК РФ -- Мошенничество. И ведь во всех странах-то все банки точно такие же!
Далее необходимо показать, как МММ на практике разрывает этот порочный круг 
и "заставляет" деньги двигаться совсем по другим принципам, которые дают всем
и каждому возможность быть независимым от хозяев (тех, кто деньги печатает).
В общем, для начала необходим сценарий, который будет создаваться силами
всех желающих. Что касается организации театрализованного представления,
то тут необходимо отметить, что после того, как сценарий будет утвержден, можно
будет делать постановку хоть в каждом городе, никаких проблем, другое дело,
что потом необходимо будет выбрать лучшие из театрализованных представлений.
                            <br />
                            <br />
                            P.S.: 
                            <br />1. Мероприятие проводится в рамках всей Системы МММ 
                            <br />2. Принять участие в создании сценария может каждый 
                            <br />3. Сценарий утверждается СПМ и публикуется на сайте 
                            <br />4. По утвержденному сценарию регионы ставят спектакль 
                            <br />5. Из всех спектаклей отбирается лучший и публикуется 
                            <br />
                            <br />
                            Пишите на: theatermavrodi@gmail.com
                            <br />
                            <br />
                            <u>Опубликовано: 23.08.2013</u>
                            <br />
                            <br />
                            <span className='zolt3'>Первая (публичная!) Идея - создания Театра Сергея Мавроди,
                            <br />
                            опубликованная на Официальном сайте Сергея Мавроди 
                            <br />
                            и одобренная лично Сергеем Мавроди.</span>
                            <br />
                            <br />
                            <img 
                            src="./images/tki.png" 
                            style={{ width: "593px", height: "auto" }} />
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
