import { motion } from "framer-motion";
import { Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Code className="text-white text-sm" size={16} />
            </div>
            <span className="text-xl font-bold">Sri Priya</span>
          </div>
          <p className="text-gray-400 mb-6">
            Full-Stack Web Developer
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              © 2024 Sri Priya. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
