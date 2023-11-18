import ProjectItem from "../components/ProjectItem";
import abzarkankor from '/public/projects/abzarkankor.png';
import abzarkankor_android from '/public/projects/abzarkankor-androi.png';
import estateir from '/public/projects/estateir.png';
import estateir_backend from '/public/projects/estateir.png';
import bourse_kala from '/public/projects/bourse-kala.png';
import rezaebrahimi from '/public/projects/rezaebrahimi.png';
import besmillahibrahimi from '/public/projects/besmillahibrahimi.png';
import safestep from '/public/projects/safestep.png';
import launchingmax from '/public/projects/launchingmax.png';
import React from "react";

const Projects = () => {
    const projects = [
        {image: launchingmax, href: 'https://launchingmax.com', title: 'LaunchingMax', desc: 'LaunchingMax is an startup that cares about small and big ideas. Currently, I am the CTO and Senior developer at LaunchingMax. My duties are as follow: Analyzing Projects, quality insurance, coding, maintenance and more.'},
        {image: safestep, href: 'https://safestepinnovation.com', title: 'Safe Step INV', desc: 'Safe Step provides services for children. I was a full-stack at Safe Step. I developed Safe step front-end, back-end, admin panel and some other cool features.'},

        {image: abzarkankor, href: 'https://abzarkankor.com', title: 'Abzar Kankor Web', desc: 'Abzar Kankor is and educational platform for Afghan High School students. I build this website from scratch. You can check it at abzarkankor.com'},
        {image: abzarkankor_android, href: 'https://play.google.com/store/apps/details?id=com.abzarkankor.abzarkankor&hl=en_US&gl=US', title: 'Abzar Kankor Android', desc: 'This is the android version of Abzar Kankor. I developed this app with native android & pure kotlin'},

        {image: estateir, href: 'https://estateir.com', title: 'Estateir.com', desc: 'Modern real estate platform for real estate deals. I build the interface using Next.js'},
        {image: estateir_backend, href: '#', title: 'Estateir.com Backend', desc: 'This is a nodejs application for estateir.com. I wrote all its API, authentication, authorization and ... from scratch alone.'},

        {image: bourse_kala, href: 'https://bourse-kala.com', title: 'Bourse Kala', desc: 'I was responsible for designing the UI for web and an Android app.'},
        // {image: bourse_kala_android, title: 'Bourse Kala Android', desc: ''},

        {image: rezaebrahimi, title: 'Reza Ebrahimi Resume', desc: 'I wrote from scratch this website completely'},
        {image: besmillahibrahimi, title: 'Besmillah Ibrahimi Resume', desc: 'I wrote from scratch this website completely'},
    ]
    return(
        <>
            <section className={`sm:px-6 px-5 pt-10 pb-5 w-full `}>
                <div className={`w-full relative`}>
                    <div className={`absolute relative mx-auto`}>
                        <div className={`absolute z-40 relative`}>
                            <div className={`w-full relative flex flex-wrap justify-between`}>
                                {projects.map((project, index) => (
                                    <ProjectItem key={index} image={project.image} title={project.title}
                                                 desc={project.desc}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;