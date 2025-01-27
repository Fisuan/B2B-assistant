import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import MyButton from '../components/UI/button/MyButton.tsx';
import { Features } from '../components/Features.tsx';
import Services  from '../components/Services.tsx';
import { Footer } from '../components/Footer.tsx';
import {OurTeam} from '../components/OurTeam.tsx'

export default function Home() {
  

 

  return (
    <div className="pt-16 h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 h-full">

      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/3 left-1/4 right-1/4 text-center"
        >
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              Инновационные B2B решения
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Развивайте свой бизнес с помощью внедренного Специализированного Искусственного Интеллекта
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link
                to="/chatpage"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md">
                <MyButton/>
              </Link>
            </div>
          </motion.div>
      </div>
  
       <Features/>
       <Services/>
       <OurTeam/>
      
      <Footer/>
    </div>
    
  );
};