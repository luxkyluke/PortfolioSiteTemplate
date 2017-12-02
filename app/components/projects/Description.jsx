import React from "react";
//import Eye from 'svg-react-loader?name=Eye!../../../img/icons/eye_open.svg';

//var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
import Utility from './../../utilities/utility.js';


export default class Description extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const active = (this.props.isActive) ? " active" : "";
        /*            <img className="desc__eye" src="../../../img/icons/eye_open.svg"/>
             <path d="M136 131C82 131 39 103 0 68 38 31 81 0 136 0c56 0 99 31 137 68C234 103 191 131 136 131Zm0-14c38 0 77-17 115-50-38-35-77-52-115-52S60 32 22 67C60 100 98 117 136 117Z" className="desc__eye__outline"/>

                        <path d="M136 23a42.7 42.7 0 0 1 43 43c0 23-19 42-43 42-28 0-48-27-40-54 7 21 39 16 39-6 0-10-8-19-17-20A37.4 37.4 0 0 1 136 23Z" className="desc__eye__iris"/>
                   
        */
        return(
            <a onClick={this.props.click} className="desc__link">
                <div className={"desc"+active} >
                    <div className="clickableArea"></div>
                    <h3 className="desc__title">Project</h3>
                    <h2 className="desc__name">{this.props.name}</h2>
                    <h3 className="desc__title">Category</h3>
                    <h2 className="desc__category">{this.props.category}</h2>
                    <div className="desc__eyewrapper">
                        <svg viewBox="0 0 92.7 44.3" className="desc__eye">
                            <path d="M46.2,43.7c-17.7,0-31.8-9.2-44.6-20.7C14,10.8,28.2,0.7,46.2,0.7c18.4,0,32.5,10.2,45,22.3C78.4,34.5,64.3,43.7,46.2,43.7z
         M46.2,39.1c12.5,0,25.3-5.6,37.7-16.4C71.5,11.2,58.7,5.6,46.2,5.6S21.3,11.2,8.8,22.6C21.3,33.5,33.7,39.1,46.2,39.1z" className="desc__eye__outline"/>
                            <path d="M52.5,9.8c-3,0.3-5.6,3.3-5.6,6.6c0,7.2,10.5,8.9,12.8,2c2.6,8.9-3.9,17.7-13.1,17.7c-7.9,0-14.1-6.2-14.1-13.8
    c0-0.1,0-0.1,0-0.2c0.1-7.7,6.4-14,14.1-13.9C48.7,8.2,50.7,8.8,52.5,9.8z" className="desc__eye__iris"/>
                        </svg>
                    </div>
                </div>
            </a>
        );
    }
}
