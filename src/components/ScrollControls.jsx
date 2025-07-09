import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ScrollControls = ({ scrollToTop, scrollToBottom }) => {
  return (
    <div className="scroll-indicator">
      <div className="flex flex-col space-y-2">
        <motion.button
          onClick={scrollToTop}
          className="w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp className="w-6 h-6 text-gray-700" />
        </motion.button>
        
        <motion.button
          onClick={scrollToBottom}
          className="w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDown className="w-6 h-6 text-gray-700" />
        </motion.button>
      </div>
    </div>
  );
};

export default ScrollControls;