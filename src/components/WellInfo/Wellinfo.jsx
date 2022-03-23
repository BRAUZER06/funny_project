import React from "react";
import "./wellInfo.scss";
import stick from "../../pages/img/stick.png";
const Well_info = () => {
  return (
    <div className="WellInfo">
      <div>
        <div><img src={stick} alt="" /></div>
        <h2>Что за курс?</h2>
      </div>
      <p>
        Благодаря данному курсу, ты изучишь <span>современный</span> стэк
        технологий, необходимый для <span>трудоустройства</span> на позицию
        React-разработчик.
      </p>
      <br />
      <p>
        Разработаешь <span>+5 проектовв портфолио</span> с уникальным
        интерфейсом. Вот некоторые:
      </p>
    </div>
  );
};

export default Well_info;
