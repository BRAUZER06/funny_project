import React from "react";
import Button from "../Button/Button";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div>
          <div className="footer_container_flex_media">
            <div className="footer_container_flex_media_content_1">
              <h2>
                Запишись прямо сейчас и получи <span>скидку 50%</span>
              </h2>
              <p className="color_gray">(акция действует до 31 декабря)</p>
              <br />
              <p>
                Начало обучения: <span>сегодня</span>
              </p>
              <p>
                Можно купить <span>в рассрочку</span> и без банка
              </p>
              <br />
            </div>
            <form className="footer_container_flex_media_content_2" action="">
              <input
                type="email"
                placeholder="Укажите ваш Email или Telegram *"
              />
              <input type="text" placeholder="Введите ваше имя *" />
              <div>
                <button>
                  <Button />
                </button>
                <img src="" alt="" />
              </div>
            </form>
          </div>
          <p>
            Нажимая на кнопку, я соглашаюсь на
            <a href="#1">обработку персональных данных</a> <span>и с</span>
            <a href="#!">правилами пользования Платформой</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
