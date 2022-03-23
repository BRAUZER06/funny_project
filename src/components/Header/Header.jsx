import React from "react";
import  './header.scss'
import  Group from '../../pages/img/Group 6.svg'
import Svg from "../../pages/img/21.svg"

const Header = () => {
  return (
    <div className="header">
      {/* <img className="header_svg"  width={800} src={Svg} alt="" /> */}
      <h1 className="header_h1">
        Онлайн-курс по <span className="header_h1_span">ReactJs</span>
      </h1>
      <p className="header_p">
        
        От автора YouTube-канала  <a href="https://www.youtube.com/c/ArchakovBlog"><img className="header_p_img" src={Group} alt="" />
        <span className="header_p_span">Archakov Blog </span></a> с аудиторией более
        <span className="header_p_span"> +41.000</span> подписчиков
      </p>
    </div>
  );
};

export default Header;
