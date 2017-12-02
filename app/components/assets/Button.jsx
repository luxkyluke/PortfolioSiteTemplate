import React from "react";


/*
 Pour construire ce bouton, il faut lui donner :
 - "label" : le texte du bouton
 - "property" : une propriété, qui sera donnée en paramètre du callback
 - "callback" : la fonction de callback
 */

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.hide)
            return (<div style={{"display" : 'none'}}></div>);
        const myStyle = (this.props.color) ? {backgroundColor : this.props.color} : {};
        return(
            <div className="button" >
                <a onClick={this.props.click} href={this.props.link} target={this.props.target}>
                    <div className="button__wrapper" style={myStyle}>
                        {this.props.label}
                    </div>
                </a>
            </div>
        );
    }
}
