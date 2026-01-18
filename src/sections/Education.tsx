import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { education } from "../data";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-gray-200">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.institution}-${edu.degree}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card hover:border-primary-600 dark:hover:border-primary-400 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <GraduationCap className="text-primary-600" size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 mb-2">
                      {edu.degree}
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                {edu.description && (
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
