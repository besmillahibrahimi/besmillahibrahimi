import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faEllipsisVertical, faXmark} from "@fortawesome/free-solid-svg-icons";
import Profile from "./profile";
import Menu from "./menu";
import React, {useEffect, useRef} from "react";
import {useApp} from "../context/AppContext";
import {useRouter} from "next/router";
import {AnimatePresence, motion} from 'framer-motion';
import {Ms_Madi} from 'next/font/google'
const msMadi = Ms_Madi({
    subsets: ['latin'], weight: ['400']
})
const Template = ({children}) => {
    const {asPath} = useRouter();
    const {
        isMenuOpen,
        setMenuOpen,
        isProfileOpen,
        setProfileOpen,
        menuSwiper,
        background,
        setBackground
    } = useApp();

    const profile = useRef(null);
    const menuRef = useRef(null);
    const toolbarRef = useRef(null);
    const router = useRouter();


    const handleMouseDown = (e) => {
        if (profile.current && !profile.current.contains(e.target) && !toolbarRef.current.contains(e.target)) {
            setProfileOpen(false);
        }

        if (menuRef.current && !menuRef.current.contains(e.target) && !toolbarRef.current.contains(e.target)) {
            setMenuOpen(false);
        }
    }

    const handleRouteChangeStart = () => {
        setMenuOpen(false)
    }

    const setBg = (bg) => {
        if (bg !== background) {
            setBackground(bg);
        }
    }

    useEffect(() => {
        router.events.on('routeChangeStart', handleRouteChangeStart)
        // router.events.on('routeChangeComplete', handleRouteChangeComplete)
        document.addEventListener('mousedown', handleMouseDown)
        const intervalId = setInterval(() => {
            const bg = new Date().getMinutes() % 2 === 0;
            if (bg) {
                setBg('bg-space')
            } else setBg('background')
        }, 1000)
        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            router.events.off('routeChangeStart', handleRouteChangeStart);
            clearInterval(intervalId);
        }
    }, [router.events])

    const variants = {
        in: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
            }
        },

        out: {
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.5,
            }
        }
    }

    return (
        <div className={`bg-secondary-700 flex items-center justify-center h-screen`}>
            <main className={``}>
                <div>
                    {/*Preloader*/}
                    <div></div>

                    {/*app wrapper*/}
                    <div>
                        {/*app container*/}
                        <div
                            className={`relative bg-main shadow-lg rounded h-screen w-screen lg:w-[calc(100vw-30px)] lg:h-[calc(100vh-30px)]`}>

                            {/*Toolbar*/}
                            <div ref={toolbarRef} className={`lg:hidden top-0 z-30 relative`}>
                                <div
                                    className={`fixed left-0 right-0 flex justify-between px-5 h-14 bg-secondary-900 shadow drop-shadow  top-0 w-full`}>

                                    <FontAwesomeIcon
                                        className={`w-4 h-4  top-0 bottom-0 my-auto z-50 left-3 cursor-pointer text-secondary-100 `}
                                        onClick={() => setProfileOpen(!isProfileOpen)} icon={faEllipsisVertical}/>


                                    <h1 className={`${msMadi.className} opacity-50 header-title  m-auto font-bold text-3xl tracking-wider text-white z-20`}>Besmillah Ibrahimi</h1>


                                    <div onClick={(e) => setMenuOpen(!isMenuOpen)}
                                         className={` top-0 bottom-0 my-auto z-50 right-3 flex justify-center items-center`}>
                                        <FontAwesomeIcon
                                            className={`w-4 h-4 cursor-pointer text-secondary-100 `}

                                            icon={isMenuOpen ? faXmark : faBars}/>
                                    </div>

                                </div>
                            </div>

                            {/*profile*/}
                            <div
                                className={`fixed ${isProfileOpen ? 'translate-x-0' : '-translate-x-80 lg:translate-x-0'} lg:pt-0 pt-[3.4rem] transition-all duration-300 z-20`}>
                                <Profile containerRef={profile}/>
                            </div>

                            {/*Menu*/}
                            <div
                                className={`absolute z-20 right-0 ${isMenuOpen ? 'w-[80px] ' : 'w-0 lg:w-[80px]'} pt-[3.4rem] lg:pt-0 `}>
                                <Menu containerRef={menuRef} menuSwiper={menuSwiper}/>
                            </div>

                            <div
                                className={`lg:pl-[290px] h-auto lg:pr-[80px] transition-all duration-500 delay-400 pt-[3.4rem] lg:pt-0 ${isMenuOpen ? 'translate-x-[-150px]' : 'translate-x-0'}`}>
                                <div className={` h-auto relative height-main scrollbar-hide overflow-y-scroll`}>
                                    <div
                                        className={`w-full h-full absolute z-10 pointer-events-none left-0 banner-overlay`}></div>
                                    {/*background*/}
                                    <div className={`w-full h-[400px] ${background} absolute overflow-hidden top-0`}>
                                        <div className={`w-full h-full relative bg-overlay`}></div>
                                    </div>

                                    <div className={`relative`}>
                                        <div
                                            className={`w-full h-full absolute z-10 pointer-events-none left-0 bg-color`}></div>
                                        <div className={`flex h-auto w-full absolute z-20 flex-col items-center`}>

                                            {/*Main body*/}
                                            <AnimatePresence
                                                initial={false}
                                                mode={'wait'}>
                                                <motion.div
                                                    key={asPath}
                                                    variants={variants}
                                                    animate="in"
                                                    initial="out"
                                                    exit="out">
                                                    {children}
                                                </motion.div>
                                            </AnimatePresence>

                                            <footer className={`w-full bg-color sm:px-8 px-5 pt-16 pb-5`}>
                                                <div
                                                    className={`h-12 w-full flex justify-center items-center relative bg-secondary-800`}>
                                                    <p className={`font-light text-sm`}>&#169; Besmillah Ibrahimi</p>
                                                    <span className={`absolute w-1 right-10 h-[70%] bg-yellow`}></span>
                                                    <span className={`absolute w-1 left-10 h-[70%] bg-yellow`}></span>
                                                </div>
                                            </footer>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Template;