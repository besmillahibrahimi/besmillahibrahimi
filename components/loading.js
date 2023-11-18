import React from 'react';

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            if (this.state.progress < 200)
                this.setState(pre => ({progress: pre.progress + 1}))
            else clearInterval(this.intervalId);
        }, 8)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div className={`relative h-5 w-full`}>
                <p className={`absolute text-xl top-[-40px] uppercase left-0 right-0 mx-auto w-max`}>Besmillah Ibrahimi</p>
                <div className={`relative w-[200px] mx-auto`}>
                    <span
                        className={`absolute z-10 bg-gray-400  top-0 left-0 right-0 mx-auto rounded-full h-3`}></span>
                    <span className={`absolute z-20 bg-yellow top-0 left-0 rounded-full h-3`}
                          style={{width: this.state.progress + 'px'}}></span>
                    <span
                        className={`mx-auto absolute top-3 left-0 right-0 mx-auto z-30 text-sm mx-auto w-max`}>
                    <label
                        className={`text-white`}>{Math.round(this.state.progress * 100 / 200)}%</label>
                    </span>
                </div>
            </div>
        );
    }
}

export default Loading;