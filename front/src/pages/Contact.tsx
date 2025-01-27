import { Mail, Phone, MapPin } from 'lucide-react';
import { useState,useEffect } from 'react';
import { motion } from "framer-motion";
import { Footer } from '../components/Footer';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0); // Этот код будет запускаться каждый раз при загрузке страницы
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Свяжитесь с нами
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Мы всегда готовы помочь вам с вашими бизнес-задачами
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 pb-28">
          {/* Contact Information */}
          <div className="space-y-8 pl-6 md:pl-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white ml-24">
          Контактная информация
          </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  kulenbai_zh0922@pvl.nis.edu.kz
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  +7 (707) 744-03-18
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  Павлодар, ул. Ткачева 16/2
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Имя
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Сообщение
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            
              <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 py-4 bg-primary text-secondary rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Отправить
            </motion.button>
          
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}