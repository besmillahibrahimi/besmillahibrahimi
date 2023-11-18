import ArtItemCol from "../../components/ArtItemCol";
import ArtItem from "../../components/ArtItem";
import React from "react";
import baseAxios from "../../service/http";

const Experience = ({data}) => {
    const list = [
        {title: 'forvest.io', subtitle: 'Full-Stack Developer', date: 'Jul 2022 - Jan 2023', link: 'https://estateir.com'}
    ]
    return(
        <>
            <section className={`sm:px-6 px-5 pt-10 pb-5 w-full `}>
                <div className={`w-full relative`}>
                    <div className={`absolute relative mx-auto`}>
                        <div className={`absolute z-40 relative`}>
                            <div className={`w-full relative md:space-y-0 space-y-8 flex flex-wrap justify-center`}>
                                <ArtItemCol>

                                    <ArtItem title={'LaunchingMax'} subtitle={'Senior Software Engineer'}
                                             date={'Nov 2022 - Present'}
                                             desc={'as the Senior Software Developer at LaunchingMax, I ensure optimal software quality, security, and performance. My role involves leveraging Node.js for efficient server-side development via RESTful APIs, and using Next.js for crafting intuitive, visually pleasing user interfaces. My goal is to meet rigorous industry standards while delivering a seamless and satisfying user experience.'}
                                             completion={'Read More'} link={"/experience/launchingmax"}/>

                                    <ArtItem title={'Safe Step'} subtitle={'Full stack developer'}
                                             date={'Nov 2022 - Present'}
                                             desc={'I developed safestepinnovation.com website alone. Its front is developed using Next.js and its back-end is written using Node.js.'}
                                             completion={'Read More'} link={'https://safestepinnovation.com'}/>

                                    <ArtItem title={'forvest.io'} subtitle={'Full stack developer'}
                                             date={'Jun 2022 - Jan 2023'}
                                             desc={'forvest.io is a platform that lets trader trades smarter. I was a member of their developer team. I was responsible for ui, exchange api amd much more.'}
                                             completion={'Read More'} link={'https://forvest.io'}/>

                                    <ArtItem title={'Akbari Real State'} subtitle={'Developer'}
                                             date={'Jun 2022 - Jan 2023'}
                                             desc={'Look at estateir.com. It is a real estate website with more than 5,000 properties registered. what ever you see design, interaction, backend, api. I write all from scratch.'}
                                             completion={'Read More'} link={'https://estateir.com'}/>

                                </ArtItemCol>

                                <ArtItemCol>
                                    <ArtItem title={'Tejarat Mandegar Modern Andishan'} subtitle={'Front-end Developer'}
                                             date={'Feb 2022 - Jun 2022'}
                                             desc={'I developed user interface for an Android app as well as a website UI at this company. Here, mostly I was responsible for UI.'}
                                             completion={'diploma'}/>

                                    <ArtItem title={'Pishgaman Laal IT Services'} subtitle={'Founder & CEO'}
                                             date={'Aug 2018 - Aug 2021'}
                                             desc={'I established this start-up to infrastructure educational technology and support Abzar Kankor activities and services in Afghanistan. I am the founder and officially registered this in Ministry of Commerce & Industry.'}
                                             completion={'diploma'}/>

                                    <ArtItem title={'Abzar Kankor Educational Society'} subtitle={'Senior Developer'}
                                             date={'Aug 2018 - Aug 2021'}
                                             desc={'Abzar Kankor is a project of Pishgaman Laal IT Services. It is an android app that provides quality education for high school students. I wrote this app from scratch. I gathered requirements, analyzed, designed and implemented. You can check it at Google Play Store and at abzarkankor.com.'}
                                             completion={'diploma'}/>

                                    <ArtItem title={'Rahila Foundation'} subtitle={'Desktop Developer'}
                                             date={'May 2019 - Aug 2019'}
                                             desc={'I developed Rahila Foundation Database to manipulate and access all data and information in a convenient and efficient way. They can manage information and create report of work done and create and authenticate users. You can check the intro at my facebook account.'}
                                             completion={'diploma'}/>

                                </ArtItemCol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

// export async function getStaticProps() {
//     const res = await baseAxios.get('/experience');
//     const data = res.data;
//     return {
//         props: {data},
//         revalidate: 10,
//     };
// }

export default Experience;