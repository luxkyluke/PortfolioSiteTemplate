import React from "react";
import {Link} from "react-router-dom";
import ProgressiveImage from "react-progressive-image-loading";

import Utility from './../../utilities/utility.js';


const arrow = require('./../../../img/icons/arrow_next.svg');

export default class FooterSide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const myStyle = {backgroundImage:'url('+this.props.background+')'};
        return(
            <div className={"footer__side "+this.props.side}>
                <Link to={"/project/"+this.props.id} onClick={this.props.click.bind(this, this.props.id)}>
                    <div className="footer__side__scaler">
                        <ProgressiveImage
                            preview={Utility.getBlurImg(this.props.background)}
                            src={this.props.background}
                            transitionTime={500}
                            transitionFunction="ease"
                            render={(src, style) => 
                                <div    className="footer__side__img" 
                                        style={Object.assign(style, { backgroundImage: `url(${src})` })} />
                            }
                        />
                    </div>
                    <div className={"footer__side__wrapper"}>
                        <h2 className="footer__side__title">{this.props.title}</h2>  
                        <img className="footer__side__arrow" src={arrow}/>
                    </div>
                </Link>
            </div>
        );
    }
}
