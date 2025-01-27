import { motion } from "framer-motion";
import ernarPhoto from '../components/Images/ErnarPhoto.jpg';
import zhantoPhoto from '../components/Images/ZhantoPhoto.jpg';

const team = [
    {
      name: 'Куленбай Жантөре',
      role: 'CEO',
      image: zhantoPhoto,
      instagram: "fi_suan",
      instaLink: "https://www.instagram.com/fi_suan",
    },
    {
      name: 'Ахметов Ералы',
      role: 'CIO',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
      instagram: "_akhmk_",
      instaLink: "https://www.instagram.com/_akhmk_",
    },
    {
      name: 'Елюбай Ернар',
      role: 'CCO',
      image: ernarPhoto,
      instagram: "ernaar_0",
      instaLink: "https://www.instagram.com/ernaar_0",
    },
  ];


export const OurTeam = () => {
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
          Наша команда
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          Профессионалы, которые делают ваш бизнес лучше
          </p>
        </motion.div>


        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
                {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-8 rounded-2xl bg-primary/50 backdrop-blur-sm border border-accent/10 hover:border-accent/20 transition-all"
                >
                  <div className="pt-6 px-6 pb-8 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden text-center">
                    <div className="flex justify-center"><img
            className="mx-auto h-40 w-40 rounded-full"
            src={member.image}
            alt={member.name}
          /></div>
                    <div className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      {member.name}
                    </div>

                    <div className="text-blue-600 dark:text-blue-400">insta:@<a href={member.instaLink}>{member.instagram}</a></div> 
                    <div className="text-blue-600 dark:text-blue-400">{member.role}</div>
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
