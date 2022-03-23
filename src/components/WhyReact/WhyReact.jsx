import React from "react";
import stick from "../../pages/img/stick.png";
import "./whyReact.scss";
const WhyReact = () => {
  return (
    <div className="WhyReact">
      <div>
        <div>
          <img src={stick} alt="" />
        </div>
        <h2>Почему ReactJS?</h2>
      </div>
      
      <p>
        Вероятней всего ты попал на эту страницу потому, что интересуешься
        JavaScript
      </p>
      <br />
      <p>
        Если говорить коротко, то ReactJS это самая популярная библиотека для
        разработки веб-приложений (от компании Facebook “Meta”)
      </p>
      <br />
      <p>
        Её используют такие крупные сайтый, как:
        <span>
          Instagram, Facebook, Twitter, AirBnB, Вконтакте, Mail.Ru, Эльдорадо
        </span>
        и т.д.
      </p>
    </div>
  );
};

export default WhyReact;
