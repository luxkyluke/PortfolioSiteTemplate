import React from "react";

import Interface from './Interface.jsx'

const whiteArrow = require("./../../../img/icons/arrow_down_white.svg");
const blackArrow = require("./../../../img/icons/arrow_down_black.svg");


export default class Scroll extends Interface {
    constructor(props) {
        super(props);
        this.state = {
            "black" : this.props.black
        };
    }

    render() {
        let myClass = "scroll ";
        myClass += (this.state.black) ? "black" : "white";
        const src = this.props.black ? blackArrow : whiteArrow;
        return(
            <a onClick={this.props.click} >
                <div className={myClass} style={{'opacity':this.state.opacity}}>
                    <h3 className="scroll__title">scroll</h3>
                    <img className="scroll__arrow" src={src}/>
                </div>
            </a>
        );
    }
}
