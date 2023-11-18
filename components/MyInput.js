import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class MyInput extends React.Component {
    render() {
        return (
            <div className={`relative`}>
                <input name={this.props.name} type={this.props.type} className={`w-full bg-secondary-700 h-10 pl-14 font-light`} placeholder={this.props.placeholder}/>
                {this.props.error && <p className={`absolute right-0 text-sm font-medium text-red-300`}>{this.props.error}</p>}
                <div className={`absolute z-20 bg-secondary-900 left-0 top-0 bottom-0 h-full w-10 flex justify-center`}>
                    <FontAwesomeIcon icon={this.props.icon} className={`w-3 h-3 text-secondary-500 self-center`}/>
                </div>
            </div>
        );
    }
}

export default MyInput;