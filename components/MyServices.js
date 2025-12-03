import React from "react";
import MyDiv from "./MyDiv";
import ExploreButton from "./ExploreButton";

class MyServices extends React.Component {
	constructor(props) {
		super(props);
		this.services = [
			{
				title: "Web Development",
				desc: "Design web interfaces with front-end framework, like: Next.js, React and ...",
			},
			{
				title: "Database Design",
				desc: "Perform database analysis, design, uml diagram and more.",
			},
			{
				title: "Mobile Development",
				desc: "Build beautiful, natively compiled, multi-platform applications with React Native",
			},
		];
	}

	render() {
		return (
			<section className={`bg-color`}>
				<div
					className={`w-full sm:px-8 px-5 py-5 flex flex-wrap justify-center sm:justify-between`}
				>
					<h2 className={`text-2xl text-white sm:w-full mb-5`}>My Services</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
						{this.services.map((service, index) => (
							<MyDiv key={index} className={`w-full h-[13rem]`}>
								<div className={`relative p-8 pb-20`}>
									<h6 className={`font-bold mb-3`}>{service.title}</h6>
									<p className={`text-sm font-light opacity-60`}>
										{service.desc}
									</p>
									<ExploreButton href={"/contact"}>Order Now</ExploreButton>
								</div>
							</MyDiv>
						))}
					</div>
				</div>
			</section>
		);
	}
}

export default MyServices;
