import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import InstagramIcon from './Images/InstagramIcon.png';
import FacebookIcon from './Images/FacebookIcon.png'
import TwitterIcon from './Images/Twitter Icon.png'
import MyButton from './UI/button/MyButton'

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 py-12 pt-12">
      <div className="container mx-auto px-6 bg-white dark:bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 dark:text-white text-black">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-extrabold mb-6 mt-20 ml-44 sm:ml-52 md:ml-4 lg:ml-14 xl:ml-24 2xl:ml-36">B2B Solutions</h2>
            <h1 className="text-xl">
              Мы предлагаем инновационные решения для бизнеса, оптимизируя процессы и улучшая эффективность с помощью ИИ ассистента.
            </h1>
            <Link
                to="/chatpage"
                className="border border-transparent text-base font-medium rounded-md">
                <MyButton/>
              </Link>
          </motion.div>

          {/* Explore Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="ml-44 sm:ml-52 md:ml-4 lg:ml-14 xl:ml-24 2xl:ml-36" 
          >
            <h2 className="text-2xl font-extrabold mb-6 mt-20">Путеводитель</h2>
            <ul className="space-y-4 text-2xl">
              <li>
                <Link
                  to="/"
                  className="text-xl text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-all"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Главный
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-xl text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-all"
                  onClick={() => window.scrollTo({ top: document.getElementById('features')?.offsetTop, behavior: 'smooth' })}
                >
                  Функции
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-xl text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-all"
                  onClick={() => window.scrollTo({ top: document.getElementById('services')?.offsetTop, behavior: 'smooth' })}
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-xl text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-all"
                  onClick={() => window.scrollTo({ top: document.getElementById('team')?.offsetTop, behavior: 'smooth' })}
                >
                  Наша Команда
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-xl text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-all"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}

          >
            <h2 className="text-2xl font-extrabold mb-6 mt-20 ml-44 sm:ml-52 md:ml-4 lg:ml-14 xl:ml-24 2xl:ml-36">Подпишитесь</h2>
            <div className="flex space-x-6 mb-10">
          <a href="https://www.facebook.com" className="text-3xl hover: " target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" className="w-10 h-10 hover:scale-110 transition-transform duration-300 " />
          </a>
          <a href="https://www.instagram.com" className="text-3xl hover: " target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" className="w-10 h-10 hover:scale-110 transition-transform duration-300 " />
          </a>
          <a href="https://twitter.com" className="text-3xl hover: " target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" className="w-10 h-10 hover:scale-110 transition-transform duration-300 " />
          </a>
          </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom section with copyright */}
      <div className="text-center text-white py-4 ">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} B2B Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};