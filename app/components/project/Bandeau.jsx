import React from "react";

import BandeauBloc  from "./BandeauTxtBloc.jsx";

export default class Bandeau extends React.Component {
    constructor(props) {
        super(props);
        this.style = {backgroundColor : this.props.color}
    }

    render() {
        return(
            <div className="bandeau" style={this.style}>
                <div className="bandeau__wrapper">
                    <BandeauBloc color={this.props.txtcolor} title="role" label={this.props.role}/>
                    <BandeauBloc color={this.props.txtcolor} title="context" label={this.props.context}/>
                    <BandeauBloc color={this.props.txtcolor} title="year" label={this.props.year}/>
                </div>
            </div>
        );
    }
}
