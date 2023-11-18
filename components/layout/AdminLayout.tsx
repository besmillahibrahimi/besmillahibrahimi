import {JSX, useState} from "react";
import {
    faBookOpen,
    faGraduationCap,
    faProjectDiagram,
    faScrewdriver,
    faToolbox
} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRouter} from "next/router";
import Head from "next/head";
import {capitalize, IconButton, Typography} from "@mui/material";
import {ArrowForwardIosRounded} from '@mui/icons-material';

type Props = {
    children: JSX.Element
}

const AdminLayout = ({children}: Props) => {
    const router = useRouter();
    const path = router.asPath;
    const current = path.substring(path.lastIndexOf('/') + 1);
    const [expanded, setExpanded] = useState(true);
    const menuItems = [
        {title: "Experience", icon: faToolbox},
        {title: "Education", icon: faGraduationCap},
        {title: "Projects", icon: faProjectDiagram},
        {title: "Skills", icon: faScrewdriver},
        {title: "Article", icon: faBookOpen},
    ]
    return (
        <>
            <Head>
                <title>Admin - {current}</title>
            </Head>
            <main className={'flex h-screen'}>
                <aside className={`bg-secondary-900 h-full py-8 px-8`}>
                    <nav className={`h-full `}>
                        <ul className={`h-full overflow-hidden flex flex-col gap-y-2 transition-all duration-1000  ${expanded ? 'w-auto' : 'w-[5.5rem]'}`}>
                            <li className={'text-white mb-5'}>
                                <Typography variant={'h6'}> Besmillah <span className={'text-yellow font-bold'}>Ibrahimi</span></Typography>
                                {expanded && <Typography className={'text-secondary-50 text-center py-[0.3rem]'}>Senior Developer</Typography>}
                            </li>
                            {menuItems.map((item, index) => (
                                <li key={index}
                                    className={`pl-4 ${item.title.toLowerCase() === current ? 'text-primary-500' : 'text-white'}`}>
                                    <Link href={`/admin/${item.title.toLowerCase()}`}>
                                        <span className={'flex items-center space-x-2 '}>
                                            <FontAwesomeIcon className={'w-5 text-inherit'} icon={item.icon}/>
                                            <span className={`text-inherit ${expanded ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-500`}>{item.title}</span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                            <li className={'mt-auto self-end'}>
                                <IconButton onClick={() => setExpanded(!expanded)} className={`transition-all ${!expanded ? 'rotate-0' : 'rotate-180 '} duration-500`}>
                                    <ArrowForwardIosRounded sx={{fill: 'white'}}/>
                                </IconButton>
                            </li>
                        </ul>
                    </nav>
                </aside>

                <section className={'bg-secondary-700 p-5 text-white flex-1'}>
                    <Typography variant={'h1'}>{capitalize(current)}</Typography>
                    {children}
                </section>
            </main>
        </>
    )
}

export default AdminLayout;