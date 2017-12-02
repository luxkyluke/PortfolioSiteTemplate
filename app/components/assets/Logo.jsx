import React from "react";

import Interface from "./Interface.jsx"

export default class Logo extends Interface {
    constructor(props) {
        super(props);
    }

    render() {
        const color = (this.props.black) ? "#000" : "#f3f3f3";
        const myStyle = {'color' : color, 'opacity' : this.state.opacity};
        return(
            <a onClick={this.props.click} >
                <div className="logo" style={myStyle}>
                    <h2 className="logo__title">Antoine Demiere</h2>
                </div>
            </a>
        );
    }
}
