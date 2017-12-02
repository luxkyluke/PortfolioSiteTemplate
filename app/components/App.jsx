import React from "react";
import PropTypes from "prop-types";

import Main	from "./Main.jsx"
import Header	from "./Header.jsx"
import Footer	from "./Footer.jsx"
import Style from "./../assets/scss/main.scss"
import Anim from "./../utilities/backgroundAnim.js"

export default class App extends React.Component {
	/*constructor(props, context){
		super(props, context);
	}

	componentWillMount() {
		this.unlisten = this.context.router.history.listen((location, action) => {
		  console.log("on route change");
		});
	}
	
	componentWillUnmount() {
	  this.unlisten();
	}*/

    render() {   
        return(			
			<div>
				<Header />
				<Main />
			</div>
        );
    }
}
