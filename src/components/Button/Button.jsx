import React from 'react';
import arrow from '../../pages/img/Group.png'
import './Button.scss'


const Button = () => {
  return (
    <div className='button_green'>
      <a className='button_green_a' href="#">Записаться сейчас </a>
      <img className='button_green_a_img' src={arrow} alt="" />
    </div>
  );
};

export default Button;