import { motion } from "framer-motion";

export default function HeaderFooter() {
  return (
    <div className="flex items-center justify-center w-full py-10">
      <motion.div
        initial={{ width: 0 }} 
        animate={{ width: "50%" }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-10 bg-white"
      ></motion.div>


      <motion.span
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-4xl font-bold text-gray-300 mx-3"
      >
        {"</>"}
      </motion.span>


      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "50%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-10 bg-white"
      ></motion.div>
    </div>
  );
}