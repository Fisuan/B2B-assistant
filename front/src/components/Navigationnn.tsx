import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import MySwitch from './UI/switch/MySwitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub} from '@fortawesome/free-brands-svg-icons';
import MyInputPassword from './UI/input/MyInputPassword';
import MyInputUser from './UI/input/MyInputUser';
import MyInputEmail from './UI/input/MyInputEmail';
import { Menu, X } from 'lucide-react';
import './style.css';

const Navigationnn = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [isActive, setIsActive] = useState(false); 
  const { theme, toggleTheme } = useTheme();
  const navLinks = [
    { name: 'Главный', path: '/' },
    { name: 'Контакты', path: '/contact' },
    { name: 'B2B-assistant', path: '/chatpage' },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
   
  const toggleForm = (action: string) => {
    setIsActive(action === 'register');
  };
  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.span 
            className="text-xl font-semibold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          ><Link to="/" className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
                        B2B Solutions
            </Link>
          </motion.span>
          
          <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
                <Link
                key={link.path}
                to={link.path}
                className="text-gray-600 font-extrabold dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
              ))}
              <button
                onClick={() => setIsModalVisible(true)}
                className="text-gray-700 font-extrabold dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Регистрация
              </button>
              <button className='mb-1' onClick={toggleTheme}>
                <MySwitch toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
              </button>

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
    className={`modal-overlay ${isModalVisible ? 'active display-flex' : ''} ${theme === 'dark' ? 'dark' : ''}`}
    onClick={() => setIsModalVisible(false)}
  >
    <div className={`myModalContent bg-color-fff text-333 ${theme === 'dark' ? 'dark' : ''}`} onClick={(e) => e.stopPropagation()}>
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
              <span className='text-[12px]'>или используйте ваш email для регистрации</span>
              <MyInputUser />
              <MyInputEmail />
              <MyInputPassword />
              <button className="bg-[#512da8] text-white text-[12px] py-[10px] px-[45px] border-[1px] border-transparent rounded-[8px] font-semibold tracking-[0.5px] uppercase mt-[10px] cursor-pointer" type="button">Зарегистрироваться</button>
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
              <span className='text-[12px]'>или используйте пароль от вашего email</span>
              <MyInputEmail />
              <MyInputPassword />
              <a href="#" className="text-sm text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-all my-4">Забыли пароль?</a>
              <button className="bg-[#512da8] text-white text-[12px] py-[10px] px-[45px] border-[1px] border-transparent rounded-[8px] font-semibold tracking-[0.5px] uppercase mt-[10px] cursor-pointer" type="button">Войти</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>С возвращением!</h1>
                <p className='text-[14px] leading-[20px] tracking-[0.3px] my-[20px]'>Введите ваши данные для доступа ко всем функциям сайта</p>
                <button className="bg-[#512da8] text-white text-[12px] py-[10px] px-[45px] border-[1px] border-transparent rounded-[8px] font-semibold tracking-[0.5px] uppercase mt-[10px] cursor-pointer" onClick={() => toggleForm('login')}>Войти</button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Привет, друг!</h1>
                <p className='text-[14px] leading-[20px] tracking-[0.3px] my-[20px]'>Зарегистрируйтесь с вашими личными данными для доступа ко всем функциям сайта</p>
                <button className="bg-[#512da8] text-white text-[12px] py-[10px] px-[45px] border-[1px] border-transparent rounded-[8px] font-semibold tracking-[0.5px] uppercase mt-[10px] cursor-pointer" onClick={() => toggleForm('register')}>Зарегистрироваться</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
    </motion.nav>
  );
};
export default Navigationnn;