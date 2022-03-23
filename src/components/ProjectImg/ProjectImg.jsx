import React from "react";
import "./ProjectImg.scss";

import img1 from "../../pages/img/P_1.png";
import img2 from "../../pages/img/P_2.jpg";
import img3 from "../../pages/img/P_3.png";
import img4 from "../../pages/img/P_4.jpg";
import img5 from "../../pages/img/P_5.png";
import img6 from "../../pages/img/P_6.jpg";

import Scrollable from "./Scrollable/Scrollable";
import ImageZoom from "react-medium-image-zoom";

const ProjectImg = (props) => {
  const item = [
    { title: img1 },
    { title: img2 },
    { title: img3 },
    { title: img4 },
    { title: img5 },
    { title: img6 }
    
  ];

  return (
    <div className="container">
      <Scrollable _class='items'>
        {
          item.map((v,i)=>{
            return(
              <div key={i} className="item">
                
               <img className="title_img"  src={v.title} alt="" />
              
            </div>
            )
            
          })
        }
      </Scrollable>
    </div>
  );
};

export default ProjectImg;
















