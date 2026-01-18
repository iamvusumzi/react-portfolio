import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { contactInfo } from "../data";

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: contactInfo.github, label: "GitHub" },
    {
      icon: <Linkedin size={20} />,
      href: contactInfo.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      href: contactInfo.twitter,
      label: "Twitter",
    },
    {
      icon: <Mail size={20} />,
      href: `mailto:${contactInfo.email}`,
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Let's Build Something Amazing
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get in touch for collaborations or just a friendly chat
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-600 dark:hover:border-primary-400 transition-all duration-200"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400">
          <p>
            All rights reserved © {new Date().getFullYear()} - Designed by
            Vusumzi Msengana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
