
import './App.css';

function App() {
  return (
    <>
      <div className='header'>
        <div className='logo'>

          <p className='logoText'>c</p>

          <div className='logoSVG'></div>
        </div>
        <div className='menu'>
          <div className='bar'>
            <p className='textHome'>Главная</p>
            <p className='textAboutUs'>О нас </p>
            <p className='textContacts'>Контакты </p>
          </div>
        </div>
      </div>
      {/* <hr className='hr' /> */}
      <div className='main'>

        <p className='numberText'>140</p>

        <div className='buttons'>
          <div className='increase'>
            <p className='textIncrease'>Увеличить</p>
          </div>
          <div className='decrease'>
            <p className='textDecrease'>Уменьшить</p>
          </div>
          <div className='reset'>
            <p className='textReset'>Сбросить</p>
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='footerLogo'>

        </div>
        <div className='footerMenu'>
          <p className='textPartners'>Партнерам</p>
          <p className='textDevelopers'>Разработчикам</p>
          <p className='textVacancies'>Вакансии</p>
        </div>
        <div className='copyright'>ООО "интукод" 2020г</div>
      </div>


    </>
  );
}

export default App;
