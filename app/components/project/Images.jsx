import React from "react";

import ImgBloc  from "./ImgBloc.jsx";

export default class Project extends React.Component {
    constructor(props) {
        super(props);

        const listImg = this.props.imgs.map((img, i) => 
            <ImgBloc full={img.full} src={img.src} key={i}/>
        );

        this.state = {
            listImg : listImg
        }
    }

    render() {
        return(
            <div className="images">
                {this.state.listImg}
            </div>
        );
    }
}
