import React from "react";
import {motion} from 'framer-motion'
import Image from "next/image";
import ExploreButton from "./ExploreButton";

export default class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDescOpen: false
        }

        this.toggleDescOpen = this.toggleDescOpen.bind(this);
    }

    toggleDescOpen() {
        this.setState(pre => ({isDescOpen: !pre.isDescOpen}))
    }

    render() {
        return (
            <div className={`group md:w-1/2 w-full relative p-3`} onMouseEnter={this.toggleDescOpen}
                 onMouseLeave={this.toggleDescOpen}>
                <div className={`relative overflow-hidden`}>
                    <div className={`w-full h-full overflow-hidden`}>
                        <div className={`absolute w-full h-full z-10 group-hover:opacity-10 opacity-30 bg-secondary-700`}></div>
                        <Image className={`group-hover:scale-110 duration-300`} src={this.props.image} width={1897}
                               height={924} alt={this.props.title}/>
                    </div>


                    <div className={`translate-y-40 w-full ease-out right-0 left-0 group-hover:translate-y-0 transition-all duration-700 absolute overflow-hidden bottom-0`}>
                        <div
                            className={`bg-secondary-700 px-5 py-3 opacity-[.97] `}>
                            <div className={`flex flex-col pb-8`}>
                                <h5 className={`text-white uppercase font-bold`}>{this.props.title}</h5>
                                <p className={`text-sm font-medium`}>{this.props.desc}</p>
                                <ExploreButton className={`bottom-3`}>Read More</ExploreButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}