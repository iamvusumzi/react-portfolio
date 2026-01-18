import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experience } from "../data";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-gray-200">
            Work Experience
          </h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card group hover:border-primary-600 dark:hover:border-primary-400 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="text-primary-600" size={20} />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {exp.role}
                      </h3>
                    </div>
                    <h4 className="text-lg text-primary-600 dark:text-primary-400 mb-2">
                      {exp.company}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
