import React from 'react';

class CircularProgress extends React.Component {

    render() {
        return (
            <div className={`flex flex-col space-y-2 items-center`}>
                <div
                    className={`rounded-full min-w-[50px] min-h-[50px] w-[4rem] h-[4rem] ${this.props.className}`}>
                    <div
                        className={`w-full h-full circular-progress transition-all duration-300 ease-out hover:scale-110`}
                        role="progressbar" aria-valuenow={this.props.value} aria-valuemin="0" aria-valuemax="100"
                        style={{'--value': this.props.value}}></div>
                </div>
                <p className={`text-white text-center leading-tight`}>{this.props.label}</p>
            </div>
        );
    }
}

class LinearProgress extends React.Component {

    render() {
        return (
            <div>

            </div>
        );
    }
}

export {CircularProgress, LinearProgress};