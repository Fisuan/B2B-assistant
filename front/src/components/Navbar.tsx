import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import MySwitch from './UI/switch/MySwitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub} from '@fortawesome/free-brands-svg-icons';
import MyInputPassword from './UI/input/MyInputPassword';
import MyInputUser from './UI/input/MyInputUser';
import MyInputEmail from './UI/input/MyInputEmail';
import './style.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [isActive, setIsActive] = useState(false); 
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Услуги', path: '/services' },
    { name: 'Контакты', path: '/contact' },
  ];

  const toggleForm = (action: string) => {
    setIsActive(action === 'register');
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              B2B Solutions
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              {/* Кнопка регистрации */}
              <button
                onClick={() => setIsModalVisible(true)}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Регистрация
              </button>

              <button className='mb-1' onClick={toggleTheme}>
                <MySwitch toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleTheme}>
              <MySwitch toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-200">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Модальное окно */}
      {isModalVisible && (
        <div
          className={`modal-overlay ${isModalVisible ? 'active' : ''} ${theme === 'dark' ? 'dark' : ''}`}
          onClick={() => setIsModalVisible(false)}
        >
          <div className={`myModalContent ${theme === 'dark' ? 'dark' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className="modal-wrapper">
              <button className="close-btn" onClick={() => setIsModalVisible(false)}>X</button>
              <div className={`container ${isActive ? 'active' : ''}`} id="container">
                <div className="form-container sign-up">
                  <form>
                    <h1>Create Account</h1>
                    <div className="social-icons">
                      <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                      <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                      <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
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
    </nav>
  );
}