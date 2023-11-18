import Script from "next/script";
import React from "react";
import {CircularProgress} from "../components/progress";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

class SocialSkill extends React.Component {
    render() {
        return (
            <div className={`flex items-center space-x-3`}>
                <FontAwesomeIcon className={`text-white w-6 h-6`} size={'2x'} icon={faCheck}/>
                <p>{this.props.value}</p>
            </div>
        );
    }
}

const Skills = () => {
    return (
        <>
            <section className={`sm:px-6 px-5 pt-10 pb-5 w-full`}>
                <div className={`w-full relative`}>
                    <div className={`absolute relative mx-auto`}>
                        <div className={`absolute z-40 relative`}>
                            <div className={`space-y-5`}>
                                <h1 className={`text-2xl text-white uppercase`}>Professional Skills</h1>
                                <div className={`flex flex-wrap md:flex-nowrap md:space-x-16`}>
                                    <div className={`flex flex-col md:w-[50%] space-y-5`}>
                                        <h6>Programming Languages</h6>
                                        <div className={`grid gap-y-6 grid-cols-2 md:grid-cols-3`}>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'80'}
                                                              label={'Kotlin'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'85'}
                                                              label={'Java'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'75'}
                                                              label={'Javascript'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'60'}
                                                              label={'Python'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'50'}
                                                              label={'Dart'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'40'}
                                                              label={'C++'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'30'}
                                                              label={'C'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'90'}
                                                              label={'HTML'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'85'}
                                                              label={'CSS'}/>
                                        </div>
                                        <h6>Programming Framework & Libraries</h6>
                                        <div className={`grid gap-y-6 grid-cols-2 md:grid-cols-3`}>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'90'}
                                                              label={'Android'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'70'}
                                                              label={'Node.js'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'85'}
                                                              label={'Next.js'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'85'}
                                                              label={'Express'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'70'}
                                                              label={'Flutter'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'70'}
                                                              label={'React'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'40'}
                                                              label={'Django'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'95'}
                                                              label={'TailwindCSS'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'95'}
                                                              label={'Bootstrap'}/>
                                        </div>

                                        <h6>Others</h6>
                                        <div className={`grid grid-cols-2 gap-y-6 md:grid-cols-3`}>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'88'}
                                                              label={'SQL'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'79'}
                                                              label={'NoSQL'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'80'}
                                                              label={'Git'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'60'}
                                                              label={'Firebase Technology'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'80'}
                                                              label={'Analyzing & Designing'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'75'}
                                                              label={'Photoshop'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'72'}
                                                              label={'Illustrator'}/>
                                            <CircularProgress className={`w-[100px] h-[100px]`} value={'96'}
                                                              label={'Ms. Office'}/>
                                        </div>

                                    </div>
                                    <div className={`flex flex-col md:w-[50%] space-y-5`}>
                                        <h6>Social Skills</h6>
                                        <SocialSkill value={'More and Better Relationships'}/>
                                        <SocialSkill value={'Better Communication'}/>
                                        <SocialSkill value={'Advancing Career Prospects'}/>
                                        <SocialSkill value={'Increased Overall Happiness'}/>
                                        <SocialSkill value={'Executive Functioning'}/>
                                        <SocialSkill value={'Planning and Sequencing'}/>
                                        <SocialSkill value={'Leadership capability'}/>
                                        <SocialSkill value={'Office Task'}/>
                                        <SocialSkill value={'Management skills'}/>
                                        <SocialSkill value={'Counselling Ability'}/>
                                        <SocialSkill value={'Negotiable and felixable behaviour'}/>
                                        <SocialSkill value={'Teaching and training ability'}/>
                                        <SocialSkill value={'Oral and written communication skills'}/>
                                        <SocialSkill value={'Able to design: Cover page, Brochure, ...'}/>
                                        <SocialSkill
                                            value={'Familiarity with cultures and traditions of all provinces of Afghanistan'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;