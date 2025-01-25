import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../context/ThemeContext';
import MyInputPassword from './UI/input/MyInputPassword';
import MyInputUser from './UI/input/MyInputUser';
import MyInputEmail from './UI/input/MyInputEmail';

interface MyRegistrationProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyRegistration: React.FC<MyRegistrationProps> = ({ visible, setVisible }) => {
  const [isActive, setIsActive] = useState(false);
  const { theme } = useTheme();

  const toggleForm = (action: string) => {
    setIsActive(action === 'register');
  };

  return (
    <>
      <button
        onClick={() => setVisible(true)}
        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
      >
        Регистрация
      </button>
      
      {visible && (
        <div
          className={`modal-overlay ${visible ? 'active' : ''} ${theme === 'dark' ? 'dark' : ''}`}
          onClick={() => setVisible(false)}
        >
          <div className={`myModalContent ${theme === 'dark' ? 'dark' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className="modal-wrapper">
              <button className="close-btn" onClick={() => setVisible(false)}>X</button>
              <div className={`container ${isActive ? 'active' : ''}`} id="container">
                {/* Форма регистрации и входа */}
                <div className="form-container sign-up">
                  <form>
                    <h1>Create Account</h1>
                    <div className="social-icons">
                      <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                      <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                      <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                      <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span>or use your email for registration</span>
                    <MyInputUser />
                    <MyInputEmail />
                    <MyInputPassword />
                    <button type="button">Sign Up</button>
                  </form>
                </div>
                <div className="form-container sign-in">
                  <form>
                    <h1>Sign In</h1>
                    <div className="social-icons">
                      <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                      <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                      <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                    <span>or use your email password</span>
                    <MyInputEmail />
                    <MyInputPassword />
                    <a href="#">Forget Your Password?</a>
                    <button type="button">Sign In</button>
                  </form>
                </div>
                {/* Панель переключения формы */}
                <div className="toggle-container">
                  <div className="toggle">
                    <div className="toggle-panel toggle-left">
                      <h1>Welcome Back!</h1>
                      <p>Enter your personal details to use all of site features</p>
                      <button onClick={() => toggleForm('login')}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                      <h1>Hello, Friend!</h1>
                      <p>Register with your personal details to use all of site features</p>
                      <button onClick={() => toggleForm('register')}>Sign Up</button>
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

export default MyRegistration;