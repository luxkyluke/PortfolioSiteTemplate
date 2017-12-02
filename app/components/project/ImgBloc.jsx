import React from "react";
import ProgressiveImage from "react-progressive-image-loading";

import Utility from './../../utilities/utility.js';

export default class ImgBloc extends React.Component {
    constructor(props) {
        super(props);
        
        if(Utility.isVideo(this.props.src)){
            this.content = (
                <div className="video__wrapper">
                    <iframe 
                        className="video" 
                        src="https://player.vimeo.com/video/217138011"  
                        frameBorder="0"  
                        allowFullScreen/>
                </div>
            )
        }else{
            this.content = (
                <ProgressiveImage
                    preview={Utility.getBlurImg(this.props.src)}
                    src={this.props.src}
                    render={(src, style) => <img className="imgBloc__frame__img" src={src} style={style} />}
                />
            );
        }
    }

    render() {
        const myClass = (this.props.full) ? " full" : "";
        return(
            <div className={'imgBloc'+myClass} >
                <div className="imgBloc__frame">
                    {this.content}
                </div>    
            </div>
        );
    }
}
