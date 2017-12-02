import React from "react";

export default class BandeauTxtBloc extends React.Component {
    constructor(props) {
        super(props);

        this.label = this.props.label.split('<br>').map(function(item, key) {
          return (
            <span key={key} className="bandeau__bloc__label">
              <p className="bandeau__bloc__label__text" dangerouslySetInnerHTML={{__html: item}}/>
            </span>
          )
        })

    }

    render() {
        const color = {color : this.props.color};
        return(
            <div className="bandeau__bloc">
                <h3 className="bandeau__bloc__title" style={color}>{this.props.title}</h3>
                {this.label}
            </div>
        );
    }
}
