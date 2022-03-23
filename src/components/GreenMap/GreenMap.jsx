import React from "react";
import hh from "../../pages/img/hh.ru__min_ 1.png";
import "./GreenMap.scss";
const GreenMap = () => {
  return (
    <div className="GreenMap">
      <div className="GreenMap_container">
        <p>
          <span>React-разработчик</span>— одна из самых востребованных профессий
          на IT-рынке
        </p>
        <div className="GreenMap_container_div_1">
          <p >2 500</p>
          <p>вакансий в 2022 г.</p>
        </div>
        <div className="GreenMap_container_div_2">
          <div className="GreenMap_container_div_2_1">
            <p>от 60 000</p>
            <p>до 400 000 ₽ </p>
            <p>зарплата React-разработчика</p>
          </div>
          <div className="GreenMap_container_div_2_2">
            <p>Информация с сайта</p>
            <img src={hh} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenMap;
