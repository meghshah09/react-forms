import React from 'react';
import Input from "../FormComponents/Input";
import TextArea from "../FormComponents/TextArea";

export default class Form extends React.Component{
	

	render(){
		return (
		<div>
			<Input title="Name" name="name" placeholder="Whats Your name" inputType="text"/>
			
			<TextArea name="info" rows ="4" cols="50" placeholder= "write your text here.." />
		</div>
		);
	}
}








