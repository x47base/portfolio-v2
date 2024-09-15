"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <motion.div key={index} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Link
                            href={link.path}
                            className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    </motion.div>
                );
            })}
        </nav>
    );
}

export default Nav;
