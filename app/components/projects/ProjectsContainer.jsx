import React from "react";
import PropTypes from 'prop-types';

require ('./../../utilities/constantes.js');

//var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');

import Project from "./ProjectMin.jsx";
import Animation from "./../../utilities/Animation.js";
import ScrollDots   from "../projects/ScrollDots.jsx";
import Scroll from "../assets/Scroll.jsx";
import ProjectAPI from "../../api/ProjectApi.jsx";
import Utility from './../../utilities/utility.js';



const NB_PROJECT = ProjectAPI.nbProjects();

export default class ProjectsContainer extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props, context) {
        super(props, context);


        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClickDots = this.handleClickDots.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.next = this.next.bind(this);
        //document.documentElement.removeEventListener('scroll', this.handleScroll);

        this.state = {
            'currentId':0,
            'isActive':this.props.isActive
        };

        this.projects = ProjectAPI.all();

        this.state = {
            'currentId':0,
            'isActive':this.props.isActive,
            'allActive' : false
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.isActive !== this.state.isActive){
            if(nextProps.isActive){
                setTimeout(function(){
                    this.setState({'isActive':nextProps.isActive});
                }.bind(this), 1500);
            }else
                this.setState({'isActive':nextProps.isActive});

        }
    }

    handleScroll(e){
        if(!this.state.isActive){
            return;
        }
        //console.log(e);

        const dir = e.deltaY/Math.abs(e.deltaY);
        //console.log(dir);
        this.navProject(dir);
    }


    handleResize(){
        if(Utility.isTablet() && !this.state.allActive){
            window.removeEventListener('wheel', this.handleScroll);
            this.setState({allActive : true});
        }else if(!Utility.isTablet() && this.state.allActive){
            window.addEventListener('wheel', this.handleScroll);
            this.setState({allActive : false});
        }
    }

    navProject(dir){
        let nextId = (this.state.currentId+dir)%NB_PROJECT;
        if(nextId < 0){
            this.props.up();
            return;
        }
        window.removeEventListener('wheel', this.handleScroll);
        this.changeProject(nextId);
    }

    next(){
        this.navProject(1);
    }

    changeProject(id){
        Animation.changeProjectMin(this.state.currentId, id, function(){
            this.setState({"currentId": id});
            setTimeout(function(){
                window.addEventListener('wheel', this.handleScroll);
            }.bind(this), 1000);
        }.bind(this));
    }

    handleClickDots(id){
        this.changeProject(id);       
    }

    handleClick(id){
        console.log(id)
       Animation.openProject(this.state.currentId, this.projects[this.state.currentId].color, function(){
           this.context.router.history.push("/project/"+id);
       }.bind(this))

        //history.push('/project');
    }

    componentDidMount() { 
        window.addEventListener('wheel', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('wheel', this.handleScroll);
    }

    render() {
        /* */
        return(
            <div>
                <div className="projectsContainer">
                    <Project 
                        name={this.projects[0].name} 
                        id="0" 
                        isActive = {this.state.currentId === 0 || this.state.allActive}
                        title = {this.projects[0].title}
                        category= {this.projects[0].type}
                        click={this.handleClick}/> 
                    <Project 
                        name={this.projects[1].name} 
                        id="1" 
                        isActive = {this.state.currentId === 1 || this.state.allActive}
                        title = {this.projects[1].title}
                        category= {this.projects[1].type}
                        click={this.handleClick}/> 
                    <Project 
                        name={this.projects[2].name} 
                        id="2" 
                        isActive = {this.state.currentId === 2 || this.state.allActive}
                        title = {this.projects[2].title}
                        category= {this.projects[2].type}
                        click={this.handleClick}/> 
                    <Project 
                        name={this.projects[3].name} 
                        id="3" 
                        isActive = {this.state.currentId === 3 || this.state.allActive}
                        title = {this.projects[3].title}
                        category= {this.projects[3].type}
                        click={this.handleClick}/> 
                    <Project 
                        name={this.projects[4].name} 
                        id="4" 
                        isActive = {this.state.currentId === 4 || this.state.allActive}
                        title = {this.projects[4].title}
                        category= {this.projects[4].type}
                        click={this.handleClick}/> 

                    <ScrollDots 
                        nb={NB_PROJECT} 
                        click={this.handleClickDots}
                        currentId = {this.state.currentId}/>
                </div>
                <Scroll click={this.next}/>
            </div>
        );
    }
}
