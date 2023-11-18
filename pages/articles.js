import Contact from "./contact";
import Script from "next/script";
import React from "react";
import ProjectItem from "../components/ProjectItem";
import abzarkankor from "../public/projects/abzarkankor.png";
import abzarkankor_android from "../public/projects/abzarkankor-androi.png";
import estateir from "../public/projects/estateir.png";
import estateir_backend from "../public/projects/abzarkankor.png";
import bourse_kala from "../public/projects/bourse-kala.png";
import rezaebrahimi from "../public/projects/rezaebrahimi.png";
import besmillahibrahimi from "../public/projects/besmillahibrahimi.png";

const Articles = () => {
    const projects = [
        {image: abzarkankor, title: 'Abzar Kankor Web', desc: 'I wrote from stratch this website completely'},
        {image: abzarkankor_android, title: 'Abzar Kankor Android', desc: 'I wrote from stratch this website completely'},

        {image: estateir, title: 'Estateir.com', desc: 'I wrote from stratch this website completely'},
        {image: estateir_backend, title: 'Estateir.com Backend', desc: 'I wrote from stratch this website completely'},

        {image: bourse_kala, title: 'Bourse Kala', desc: 'I wrote from stratch this website completely'},
        // {image: bourse_kala_android, title: 'Bourse Kala Android', desc: ''},

        {image: rezaebrahimi, title: 'Reza Ebrahimi Resume', desc: 'I wrote from stratch this website completely'},
        {image: besmillahibrahimi, title: 'Besmillah Ibrahimi Resume', desc: 'I wrote from stratch this website completely'},
    ]
    return (
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

export default Articles;