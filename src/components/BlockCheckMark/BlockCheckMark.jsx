import React from 'react';
import './BlockCheckMark.scss'
import vector from "../../pages/img/Vector.png";
const BlockCheckMark = () => {
  return (
    <div className='BlockCheckMark'>
      <div>
        <ul className='BlockCheckMark_ul'>
          <li><img src={vector} alt="" /><p>Авторский контент</p></li>
          <li><img src={vector} alt="" /><p>Еженедельные мастер-классы</p></li>
          <li><img src={vector} alt="" /><p>Проверка домашних работ</p></li>
          <li><img src={vector} alt="" /><p>Уникальный личный кабинет</p></li>
          <li><img src={vector} alt="" /><p>И это не всё! Читай далее</p></li>
        </ul>
      </div>
    </div>
  );
};

export default BlockCheckMark;