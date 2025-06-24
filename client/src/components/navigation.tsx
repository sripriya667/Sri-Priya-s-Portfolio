import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChartNetwork, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-md"
      } border-b border-gray-200/50`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <ChartNetwork className="text-white text-sm" size={16} />
            </div>
            <span className="text-xl font-bold text-gray-900">Sri Priya</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-gray-700" size={20} />
            ) : (
              <Menu className="text-gray-700" size={20} />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white border-t border-gray-200"
        >
          <div className="flex flex-col space-y-4 px-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-left"
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
