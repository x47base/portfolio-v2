"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import DarkLightModeSwitch from "./DarkLightModeSwitch";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
];

function Nav() {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8 items-center justify-center">
            {links.map((link, index) => {
                return (
                    <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href={link.path}
                            className={`${link.path === pathname && "text-accent dark:text-accent border-b-2 border-accent dark:border-accent"} capitalize font-medium hover:text-accent dark:hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    </motion.div>
                );
            })}
            <div className="flex items-center">
                <DarkLightModeSwitch />
            </div>
        </nav>
    );
}

export default Nav;
