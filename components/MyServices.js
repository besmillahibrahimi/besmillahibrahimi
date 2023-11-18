import React from 'react';
import MyDiv from "./MyDiv";
import ExploreButton from "./ExploreButton";

class MyServices extends React.Component {
    constructor(props) {
        super(props);
        this.services = [
            {
                title: 'Web Development',
                desc: 'Design web interfaces with front-end framework, like: Next.js, React and ...'
            },
            {title: 'Database Design', desc: 'Perform database analysis, design, uml diagram and more.'},
            {
                title: 'Mobile Development',
                desc: 'Build beautiful, natively compiled, multi-platform applications with flutter'
            },
            {title: 'Desktop Development', desc: 'Develop cross platform desktop application where ever Java runs.'},
            {
                title: 'Android Development',
                desc: 'Build high performance native Android app with Java, Kotlin, and XML.'
            },
            {title: 'UX/UI Design', desc: 'Design beautiful UI with Adobe XD and Figma with nice look and feel.'},
        ]
    }

    render() {
        return (
            <section className={`bg-color`}>
                <div className={`w-full sm:px-8 px-5 py-5 flex flex-wrap justify-center sm:justify-between`}>
                    <h2 className={`text-2xl text-white sm:w-full mb-5`}>My Services</h2>
                    {this.services.map((service, index) => (
                        <MyDiv key={index} className={`md:mt-7 sm:w-[31%] w-full h-[15rem] sm:h-auto`}>
                            <div className={`relative p-8 pb-20`}>
                                <h6 className={`font-bold mb-3`}>{service.title}</h6>
                                <p className={`text-sm font-light opacity-60`}>{service.desc}</p>
                                <ExploreButton href={'/contact'}>Order Now</ExploreButton>
                            </div>
                        </MyDiv>
                    ))}
                </div>
            </section>
        );
    }
}

export default MyServices;