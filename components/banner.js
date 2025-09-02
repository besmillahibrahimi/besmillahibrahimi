import React from 'react';
import TextWriter from "./text-writer";
import PrimaryButton from "./PrimaryButton";
import {AppContext} from "../context/AppContext";

class ExtraItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            if (this.state.progress < parseInt(this.props.title.split(' ')[0]))
                this.setState(pre => ({progress: pre.progress + 1}));
            else clearInterval(this.intervalId);
        },70 )
    }

    render() {
        return (
            <div className={`relative mt-5 ${this.props.className}`}>
                <div className={`flex items-center justify-center`}>
                    <h6 className={`text-yellow capitalize text-2xl`}>{this.state.progress} {this.props.title.split(' ')[1]}</h6>
                    <p className={`text-white leading-normal whitespace-pre-wrap w-24 mx-2 font-light`}>{this.props.desc}</p>
                </div>
            </div>
        );
    }
}

class Banner extends React.Component {
    static contextType = AppContext
    render() {
        return (
            <section className={`sm:px-8 px-5 pt-10 pb-5 relative flex flex-col`}>
                <div className={`w-full relative`}>
                    <div className={`absolute z-30 w-full h-full bg-curtain-light`}></div>
                    <div className={`${this.context.background} absolute sm:p-20 p-10 relative mx-auto`}>
                        <div className={`absolute z-40 relative flex items-center lg:items-start flex-col`}>
                            <h1 className={`text-4xl text-center lg:text-left text-white capitalize drop-shadow font-black`}>Know
                                a bit more <div>about me<span
                                    className={`text-tertiary-900 text-[3rem] font-black`}>!</span></div></h1>
                            <div className={`my-8`}>
                                <TextWriter/>
                            </div>
                            <PrimaryButton>Explore now</PrimaryButton>
                            <div className={`absolute top-10 hidden lg:block right-10 `}>
                                {/*<Image className={`w-40 h-64`} src={ibrahimi} width={1000} height={1333} alt={'Besmillah Ibrahimi'}/>*/}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`w-full flex flex-wrap justify-between`}>
                    <ExtraItem title={'5 +'} desc={'Years of experience'}/>
                    <ExtraItem title={'10 +'} desc={'Completed Projects'} />
                    <ExtraItem title={'2  '} desc={'Spoken Languages'} />
                    <ExtraItem title={'10 +'} desc={'Languages & Frameworks'} />
                </div>
            </section>
        );
    }
}

export default Banner;