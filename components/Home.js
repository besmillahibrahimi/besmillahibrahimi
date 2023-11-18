import React from 'react';
import Banner from "./banner";
import MyServices from "./MyServices";

export default class Home extends React.Component{

    render() {
        return (
            <div className={`flex flex-col`}>
                <Banner/>
                <MyServices/>
            </div>
        );
    }
}