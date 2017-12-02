import React from "react";
require ('./../../utilities/constantes.js')

export default class ScrollDot extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const myClass = (this.props.isCurrent) ? "scrollDot current" : "scrollDot";
        return(
            <a onClick={this.props.click.bind(this, this.props.id)}>
                <div className={myClass}>
                </div>
            </a>
        );
    }
}
