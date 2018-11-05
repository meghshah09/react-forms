import React from 'react';
import Input from "../FormComponents/Input";
import TextArea from "../FormComponents/TextArea";
import Select from "../FormComponents/Select";
import Button from "../FormComponents/Button";
export default class Form extends React.Component{
	constructor(props) {
	super(props)
    this.state = {
      newUser: {
        name: '',
        gender: '',
        about: ''
      },
      genderOptions: ['Male', 'Female', 'Others']
    }
	
	this.handleFormSubmit = this.handleFormSubmit.bind(this) //manipulate user state (this) for every new form submission.
	
	this.handleChangeInput = this.handleChangeInput.bind(this);
	
	this.handleChangeTA = this.handleChangeTA.bind(this);
	
	}//end of constructor
	handleChangeInput(e){
		let value = e.target.value;
		this.setState((prevState)=>{
		return {newUser: prevState.name}
		})
	}
	handleChangeTA(e){
	
	}
	
	handleFormSubmit(e){
		let data = this.state.newUser;
		console.log(data);
		//alert(data.gender);
	}
	render(){
		return (
		<form onSubmit={this.handleFormSubmit}>
			<Input title="Name" name="name" placeholder="Whats Your name" inputType="text" value={this.state.newUser.name} handleChange={this.handleChangeInput}/>
			
			<TextArea name="info" rows ="4" cols="50" placeholder= "write your text here.."
			value={this.state.newUser.about} handleChange={this.handleChangeTA}/>
			
			<Select title={'Gender'}
                  name={'gender'}
                  options = {this.state.genderOptions} 
                  value = {this.state.newUser.gender}
                  placeholder = {'Select Gender'}
                  
            />
			
			<Button action = {this.handleFormSubmit}type = {'primary'} title = {'Submit'} />
		</form>
		);
	}
}








