import { motion } from "framer-motion";
import { skills } from "../data";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
                I am a Software Engineer specialising in mission-critical
                control planes and cloud-native solutions. With a background at
                Amazon (EC2), I bridge full-stack development (React,
                TypeScript) with robust backend systems (Java, Python, AWS) to
                deliver reliable, production-ready software solutions.
              </p>

              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
                My focus is on abstracting complex, high-risk operations into
                user-friendly platforms. I design resilient systems for
                automation and real-time observability, ensuring operators have
                the visibility and control needed to manage global-scale
                operations safely.
              </p>

              <div className="mt-8">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Currently Learning
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS CDK",
                    "Microservices Patterns",
                    "GitHub Actions",
                    "OpenTelemetry",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
