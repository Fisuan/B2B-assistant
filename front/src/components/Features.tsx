import { motion } from "framer-motion";
import { BarChart, Shield, Users } from 'lucide-react';
import BrainIcon from '../components/Images/BrainIcon.png';

const features = [
  {
    icon: <BarChart className="h-6 w-6 text-blue-600" />,
    title: 'Аналитика бизнеса',
    description: 'Получите глубокое понимание вашего бизнеса с помощью передовой аналитики',
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: 'Безопасность данных',
    description: 'Защита ваших данных с использованием современных технологий шифрования',
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: 'Командная работа',
    description: 'Эффективное взаимодействие и совместная работа в команде',
  },
  {
    icon: <img src={BrainIcon} alt="Brain" className="h-6 w-6" />,
    title: 'Адаптированный Искусственный Интеллект',
    description: 'Эффективные решения от Специализированного Искусственного Интелекта',
  },
];


export const Features = () => {
  return (
    <div id="features" className="py-26 bg-white dark:bg-gray-900 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
          >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Почему выбирают нас
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Мы предоставляем комплексные решения для развития вашего бизнеса
          </p>
        </motion.div>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-8 rounded-2xl bg-primary/50 backdrop-blur-sm border border-accent/10 hover:border-accent/20 transition-all"
                >
                  <div className="pt-6 px-6 pb-8 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden text-center">
                    <div className="flex justify-center">{feature.icon}</div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};