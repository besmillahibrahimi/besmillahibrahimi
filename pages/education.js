import ArtItem from "../components/ArtItem";
import ArtItemCol from "../components/ArtItemCol";
import Script from "next/script";
import React from "react";

const Education = () => {
    return (
        <>
            <section className={`sm:px-6 px-5 pt-10 pb-5 w-full `}>
                <div className={`w-full relative`}>
                    <div className={`absolute relative mx-auto`}>
                        <div className={`absolute z-40 relative`}>
                            <div className={`w-full md:space-y-0 space-y-5 relative flex flex-wrap justify-center`}>
                                <ArtItemCol>
                                    <ArtItem title={'Kateb University'} subtitle={'Computer Science'}
                                             date={'Aug 2018 - Till now'}
                                             desc={'With my great enthusiasm in technology, I started computer science in Kateb University. Soon, I excelled basics of programming and now I am very skillful in some programming languages'}
                                             completion={'diploma'}/>

                                    <ArtItem title={'Zakoor Bikhsang High School'} subtitle={'High School'}
                                             date={'Mar 2004 - Dec 2017'}
                                             desc={'Along with obstacle and barrier, I started primary school in Ghor province and ended up in there with passion and enthusiasm.'}
                                             completion={'diploma'}/>

                                    <ArtItem title={'Top Learn'} subtitle={'Node.js'}
                                             date={'Feb 2021 - Apr 2021'}
                                             desc={'For me who designed many web & android front-end, it was a necessity to learn some backend framework/language. Then I took a Node.js course'}
                                             completion={'diploma'}/>

                                    <ArtItem title={'Top Learn'} subtitle={'React.js'}
                                             date={'Jan 2021 - Feb 2021'}
                                             desc={'I chose React.js, the most popular javascript library for front-end, and took a course'}
                                             completion={'diploma'}/>

                                    <ArtItem title={'Roocket.ir'} subtitle={'Next.js'}
                                             date={'Jan 2021 - Feb 2021'}
                                             desc={'I chose Next.js, the most popular javascript library for front-end, and took a course'}
                                             completion={'diploma'}/>

                                    <ArtItem title={'Other'} subtitle={'Formal & Informal Studies'}
                                             date={'Jan 2018 - Till Now'}
                                             desc={'From 2018, I self-studied many books as follow. Java How to Program, Python for Programmers, Android for Programmer, Database Design & Concept and dozen of many popular books.'}
                                             completion={'Completion'}/>

                                </ArtItemCol>

                                <ArtItemCol>
                                    <ArtItem title={'Udemy'} subtitle={'Artificial Intelligence'}
                                             date={'Aug 2021 - Oct 2021'}
                                             desc={'My great enthusiasm for AI really didn\'t let me not to buy an AI course. On Aug 2021, I bought the course "Artificial Intelligence A-Z™: Learn How To Build An AI" and completed it in 3 months. I learned a lot about Data Science, Machine Learning and Deep Learning.'}
                                             completion={'Certificate'}/>

                                    <ArtItem title={'Udemy'} subtitle={'Flutter & Dart'}
                                             date={'Oct 2020 - Dec 2020'}
                                             desc={'The power of building beautiful UI, natively compiled for multi-platforms of Flutter, fascinated me a lot. I completed a flutter course titled "Flutter & Dart - The Complete Guide" on Dec 2020. Now, I build web, android, ios and desktop application with Flutter.'}
                                             completion={'Certificate'}/>

                                    <ArtItem title={'Udacity'} subtitle={'Android Fundamentals & Advanced'}
                                             date={'Jan 2019 - Mar 2019'}
                                             desc={'After self-studying some android books like Android for Programmer, I took an Android course on Udacity. I think it was the complementary of what I need for Android development'}
                                             completion={'Completion'}/>

                                    <ArtItem title={'Muslim English Language Institute'} subtitle={'English Diploma'}
                                             date={'Jul 2016 - Jul 2017'}
                                             desc={'I completed one year English diploma program in Muslim English Language Institute. My acquired skills: excellent speaking, writing, reading and listening, with great American pronunciation.'}
                                             completion={'diploma'}/>

                                    <ArtItem title={'Asr-e-Naw Educational Center'} subtitle={'Student'}
                                             date={'Jan 2016 - Jan 2017'}
                                             desc={'I studied fundamentals of computer and ICDL to better process common tasks.'}
                                             completion={'Completion'}/>


                                </ArtItemCol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education;