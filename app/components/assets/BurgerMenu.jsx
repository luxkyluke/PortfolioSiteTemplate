import React from "react";


const whiteArrow = require("./../../../img/icons/arrow_down_white.svg");
const blackArrow = require("./../../../img/icons/arrow_down_black.svg");


export default class BurgerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const toggled = !this.state.toggled;
        this.setState({
            toggled: toggled
        });
        this.props.click();
    }

    render() {
       const myClass = this.props.isOpen ? "burger toggled" : "burger not-toggled";
        return(
            <a onClick={this.props.click} >
                <div className={myClass}>
                    <span className="burger__span"></span>
                </div>
            </a>
        );
    }
}
