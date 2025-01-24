import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Вход</h2>
        
        <form className="mt-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Введите email"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 dark:text-gray-300">Пароль</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Введите пароль"
            />
          </div>

          <button className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Войти
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          Нет аккаунта?{' '}
          <Link to="/signup" className="text-blue-600 dark:text-blue-400 hover:underline">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
}