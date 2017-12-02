import React from "react";
import ProgressiveImage from "react-progressive-image-loading";

require ('./../../utilities/constantes.js');

import Description from "./Description.jsx"

import ColorThief from './../../utilities/color-thief.js';


export default class ProjectMin extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            'mainColorImg' : 'rgba(0, 0, 0, 0)',
            'ax' : '0',
            'ay' : '0'
        } ;

        this.handleClick = this.handleClick.bind(this);
        this.handleImgLoaded = this.handleImgLoaded.bind(this);
        //document.documentElement.removeEventListener('scroll', this.handleScroll);
    }

    handleClick(){

    }

    

    handleImgLoaded(){
        //getMainColors
        /*let img = new Image();
        img.src = this.props.cover;
        var colorThief = new ColorThief();
        var color = colorThief.getColor(img);
        const rgba = 'rgba('+color[0]+', '+color[1]+', '+color[2]+', 0.4)';
       // console.log(rgba);
        this.setState({'mainColorImg': rgba});*/
    }

    handleImgError(){
        console.err("Error loading img : "+this.props.cover);
    }


    render() {      
        const filterStyle = {backgroundColor: this.state.mainColorImg}
        
        const myClass = (this.props.id%2 === 0) ? "project even" : "project odd";
        const active = (this.props.isActive) ? " active" : "";

        return(
            <div className={myClass+active} id={"project_"+this.props.id}>
                <div className='project__image' >
                    <a onClick={this.props.click.bind(this, this.props.id)} >
                        <div className={"project__image__img"+active} >
                            <ProgressiveImage
                                preview={'./data/'+this.props.name+'/background.blur.jpg'}
                                src={'./data/'+this.props.name+'/background.jpg'}
                                transitionTime={500}
                                transitionFunction="ease"
                                render={(src, style) => 
                                    <div 
                                        className={"project__image__img__wrapper"} 
                                        style={Object.assign(style, { backgroundImage: `url(${src})` })} 
                                    />
                                }
                            />
                        </div>
                    </a>
                </div>
                <Description    name ={this.props.title} 
                                category={this.props.category} 
                                click={this.props.click.bind(this, this.props.id)}
                                isActive = {this.props.isActive}
                /> 
            </div>
           
        );
    }
}
