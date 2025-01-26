import { BarChart, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrainIcon from './ImagesForPages/BrainIcon.png';
import ernarPhoto from './ImagesForPages/ErnarPhoto.jpg';
import zhantoPhoto from './ImagesForPages/ZhantoPhoto.jpg';
import MyButton from '../components/UI/button/MyButton.tsx';

export default function Home() {
  const team = [
    {
      name: 'Куленбай Жантөре',
      role: 'CEO',
      image: zhantoPhoto,
    },
    {
      name: 'Ахметов Ералы',
      role: 'CIO',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    },
    {
      name: 'Елюбай Ернар',
      role: 'CCO',
      image: ernarPhoto,
    },
  ]
  const team2 = [
    {
      name: 'Зейнолла Мағжан',
      role: 'CPO',
      image: zhantoPhoto,
    },
    {
      name: 'Берікұлы Сабыр',
      role: 'CTO',
      image: zhantoPhoto,
    },
  ];

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

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
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
          </div>
        </div>
      </div>
  
      {/* Features Section */}
      <div className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Почему выбирают нас
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Мы предоставляем комплексные решения для развития вашего бизнеса
            </p>
          </div>
  
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="pt-6 px-6 pb-8 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden text-center">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
  
      {/* Team Section */}
      <div className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Наша команда
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Профессионалы, которые делают ваш бизнес лучше
            </p>
          </div>
  
          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="space-y-4">
                  <img
                    className="mx-auto h-40 w-40 rounded-full"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      {member.name}
                    </div>
                    <div className="text-blue-600 dark:text-blue-400">{member.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
            {team2.map((member, index) => (
              <div key={index} className="text-center p-0 m-0">
                <div className="space-y-4">
                  <img
                    className="mx-auto h-40 w-40 rounded-full"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      {member.name}
                    </div>
                    <div className="text-blue-600 dark:text-blue-400">{member.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};