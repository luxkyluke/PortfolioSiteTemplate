import React from "react";

import FooterSide from "./FooterSide.jsx";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="footer">
                <FooterSide 
                    background = {this.props.backgroundPrev} 
                    side="left"
                    id={this.props.idPrev}
                    click={this.props.click}
                    title = {this.props.titlePrev}/>
                <FooterSide 
                    background = {this.props.backgroundNext} 
                    side="right"
                    id={this.props.idNext}
                    click={this.props.click}
                    title = {this.props.titleNext}/>
            </div>
        );
    }
}
