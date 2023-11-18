import React from "react";

export default class ArtItemCol extends React.Component{
    render() {
        return (
            <div className={`flex flex-col md:w-1/2 w-full mb-auto relative `}>
                <div className={`w-full space-y-8 art-item-col px-2`}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}