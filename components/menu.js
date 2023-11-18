import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAddressBook,
    faBars,
    faBookOpen,
    faGraduationCap,
    faHome,
    faProjectDiagram,
    faScrewdriver,
    faToolbox,
    faXmark
} from "@fortawesome/free-solid-svg-icons";
import {useApp} from "../context/AppContext";
import Link from "next/link";
import {useRouter} from "next/router";
import {capitalize} from "@mui/material";

const Menu = ({containerRef}) => {
    const {isMenuOpen, setMenuOpen} = useApp();
    const router = useRouter();
    const title = () => router.query.title || router.asPath.substring(router.asPath.lastIndexOf('/') + 1) || "home";
    const menuItems = [
        {title: "Home", icon: faHome, href: '/'},
        {title: "Experience", icon: faToolbox, href: '/experience'},
        {title: "Education", icon: faGraduationCap, href: '/education'},
        {title: "Projects", icon: faProjectDiagram, href: '/projects'},
        {title: "Skills", icon: faScrewdriver, href: '/skills'},
        {title: "Articles", icon: faBookOpen, href: '/articles'},
        {title: "Contact", icon: faAddressBook, href: '/contact'},
    ];


    return (
        <div ref={containerRef}
             className={`fixed bg-secondary-900 z-10 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-30px)] drop-shadow top-auto bottom-auto right-auto duration-500 transition-all delay-400  ${isMenuOpen ? 'w-[230px] translate-x-[-150px]' : 'translate-x-10 sm:translate-x-0 w-[80px]'}`}>
            <div className={`relative`}>
                <div
                    className={`w-full  bg-secondary-900 hidden lg:flex z-10 absolute pl-8 top-0 left-0 shadow items-center h-[70px]`}>
                    <FontAwesomeIcon className={`w-4 h-4  cursor-pointer text-secondary-100 `}
                                     onClick={() => setMenuOpen(!isMenuOpen)}
                                     icon={isMenuOpen ? faXmark : faBars}/>
                </div>

                <div
                    className={`absolute hidden ${isMenuOpen ? '-translate-y-6 opacity-0' : 'translate-y-0 opacity-100'} transition-all duration-300 lg:block top-32 right-0 left-0 mx-auto rotate-90`}>
                    <p>{capitalize(title())}</p>
                </div>

                <div className={`w-full height-main translate-3`}>
                    <nav className={`relative h-full w-full flex items-center justify-center`}>
                        <ul className={` space-y-3 px-2`}>
                            {menuItems.map((menuItem, index) => (
                                <Link key={index} href={menuItem.href}>
                                    <li className={`flex items-center px-1 ${isMenuOpen ? 'hover:bg-secondary-700 cursor-pointer' : ''} rounded transition-all duration-300 ease-in-out translate-x-0 ${index === 0 ? 'delay-75' : index === 1 ? 'delay-[150ms]' : index === 2 ? 'delay-[210ms]' : 'delay-[300ms]'} ${isMenuOpen ? `opacity-100 translate-x-[0px]` : `opacity-0 translate-x-[60px]`} ${menuItem.title.toLowerCase() === title().toLowerCase() ? 'bg-secondary-700' : ''}`}>
                                        <FontAwesomeIcon
                                            className={`h-4 w-4 mr-2 ${menuItem.title.toLowerCase() === title().toLowerCase() ? 'text-yellow' : 'text-secondary-100'}`}
                                            icon={menuItem.icon}/>
                                        <p className={`${menuItem.title.toLowerCase() === title().toLowerCase() ? 'text-yellow' : ''}`}>{menuItem.title}</p>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Menu;