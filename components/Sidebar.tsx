"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";

import { BiSearch } from "react-icons/bi";

import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        }
    ], [pathname]);

    return (
        <div className="flex h-full">
            <div className="hidden 
            md:flex 
            flex-col
            gap-y-2
          bg-black
            h-full
            w-[5rem]
            p-2">
            <Box>
                <div className="flex
                flex-col
                gap-4
                items-center">
                {routes.map((item) => (
                    <SidebarItem
                    key={item.label}
                    {...item}
                    />
                ))}
                </div>
            </Box>
            <Box className="overflow-y-auto h-full">
                Song Library
            </Box>
            </div>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Sidebar;