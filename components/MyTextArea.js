import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
class MyTextArea extends React.Component{
    render() {
        return (
            <div className={`relative`}>
                <textarea name={this.props.name} className={`w-full bg-secondary-700 pl-14 font-light`} placeholder={this.props.placeholder} rows={6}/>
                {this.props.error && <p className={`absolute right-0 text-sm font-medium text-red-300`}>{this.props.error}</p>}
                <div className={`absolute z-10 bg-secondary-900 left-0 top-0 bottom-0 h-[96.5%] w-10 flex justify-center`}>
                    <FontAwesomeIcon icon={this.props.icon} className={`w-3 h-3 text-secondary-500 mt-4`}/>
                </div>
            </div>
        );
    }
}

export default MyTextArea;