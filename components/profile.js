import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faPhone} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faStackOverflow,
    faTelegram,
    faTwitter,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";
import Image from "next/image";
import ibrahimi from '../public/images/ibrahimi.png';
import {CircularProgress} from "./progress";
import Divider from "./divider";
import LinkedInBadge from "./LinkedInBadge";

class Contact extends React.Component {
    render() {
        return (
            <div className={`flex items-center rounded`}>
                <FontAwesomeIcon className={`w-5 h-5 text-white mr-2`} icon={this.props.icon}/>
                <p className={`font-light`}>{this.props.contact}</p>
            </div>
        );
    }
}

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.socials = [
            {href: "https://facebook.com/besmillah.ibrahimi1", icon: faFacebook},
            {href: 'https://instagram.com/besmillahibrahimi', icon: faInstagram},
            {href: 'https://twitter.com/bes_ibrahimi', icon: faTwitter},
            {href: 'https://www.linkedin.com/in/besmillahibrahimi', icon: faLinkedin},
            {href: 'https://t.me/besmillah_ibrahimi', icon: faTelegram},
            {href: 'https://wa.me/message/DH3LCG4YGETXC1', icon: faWhatsapp},
            {href: 'mailto: besmellah.ibrahimi@gmail.com', icon: faEnvelope},
            {href: 'https://github.com/besmillahibrahimi', icon: faGithub},
            {href: 'https://stackoverflow.com/users/9837870/besmellah-ibrahimi', icon: faStackOverflow},
        ]
    }

    render() {
        return (
            <div ref={this.props.containerRef}
                 className={`relative pt-[235px] pb-[50px] z-10 rounded-l shadow bg-secondary-800 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-30px)] w-[290px]`}>
                {/*Header*/}
                <div className={`absolute drop-shadow top-0 z-2 opacity-80 bg-secondary-900 w-full h-[235px]`}>
                    <div className={`flex flex-col w-full h-full justify-center items-center`}>
                        <div className={`relative`}>
                            <Image className={`rounded-full ring-1 ring-secondary-300 w-24 w-24`} src={ibrahimi}
                                   alt={"Besmillah Ibrahimi"} width={2290} height={3054}/>
                            <span
                                className={`w-4 h-4 bg-secondary-100 animate-ping absolute z-2 rounded-full right-0 bottom-3`}></span>
                            <span
                                className={`w-4 h-4 bg-yellow  absolute z-2 rounded-full right-0 bottom-3`}></span>
                        </div>
                        <h6 className={`font-bold text-lg text-white my-3 `}>Besmillah Ibrahimi</h6>
                        <p className={`text-sm text-secondary-200`}>Senior Software Engineer</p>
                    </div>
                </div>

                {/*Footer*/}
                <div
                    className={`absolute inset-x-0 bottom-0 z-2 flex justify-center items-center space-x-3 w-full h-[50px] bottom-0 left-0 bg-secondary-900`}>
                    {this.socials.map((social, index) => (
                        <Link key={index} href={social.href}>
                            <FontAwesomeIcon
                                className={`text-secondary-200 w-4 h-4 hover:text-secondary-50 hover:scale-125 duration-200`}
                                icon={social.icon}/>
                        </Link>
                    ))}
                </div>

                {/*Content*/}
                <div className={`overflow-auto scrollbar-hide h-full w-full`}>
                    <div className={`p-6 flex flex-col`}>
                        <div className={`grid grid-cols-2`}>
                            <p className={`text-white`}>Nationality</p>
                            <p className={`text-secondary-200 text-right`}>Afghanistan</p>

                           
                        </div>
                        <Divider/>
                        {/*Languages*/}
                        <div className={`flex flex-col`}>
                            <h6 className={`font-bold mb-5`}>Languages</h6>
                            <div className={`flex justify-center space-x-3`}>
                                <CircularProgress value={'100'} label={"Dari"}/>
                                <CircularProgress value={'80'} label={"English"}/>
                            </div>
                        </div>
                        <Divider/>

                        {/*Contacts*/}
                        <div className={`flex flex-col`}>
                            <h6 className={`font-bold mb-5`}>Contacts</h6>
                            <div className={`flex flex-col`}>
                                <Contact icon={faEnvelope} contact={<Link href={'mailto: besmillah@ibrahimi.info'}>besmillah@ibrahimi.info</Link>}/>
                                {/* <Contact icon={faPhone} contact={<Link href={'tel:+989355958780'}>+98 935 5958 780</Link>} /> */}
                                    {/* <Contact icon={faWhatsapp} contact={<Link href={'tel:+98775515896'}>+98 77 5515 896</Link>}/> */}
                                <Contact icon={faEnvelope} contact={<Link href={'mailto: besmellah.ibrahimi@gmail.com'}>besmellah.ibrahimi@gmail.com</Link>}/>
                                
                                
                            </div>
                        </div>
                        <div className={'mt-8 overflow-hidden w-[110%] -translate-x-1'}>
                            <LinkedInBadge/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;