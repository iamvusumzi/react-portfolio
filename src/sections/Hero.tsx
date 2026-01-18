import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  FileText,
  Sparkles,
} from "lucide-react";
import { contactInfo } from "../data";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

interface ParticleProps {
  x: number;
  y: number;
  duration: number;
  delay: number;
}

const Hero = () => {
  const contactLinks = [
    { icon: <Github />, href: contactInfo.github, label: "GitHub" },
    { icon: <Linkedin />, href: contactInfo.linkedin, label: "LinkedIn" },
    { icon: <Mail />, href: `mailto:${contactInfo.email}`, label: "Email" },
    {
      icon: <FileText />,
      href: "https://cvdesignr.com/p/68dfa3dac5f83",
      label: "Resume",
    },
  ];

  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const [isArrowVisible, setIsArrowVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsArrowVisible(scrollPosition < 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use useEffect to generate particle properties once when the component mounts
  useEffect(() => {
    const numParticles = 100;
    const generatedParticles: ParticleProps[] = [];

    // Ensure window is defined before accessing its properties (important for SSR)
    if (typeof window !== "undefined") {
      for (let i = 0; i < numParticles; i++) {
        generatedParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          duration: Math.random() * 3 + 2, // Duration between 2 and 5 seconds
          delay: Math.random() * 2, // Delay between 0 and 2 seconds
        });
      }
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setParticles(generatedParticles);
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-50/20 via-white to-blue-50/20 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary-100/10 to-transparent" />
      </div>

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i} // Using index as key is generally okay here as the list is static after generation
          className="absolute w-1 h-1 bg-primary-300/30 rounded-full"
          initial={{
            x: particle.x,
            y: particle.y, // Use the pre-calculated stable y value
            scale: 0,
            opacity: 0,
          }}
          animate={{
            // Subtle float animation
            y: [
              particle.y,
              particle.y + 10 * (i % 2 === 0 ? 1 : -1), // Move up/down 10px
              particle.y,
            ],
            x: [
              particle.x,
              particle.x + 5 * (i % 3 === 0 ? 1 : -1), // Move left/right 5px
              particle.x,
            ], // Fade in and out
            opacity: [0, 1, 0], // Scale up slightly
            scale: [0, 1, 1],
          }}
          transition={{
            duration: particle.duration, // Use the pre-calculated stable duration
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
            repeatType: "mirror",
            // Use the pre-calculated stable delay
          }}
        />
      ))}

      {/* // Blurred shapes with animation */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Available for new opportunities
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-linear-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
              Vusumzi Msengana
            </span>
          </h1>

          <div className="h-12 mb-6">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Full Stack Developer",
                1000,
                "Tech Enthusiast",
                1000,
                "Open Source Contributor",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300"
              repeat={Infinity}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8"
          >
            I build mission-critical software that scales. As a Software
            Engineer ex-Amazon, I bridge the gap between complex backend logic
            and intuitive user experiences. I use React, Java, and Python to
            build resilient systems that simplify operations and drive
            efficiency. I prioritise clean architecture, automated testing, and
            operational excellence in every line of code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(14, 165, 233, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-3 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary-600 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 group relative overflow-hidden"
              >
                <span className="relative z-10">{link.icon}</span>
                <div className="absolute inset-0 bg-linear-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {isArrowVisible && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          <span>
            <a
              href="#projects"
              aria-label="Go to Projects Section"
              className="flex items-center flex-col text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <ArrowDown className="text-gray-400" />
              <span className="mt-1 text-sm font-medium">Projects</span>
            </a>
          </span>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
