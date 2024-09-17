import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const DarkLightModeSwitch = () => {
    const [isDarkMode, setDarkMode] = useState<boolean>(
        typeof window !== "undefined" &&
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    return (
        <motion.button
            onClick={() => setDarkMode(!isDarkMode)}
            className="flex justify-center items-center rounded-full transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {isDarkMode ? <MdLightMode size={24} className="text-sun" /> : <MdDarkMode size={24} className="text-night" />}
        </motion.button>
    );
};

export default DarkLightModeSwitch;
