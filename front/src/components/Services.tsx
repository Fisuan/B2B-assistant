import { CheckCircle, Package, Zap, Database } from 'lucide-react';
import { motion } from "framer-motion";

export default function Services() {
  

const services = [
  {
    icon: <Package className="h-12 w-12 text-blue-600" />,
    title: 'Управление проектами',
    description: 'Комплексные решения для эффективного управления проектами любой сложности',
    features: [
      'Планирование проектов',
      'Отслеживание задач',
      'Управление ресурсами',
      'Отчетность'
    ]
  },
  {
    icon: <Zap className="h-12 w-12 text-blue-600" />,
    title: 'Процессы с помощью Искусственного Интеекта',
    description: 'Оптимизация бизнес-процессов с помощью современных технологий',
    features: [
      'Роботизация процессов',
      'Интеграция Искусственного Интелекта',
      'Оптимизация workflow',
      'Аналитика эффективности'
    ]
  },
  {
    icon: <Database className="h-12 w-12 text-blue-600" />,
    title: 'Управление данными',
    description: 'Эффективные решения для работы с большими данными',
    features: [
      'Хранение данных',
      'Анализ данных',
      'Защита информации',
      'Резервное копирование'
    ]
  }
];
  return (
    <div id="services" className="py-26 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
          >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Наши услуги
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          Комплексные B2B решения для вашего бизнеса
          </p>
        </motion.div>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((feature, index) => (
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
                  
                  <ul className="mt-6 space-y-3">
                {feature.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
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