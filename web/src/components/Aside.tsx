"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Home,
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    ChevronUp,
    Calculator,
    Cpu,
    BookMarkedIcon,
    NotebookPen,
    CalendarFold,
    LayoutGrid,
    Atom,
    BookA
} from 'lucide-react';

interface MenuItem {
    label: string;
    href: string;
    icon?: React.ReactNode;
    subItems?: MenuItem[];
}

interface AsideProps {
    children: React.ReactNode;
}

const Aside: React.FC<AsideProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [mobileOpenSubMenu, setMobileOpenSubMenu] = useState<string | null>(null);

    const menuItems: MenuItem[] = [
        { label: 'Home', icon: <Home size={24} className='text-blue-500' />, href: '/' },
        { label: 'Matemática', icon: <Calculator size={24} className='text-blue-500' />, href: '/modules/math' },
        { label: 'Física', icon: <Atom size={24} className='text-blue-500' />, href: '/modules/physics' },
        { label: 'Português', icon: <BookA size={24} className='text-blue-500' />, href: '/modules/port' },
        { label: 'Inglês', icon: <BookMarkedIcon size={24} className='text-blue-500' />, href: '/modules/english' },
        { label: 'Programação', icon: <Cpu size={24} className='text-blue-500' />, href: '/modules/prog' },
        { label: 'Github', icon: <Cpu size={24} className='text-blue-500' />, href: 'modules/github' },
        { label: 'Chat PDF', icon: <NotebookPen size={24} className='text-blue-500' />, href: '/chat' },
    ];

    const mobileNavItems = [
        { label: 'Home', icon: <Home size={24} className='text-blue-500' />, href: '/' },
        {
            label: 'Módulos',
            icon: <LayoutGrid size={24} className='text-blue-500' />,
            subItems: [
                { label: 'Matemática', icon: <Calculator size={24} className='text-blue-500' />, href: '/modules/math' },
                { label: 'Física', icon: <Atom size={24} className='text-blue-500' />, href: '/modules/physics' },
                { label: 'Português', icon: <BookA size={24} className='text-blue-500' />, href: '/modules/port' },
                { label: 'Inglês', icon: <BookMarkedIcon size={24} className='text-blue-500' />, href: '/modules/english' },
                { label: 'Programação', icon: <Cpu size={24} className='text-blue-500' />, href: '/modules/prog' },
                { label: 'Github', icon: <Cpu size={24} className='text-blue-500' />, href: 'modules/github' },
                { label: 'Chat PDF', icon: <NotebookPen size={24} className='text-blue-500' />, href: '/chat' }
            ]
        },
    ];

    const updateSidebarState = () => {
        const width = window.innerWidth;
        setIsMobile(width < 768);
        if (width < 1024) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    useEffect(() => {
        updateSidebarState();
        window.addEventListener('resize', updateSidebarState);

        return () => {
            window.removeEventListener('resize', updateSidebarState);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (mobileOpenSubMenu && !target.closest('.mobile-nav-button')) {
                setMobileOpenSubMenu(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [mobileOpenSubMenu]);

    const toggleSidebar = () => {
        setIsOpen((prev) => {
            const newState = !prev;
            if (!newState) {
                setOpenSubMenu(null);
            }
            return newState;
        });
    };

    const toggleSubMenu = (menu: string) => {
        if (!isOpen) {
            setIsOpen(true);
        }
        setOpenSubMenu(openSubMenu === menu ? null : menu);
    };

    const toggleMobileSubMenu = (menu: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setMobileOpenSubMenu(prevMenu => prevMenu === menu ? null : menu);
    };

    return (
        <div className="flex min-h-screen relative">
            <nav
                className={`bg-slate-900 ${isOpen ? 'w-screen fixed md:w-[250px] md:relative' : 'w-[80px]'} min-h-screen transition-all duration-300 shrink-0 z-50 md:block ${isMobile && !isOpen ? 'hidden' : ''}`}
            >
                <ul className="list-none p-4 h-screen overflow-y-auto">
                    <li className="flex justify-between items-center mb-4">
                        <span className={`${isOpen ? 'font-semibold' : 'hidden'} text-white text-lg ml-4`}>
                            Study Assistant
                        </span>
                        <button onClick={toggleSidebar} id="toggle-btn">
                            {isOpen ? (
                                <ChevronLeft size={24} className="text-white" />
                            ) : (
                                <ChevronRight size={24} className="text-white ml-3" />
                            )}
                        </button>
                    </li>

                    {menuItems.map((item, index) => (
                        <li key={index} className="mb-4">
                            {item.subItems ? (
                                <>
                                    <button
                                        onClick={() => toggleSubMenu(item.label)}
                                        className="flex items-center justify-between gap-4 p-3 rounded hover:bg-gray-800 w-full text-left"
                                    >
                                        <div className="flex items-center gap-4">
                                            {item.icon}
                                            <span className={`${isOpen ? 'block' : 'hidden'} text-gray-200`}>
                                                {item.label}
                                            </span>
                                        </div>
                                        {isOpen && (openSubMenu === item.label ? (
                                            <ChevronUp size={20} className="text-white" />
                                        ) : (
                                            <ChevronDown size={20} className="text-white" />
                                        ))}
                                    </button>
                                    <ul className={`pl-8 transition-all ${openSubMenu === item.label ? 'block' : 'hidden'}`}>
                                        {item.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link
                                                    href={subItem.href}
                                                    className="block py-4 px-4 hover:bg-gray-800 rounded text-gray-200"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <Link href={item.href}>
                                    <p className="flex items-center gap-4 p-3 rounded hover:bg-gray-800">
                                        {item.icon}
                                        <span className={`${isOpen ? 'block' : 'hidden'} text-gray-200`}>
                                            {item.label}
                                        </span>
                                    </p>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            <main className={`${isOpen ? 'md:pl-0' : 'pl-0'} flex-grow overflow-auto pb-20 md:pb-0`}>
                {children}
            </main>

            {isMobile && (
                <nav className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-blue-600 z-50">
                    <div className="flex justify-around items-center h-16">
                        {mobileNavItems.map((item, index) => (
                            <div key={index} className="relative">
                                {item.subItems ? (
                                    <div className="h-full flex items-center justify-center">
                                        <button
                                            onClick={(e) => toggleMobileSubMenu(item.label, e)}
                                            className="mobile-nav-button flex flex-col items-center justify-center w-full h-full text-white hover:text-blue-500 px-4 py-2"
                                        >
                                            {item.icon}
                                            <span className="text-xs mt-1">{item.label}</span>
                                        </button>
                                        {mobileOpenSubMenu === item.label && (
                                            <div className="absolute bottom-full left-0 w-48 bg-slate-800 rounded-t-lg shadow-lg mb-1">
                                                {item.subItems.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={subItem.href}
                                                        className="flex items-center px-4 py-3 text-white hover:bg-slate-700 border-b border-slate-700 last:border-b-0"
                                                        onClick={() => setMobileOpenSubMenu(null)}
                                                    >
                                                        {subItem.icon}
                                                        <span className="ml-2">{subItem.label}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="flex flex-col items-center justify-center w-full h-full text-white hover:text-blue-500 px-4 py-2"
                                    >
                                        {item.icon}
                                        <span className="text-xs mt-1">{item.label}</span>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </nav>
            )}
        </div>
    );
};

export default Aside;
