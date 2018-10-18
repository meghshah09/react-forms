import React from 'react';

const Select = (props)=>{
	<div>
	<label for={props.name}>{props.title}</label>
	<select id={props.name} name={props.name}>
	<option></option>
	</div>
}

export default Select;