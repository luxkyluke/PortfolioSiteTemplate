import React from "react";
import { Link } from 'react-router-dom';


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state={
            open : this.props.isOpen,
            scale : "",
            move: ""
        }
    }

    handleClick(id, e) {
       //e.preventDefault();
        this.props.close();
    }

    componentWillReceiveProps(newProps){
        if(newProps.isOpen){
            this.setState({scale : " scale"});
            setTimeout(function(){
                this.setState({move : " move", open: true});
            }.bind(this), 0);
        }else{
            this.setState({scale : ""});
            setTimeout(function(){
                this.setState({move : "", open: false});
            }.bind(this), 0);
        }
    }

    render() {
        const myClass = (this.state.open) ? " open" : "";
        return(
            <nav id="menu" className={"menu"+myClass}>
                <ul className={"menu__list" + this.state.scale + this.state.move}>
                    
                    <li className="menu__list__item">
                        <Link to="/" onClick={this.handleClick.bind(this, "home")}>home</Link>
                    </li>

                    <li className="menu__list__item">
                        <Link to="/projects" onClick={this.handleClick.bind(this, "projects")}>projects</Link>
                    </li>
                    <li className="menu__list__item">
                        <Link to="/about" onClick={this.handleClick.bind(this, "aboutme")}>about me</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
