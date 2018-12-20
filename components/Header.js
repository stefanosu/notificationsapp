import React, {Component} from 'react';


class Header extends React.Component {
	render() {
	  return(
	  	<div className="header">
	  	  <div className="fa fa-more"></div> 

	  	  <span className="title">Timeline</span>

	  	  <input 
	  	  	type="text"
	  	  	className="searchInput"
	  	  	placeholder="Search "/>

	  	  <div className="fa fa-searchIcon"></div>
	  	  </div>	

	  )	
	}
}


