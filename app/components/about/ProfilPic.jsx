import React from "react";
import {Link} from "react-router-dom";


import pp from "./../../../img/pp.jpg";
import TiltFx from "./../../utilities/AnimPicture.js";
import Utility from "./../../utilities/utility.js";

export default class ProfilPic extends React.Component {
    constructor(props) {
        super(props);

        this.state={isTablet : Utility.isTabletPortrait()}

        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleResize);
        if(!this.state.isTablet)
            new TiltFx(document.querySelector('div.tilter'));
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize);
    }
    
    handleResize(){
        if(Utility.isTabletPortrait() && !this.state.isTablet){
            this.setState({isTablet : true});
        }else if(!Utility.isTabletPortrait() && this.state.isTablet){
            this.setState({isTablet : false});
        }
    }

    render() {
        const myStyle = {backgroundImage:'url('+this.props.background+')'};
        if(this.state.isTablet){
            return(
                <div className="profilPicFull">
                    <div className="profilPicFull__background">
                        <div className="profilPicFull__background__filter"/>
                    </div>
                </div>
            );
        }
        return(
            <div className="profilPic">
                <div className="tilter">
                    <figure className="tilter__figure">
                        <img className="tilter__image" src={pp} alt="pp"/>
                        <div className="tilter__deco tilter__deco--shine">
                            <div></div>
                        </div>
                    </figure>
                    <svg className="tilter__deco tilter__deco--lines" viewBox="0 0 415 415">
                        <path d="M20.5,20.5h375v375h-375V20.5z"/>
                    </svg> 
                </div>
            </div>
        );
    }
}
