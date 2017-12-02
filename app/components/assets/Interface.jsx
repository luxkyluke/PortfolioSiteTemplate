import React from "react";


const whiteArrow = require("./../../../img/icons/arrow_down_white.svg");
const blackArrow = require("./../../../img/icons/arrow_down_black.svg");


export default class Interface extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'opacity' : 0
        };
    }

    componentDidMount(){
        setTimeout(function(){
            this.setState({'opacity': 1})
        }.bind(this), 400);
    }

    render() {
        return(
            <div style={this.state.opacity}>
                <Children/>
            </div>
        );
    }
}
