import React from "react";
import "./App.scss";
import Archakov from "./components/Archakov/Archakov";
import BlockCheckMark from "./components/BlockCheckMark/BlockCheckMark";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import GreenMap from "./components/GreenMap/GreenMap";
import Header from "./components/Header/Header";
import ProgramCourse from "./components/ProgramCourse/ProgramCourse";
import ProjectImg from "./components/ProjectImg/ProjectImg";
import WellInfo from "./components/WellInfo/Wellinfo";
import WhyReact from "./components/WhyReact/WhyReact";

function App() {
  return (
    <div>
      <div className="body">
        <div className="header_color_blue">
          {/* Тут нужно добавить картинку "react" на задний фон  */}
          <Header /> 
          <div className="button_color_green">
            <Button />
          </div>
        </div>
        <div>
          <WellInfo />
        </div>
        <div>
          {/* Тут нужно сделать нормальный слайдер, лучше переписать код */}
          <ProjectImg/>
          </div>
        <div>
          <BlockCheckMark />
        </div>
        <div>
          <WhyReact />
        </div>
        <div>
          <GreenMap />
        </div>
        <div>
          {/* Тут нужно сделать открывающийся список, лучше переписать код */}
          <ProgramCourse />
        </div>
        <div>
          <Archakov />
        </div>
        {/* Тут просто нужно сделать логику отправки формы */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
