import { CheckCircle, Package, Zap, Database } from 'lucide-react';

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
    <div className="pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Наши услуги
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Комплексные B2B решения для вашего бизнеса
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gray-50 dark:bg-gray-800"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-center text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-center">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}