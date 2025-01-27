import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import MyInputPassword from '../input/MyInputPassword';
import MyInputUser from '../input/MyInputUser';
import MyInputEmail from '../input/MyInputEmail';
import '../../style.css';

export const MyRegistration = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleForm = (action: string) => {
    setIsActive(action === 'register');
  };

  const openModalWithScroll = () => {
    window.scrollTo(0, 0); 
    setTimeout(() => {
      setIsModalVisible(true);
    }, 300); 
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalVisible(false);
      }
    };

    if (isModalVisible) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isModalVisible]);

  return (
    <>
      <button
        onClick={openModalWithScroll} 
        className="text-gray-700 font-extrabold dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        Регистрация
      </button>

      {isModalVisible && (
        <div
          className={`modal-overlay ${isModalVisible ? 'active display-flex' : ''}`}
          onClick={() => setIsModalVisible(false)}
        >
          <div
            className={`myModalContent bg-color-fff text-333`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-wrapper fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
              <button className="close-btn" onClick={() => setIsModalVisible(false)}>X</button>
              <div className={`container ${isActive ? 'active' : ''}`} id="container">
                <div className="form-container sign-up">
                  <form className="bg-white flex items-center justify-center flex-col px-[40px] h-full">
                    <h1>Создать аккаунт</h1>
                    <div className="social-icons">
                      <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                      <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                      <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                    <span className="text-[12px]">или используйте ваш email для регистрации</span>
                    <MyInputUser />
                    <MyInputEmail />
                    <MyInputPassword />
                    <button className="register-btn" type="button">Зарегистрироваться</button>
                  </form>
                </div>

                <div className="form-container sign-in">
                  <form className="bg-white flex items-center justify-center flex-col px-[40px] h-full">
                    <h1>Войти</h1>
                    <div className="social-icons">
                      <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                      <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                      <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                    <span className="text-[12px]">или используйте пароль от вашего email</span>
                    <MyInputEmail />
                    <MyInputPassword />
                    <a href="#" className="forgot-password">Забыли пароль?</a>
                    <button className="login-btn" type="button">Войти</button>
                  </form>
                </div>

                <div className="toggle-container">
                  <div className="toggle">
                    <div className="toggle-panel toggle-left">
                      <h1>С возвращением!</h1>
                      <p>Введите ваши данные для доступа ко всем функциям сайта</p>
                      <button onClick={() => toggleForm('login')}>Войти</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                      <h1>Привет, друг!</h1>
                      <p>Зарегистрируйтесь для доступа ко всем функциям сайта</p>
                      <button onClick={() => toggleForm('register')}>Зарегистрироваться</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};