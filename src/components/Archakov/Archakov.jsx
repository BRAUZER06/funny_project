import React from "react";
import "./Archakov.scss";
import stick from "../../pages/img/stick.png";
import ArchakovImg from "../../pages/img/image 22.png";

const Archakov = () => {
  return (
    <div className="Archakov">
      <div className="Archakov_header">
        <div>
          <img src={stick} alt="" />
        </div>
        <h2>Кто преподает?</h2>
      </div>
      <div className="Archakov_XTO_YA">
        <div>
          <img src={ArchakovImg} alt="" />
        </div>
        <div className="Archakov_XTO_YA_div">
          <p>Арчаков Дэннис</p>
          <p>Team Lead (fullstack-разработчик)</p>
        </div>
      </div>
      <div className="Archakov_div">
        <p>
          Я фуллстэк-разработчик со стажем <span>более 6+ лет</span>{" "}
          коммерческого опыта.
        </p>
        <br />
        <p>
          На данный момент работаю как тимлид в дубайском стартапе, где руковожу
          командой из 5 человек (фронтенд, бэкенд).{" "}
        </p>
        <br />
        <p>
          Наш проект успешно запущен с нуля в продакшн и уже приносит доход.
        </p>
        <br />
        <p>
          Ранее работал фронтенд-разработчиком над главным сайтом{" "}
          <span>Эльдорадо</span>.
        </p>
        <br />
        <p>
          Веду личный <a className="Archakov_div_a_youtube" >YouTube-канал</a> с аудиторией более{" "}
          <span>41.000+ человек</span>, где обучаю людей фронтенду и бэкенду,
          некоторые из которых благодаря моим бесплатным и платным курсам смогли
          успешно <span>найти работу фронтенд-разработчиком.</span>
        </p>
        <br />
        <p>
          Этот авторский курс разработан исходя из того опыта, что я получил из
          разных компаний и предназначен для начинающих фронтенд-разработчиков.
        </p>
      </div>
    </div>
  );
};

export default Archakov;
