import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import MySwitch from './UI/switch/MySwitch';
import { Menu, X } from 'lucide-react';
import { MyRegistration } from './UI/button/MyRegistration';
import WebIcon from './Images/photo_2025-01-27_21-28-19-removebg.png'


const Navigationnn = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
   
  
  return (
    <motion.nav
      className={`fixed w-full z-[50] transition-all duration-300 ${
        scrolled
    ? theme === 'dark'
      ? 'bg-gray-900/80 backdrop-blur-lg shadow-sm'
      : 'bg-white/80 backdrop-blur-lg shadow-sm'
    : 'bg-transparent'
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
          ><Link to="/" className="flex text-2xl font-extrabold" style={{ color: 'rgb(11, 34, 245)' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      <img src={WebIcon} className=' h-16 w-20'/> <p className='mt-4'>B2B Solutions</p>
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
              <MyRegistration/>
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

      
    </motion.nav>
  );
};
export default Navigationnn;