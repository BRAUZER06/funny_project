import React from "react";
import "./ProgramCourse.scss";
import stick from "../../pages/img/stick.png";
const ProgramCourse = () => {
  const one = [
    "Что такое ReactJS и для чего его используют?",
    "Что такое компоненты и зачем они нужны?",
    "Что такое JSX и чем отличается от HTML?",
    "Как передавать данные в компонент?",
    "Стилизация элементов",
    "Разница между функциональным и классовым компонентом",
    "Что такое children?",
    "Создаем первое приложение на ReactJS",
    "Создать классовый и функциональный компонент",
    "Как определить клик по кнопке или изменение инпута",
    "Создать форму авторизации",
    "Превращаем массив объектов в React-компоненты",
    "Что такое state? Чем state отличается от props? let",
    "Что за VirtualDOM?",
  ];
  const two = [
    "Что такое хуки и зачем они нужны?",
    "Условный рендеринг",
    "Контролируемый и неконтролируемый компонент / useState",
    "Создать счетчик",
    " Подъем состояния",
    "Зачем нужен key при рендере списка и почему он важен?",
    "Создать приложение генерации случайных чисел",
    " Жизненный цикл компонента (lifecycle) / useEffect",
    "Что такое контекст и какую задачу он решает?",
    "Избавляемся от 'props drilling' использую контекст",
  ];
  const three = [
    "Используем обычный CSS для стилизации",
    "Подключаем SCSS препроцессор",
    "Используем подход CSS Modules",
    "Какие есть UI-библиотеки для ReactJS?",
    "Изучите библиотеку компонентов Material UI и создайте простую форму",
    "Бонус: стилизация с помощью styled-components",
  ];
  const four = [
    "Создаем страницы для личного сайта",
    "Сделать вывод полной записи по отдельному пути",
    "Создаём компонент Route для вывода компонентов по условию",
    "Узнаем про React Router и подключаем в проект",
    "Выводим страницу 'Ничего не найдено'",
    "Хуки React Router (useHistory, useParams, useLocation, useRouteMatch)",
    "Создаем защищённую страницу",
  ];
  const five = [
    "Создаем форму регистрации с помощью Material UI",
    "Валидируем данные формы вручную",
    "Вывести ошибки в самой форме под полями",
    "Узнаем про React Hook Form и подключаем в проект",
    "Реализовать очистку формы",
    "Делаем более гибкую валидацию с помощью библиотеки yup",
    "Разбиваем форму регистрации на несколько шагов",
    "Используем контекст формы с помощью хука useFormContext",
  ];
  const six = [
    "Вытаскиваем данные с сервера и отображаем в приложении",
    "Переписать getUsers на async/await",
    "Отправляем данные из приложения на сервер",
    "Что такое Axios и чем он лучше fetch?",
    "Отправляем файл на сервер с помощью Axios",
    "Обработка ошибок",
  ];
  const seven = [
    "Что предстоит изучить?",
    "Что такое Redux? Когда он нужен и не нужен?",
    "Изучим хук useReducer",
    "Подготавливаем страницы (список статей, просмотр статьи, создание статьи, профиль)",
    "Подключаем Redux к проекту",
    "Разрабатываем структуру",
    "Что такое action, dispatch, reducer, middleware?",
    "Используем хуки useSelector и useDispatch",
    "Запрашиваем список статей с сервера",
    "Делаем регистрацию и авторизацию",
    "Подключаем библиотеку redux-thunk",
    "Делаем страницу создания статьи",
    "Вывод комментариев",
    "Добавление комментариев",
    "Удаление и редактирование комментариев",
    "Итоговая часть + тест",
    "Деплой проекта",
  ];
  const eight = [
    "Зачем нужны паттерны проектирования и можно ли без них разрабатывать проект?",
    "Какие бывают паттерны в ReactJS?",
    "Stateless Component",
    "Proxy Component",
    "Style Component",
    "HOC (High Order Component)",
    "Container Component",
    "Layout Component",
    "Как грамотно разрабатывать архитектуру приложения?",
    "Кастомный хук",
  ];
  const nine = ["Дипломная работа"];

  return (
    <div className="programCourse">
      <div className="programCourse_div">
        <div>
          <img src={stick} alt="" />
        </div>
        <h2>Программа курса</h2>
      </div>
      <div className="programCourse_list">
        <ul className="programCourse_list_ul">
          <li className="programCourse_list_ul_li">
            <input className="accordion-item__input" type="checkbox" id='accordion-1' />
            <label className="accordion-item__trigger" for='accordion-1'>
            <div className="programCourse_list_ul_li-sub_div">
              <a href="#">1. Базовая информация</a> <span>X</span>
            </div>
            </label>
            <ul className="programCourse_list_ul_li-sub_ul accordion-item__content">
              {one.map((item, index) => (
                <li className="programCourse_list_ul_li-sub_ul_li " key={index}>
                  {1 + index }.
                  {` ` + item} 
                </li>
              ))}
            </ul>
          </li>
          <li className="programCourse_list_ul_li">
          <input className="accordion-item__input" type="checkbox" id='accordion-2' />
          <label className="accordion-item__trigger" for='accordion-2'>
            <div className="programCourse_list_ul_li-sub_div">
              <a href="#">2. Данные, списки, хуки</a> <span>X</span>
            </div>
            </label>
            <ul className="programCourse_list_ul_li-sub_ul accordion-item__content">
              {two.map((item, index) => (
                <li className="programCourse_list_ul_li-sub_ul_li" key={index}>
                  {1 + index }.
                  {` ` + item} 
                </li>
              ))}
            </ul>
          </li>
          <li className="programCourse_list_ul_li">
          <input className="accordion-item__input" type="checkbox" id='accordion-3' />
          <label className="accordion-item__trigger" for='accordion-3'>
            <div className="programCourse_list_ul_li-sub_div">
              <a href="#">3. Стилизация</a> <span>X</span>
            </div>
            </label>
            <ul className="programCourse_list_ul_li-sub_ul accordion-item__content">
              {three.map((item, index) => (
                <li className="programCourse_list_ul_li-sub_ul_li" key={index}>
                  {1 + index }.
                  {` ` + item} 
                </li>
              ))}
            </ul>
          </li>
          <li className="programCourse_list_ul_li">
          <input className="accordion-item__input" type="checkbox" id='accordion-4' />
          <label className="accordion-item__trigger" for='accordion-4'>
            <div className="programCourse_list_ul_li-sub_div">
              <a href="#">4. Навигация</a> <span>X</span>
            </div>
            </label>
            <ul className="programCourse_list_ul_li-sub_ul accordion-item__content">
              {four.map((item, index) => (
                <li className="programCourse_list_ul_li-sub_ul_li" key={index}>
                  {1 + index }.
                  {` ` + item} 
                </li>
              ))}
            </ul>
          </li>

          <li className="programCourse_list_ul_li">
          <input className="accordion-item__input" type="checkbox" id='accordion-5' />
          <label className="accordion-item__trigger" for='accordion-5'>
            <div className="programCourse_list_ul_li-sub_div">
              <a href="#">5. Работа с формами</a> <span>X</span>
            </div >
            </label>
            <ul className="programCourse_list_ul_li-sub_ul accordion-item__content">
              {five.map((item, index) => (
                <li className="programCourse_list_ul_li-sub_ul_li" key={index}>
                  {1 + index }.
                  {` ` + item} 
                </li>
              ))}
            </ul>
          </li>
          <li className="programCourse_list_ul_li">
          <input className="accordion-item__input" type="checkbox" id='accordion-6' />
          
          <label className="accordion-item__trigger" for='accordion-6'>
            <div className="programCourse_list_ul_li-sub_div">
              <a href="#">6. Взаимодействие с сервером </a> <span>X</span>
            </div>
            </label>
            <ul className="programCourse_list_ul_li-sub_ul accordion-item__content">
              {six.map((item, index) => (
                <li className="programCourse_list_ul_li-sub_ul_li" key={index}>
                  {1 + index }.
                  {` ` + item} 
                </li>
              ))}
            </ul>
          </li>
          <li className="programCourse_list_ul_li">
          <input className="accordion-item__input" type="checkbox" id='accordion-7' />
          <label className="accordion-item__trigger" for='accordion-7'>
            <div className="programCourse_list_ul_li-sub_div">
              <a href="#">7. Redux</a> <span>X</span>
            </div>
            </label>
            <ul className="programCourse_list_ul_li-sub_ul accordion-item__content">
              {seven.map((item, index) => (
                <li className="programCourse_list_ul_li-sub_ul_li" key={index}>
                   {1 + index }.
                  {` ` + item} 
                </li>
              ))}
            </ul>
          </li>
          <li className="programCourse_list_ul_li">
          <input className="accordion-item__input" type="checkbox" id='accordion-8' />
          <label className="accordion-item__trigger" for='accordion-8'>
            <div className="programCourse_list_ul_li-sub_div">
              <a href="#">8.  Паттерны, лучшие практики</a> <span>X</span>
            </div>
            </label>
            <ul className="programCourse_list_ul_li-sub_ul accordion-item__content" >
              {eight.map((item, index) => (
                <li className="programCourse_list_ul_li-sub_ul_li" key={index}>
                  {1 + index }.
                  {` ` + item} 
                </li>
              ))}
            </ul>
          </li>
          <li className="programCourse_list_ul_li">
          <input className="accordion-item__input" type="checkbox" id='accordion-9' />
          <label className="accordion-item__trigger" for='accordion-9'>
            <div className="programCourse_list_ul_li-sub_div">
              <a href="#">9. Дипломная работа</a> <span>X</span>
            </div>
            </label>
            <ul className="programCourse_list_ul_li-sub_ul accordion-item__content">
              {nine.map((item, index) => (
                <li className="programCourse_list_ul_li-sub_ul_li" key={index}>
                  {1 + index }.
                  {` ` + item} 
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProgramCourse;
