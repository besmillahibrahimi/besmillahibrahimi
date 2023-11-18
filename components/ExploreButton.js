import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default class ExploreButton extends React.Component {
    render() {
        return (
            <Link href={this.props.href || '#'}>
                <span className={`text-yellow flex uppercase items-center absolute bottom-8 font-bold text-sm cursor-pointer group ${this.props.className}`}>
                    {this.props.children}
                    <span className={`transition-all duration-500 ml-1 group-hover:ml-3`}>
                        <FontAwesomeIcon className={`w-5 h-5 inline-block`} icon={faAngleRight}/>
                </span>
                </span>
            </Link>
        );
    }
}