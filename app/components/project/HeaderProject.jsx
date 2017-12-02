import React from "react";
//import Scroll from 'react-scroll'; // Imports all Mixins
 

import Button   from "./../assets/Button.jsx";
import ScrollArrow   from "./../assets/Scroll.jsx";
import Animation   from "./../../utilities/Animation.js";

export default class HeaderProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: ""
        }
        
    }

    componentDidMount(){
        setTimeout(function(){
            this.setState({active:' active'})
        }.bind(this), 750);
    }

    render() {
        //<img className="header__right__img" src={this.props.img} />
        const backgroundStyle = {'backgroundImage' : 'url('+this.props.img+')',
            'transform':'scale('+this.props.scale+')'
        }
        const color = {color : this.props.color};
        return(
            <div className="header_project">
                <div className={"header_project__left" + this.state.active}>
                    <div className="header_project__left__wrapper">
                        <div className="header_project__left__wrapper__text">
                            <h3 className="header_project__left__wrapper__text__type" style={color}>{this.props.type}</h3>
                            <h2 className="header_project__left__wrapper__text__title">{this.props.title}</h2>
                            <p className="header_project__left__wrapper__text__desc" dangerouslySetInnerHTML={{__html : this.props.desc}}/>
                        </div>
                        <Button 
                            label="see website" 
                            link={this.props.link} 
                            target="_blank"
                            color = {this.props.color}
                            hide = {!this.props.link}/>
                    </div>
                </div>
                <div className="header_project__right" style={backgroundStyle}>
                </div>
                <ScrollArrow click={this.props.scrollClick} black={true}/>
                <ScrollArrow click={this.props.scrollClick} black={false}/>
            </div>
        );
    }
}
