import React from "react";

class PrimaryButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} type={'submit'}
                    className={`bg-yellow px-8 py-3 uppercase text-secondary-800 text-sm font-medium`}>{this.props.children}</button>
        );
    }
}

export default PrimaryButton;