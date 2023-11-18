import React from 'react';

export default class MyDiv extends React.Component {
    render() {
        return (
            <div className={`relative group mb-auto ${this.props.className}`}>
                <div
                    className={` z-20 absolute top-0 right-0 bottom-0 left-0 duration-300 transition-all group-hover:sm:translate-x-2 group-hover:sm:-translate-y-2 relative bg-secondary-800 w-auto h-auto`}>{this.props.children}</div>
                <div
                    className={`group-hover:sm:-translate-x-2 group-hover:sm:translate-y-2 duration-300 transition-all z-10 group-hover:sm:bg-yellow absolute top-0 right-0 bottom-0 left-0 w-auto h-auto`}></div>
            </div>
        );
    }
}