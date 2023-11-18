import React from "react";
import ExploreButton from "./ExploreButton";
import MyDiv from "./MyDiv";

export default class ArtItem extends React.Component {
    render() {
        return (
            <div data-aos={this.props.animate}
                 data-aos-duration="1000"
                 data-aos-once="false"
                 data-aos-anchor-placement="top-bottom" className={`w-full flex relative group`}>
                <div className={` absolute right-[16px] top-6 flex items-center justify-center`}>
                    <div className={`w-3 h-3 bg-white group-hover:animate-ping rounded-full absolute`}></div>
                    <div className={`w-4 h-4 bg-yellow rounded-full absolute`}></div>
                    <div className={`w-[.65rem] h-[.65rem] bg-secondary-900 rounded-full absolute`}></div>
                </div>

                <div className={`w-[85%] group relative`}>
                    <MyDiv>
                        <div className={`w-full flex p-8 pb-20 flex-col`}>
                            <div className={`flex flex-wrap w-full justify-between `}>
                                <div>
                                    <h6 className={`text-white font-bold`}>{this.props.title}</h6>
                                    <p className={`italic text-sm font-bold mb-3 text-secondary-300`}>{this.props.subtitle}</p>
                                </div>
                                <p className={`bg-secondary-900 mb-auto rounded-full px-4 font-medium text-sm py-1`}>{this.props.date}</p>
                            </div>
                            <p className={`font-medium text-secondary-300 mt-3 leading-normal`}>{this.props.desc}</p>
                            <ExploreButton href={this.props.link}>{this.props.completion}</ExploreButton>
                        </div>
                    </MyDiv>
                    <div className={`bg-secondary-800 h-4 w-4 rotate-45 absolute -right-[8px] group-hover:-right-[16px] transition-all duration-300 top-4 `}></div>
                </div>
            </div>
        );
    }
}