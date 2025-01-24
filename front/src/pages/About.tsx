import { Award, Users, Globe } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Лет на рынке', value: '10+' },
    { label: 'Довольных клиентов', value: '500+' },
    { label: 'Успешных проектов', value: '1000+' },
  ];

  const team = [
    {
      name: 'Куленбай Жантөре',
      role: 'CEO',
      image: '',
    },
    {
      name: 'Елюбай Ернар',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    },
    {
      name: 'Ахметов Ералы',
      role: 'COO',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    },
  ];

  return (
    <div className="pt-16 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              О нашей компании
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-100">
              Мы помогаем бизнесу расти и развиваться с помощью инновационных технологических решений
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white dark:bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <p className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </p>
                <p className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
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
        </div>
      </div>
    </div>
  );
}