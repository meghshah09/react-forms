import React from 'react';

export default class Hero extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (<p>{this.props.title}</p>);
	}
}
