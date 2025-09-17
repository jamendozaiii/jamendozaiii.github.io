import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Music, Gamepad2, BookOpen, Tv } from 'lucide-react';

const Interests = () => {
  const interests = [
    { icon: Utensils, label: "Amateur Chef" },
    { icon: Music, label: "Musicophile" },
    { icon: Gamepad2, label: "Video Games" },
    { icon: BookOpen, label: "Manga" },
    { icon: Tv, label: "Anime" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Personal <span className="gradient-text">Interests</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond the data, here's a glimpse into what makes me, me.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect rounded-2xl p-6 flex flex-col items-center justify-center gap-3 w-40 h-40 text-center hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="w-10 h-10 text-yellow-300" />
                <span className="text-gray-200 font-medium">{interest.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;