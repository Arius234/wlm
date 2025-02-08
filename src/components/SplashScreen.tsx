"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function SplashScreen({ onAnimationEnd }: { onAnimationEnd: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      onAnimationEnd();
    }, 2000); 
    return () => clearTimeout(timeout);
  }, [onAnimationEnd]);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #f3336d, #ff3762, #ff574c)",
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <motion.img
        src="/components/splashscreen/love.png" 
        alt="WhoLikeMe Logo"
        className="w-32 h-32"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.3, 1, 1.3, 1] }} 
        transition={{ duration: 1.2, times: [0, 0.3, 0.6, 0.9, 1] }}
      />
    </motion.div>
  );
}
