import React from 'react';

const Input = (props) =>{
		return (<div>
			<label>{props.title}</label> &nbsp;
			<input type={props.type} id={props.name} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.handleChange}/>
		</div>
		);
}
export default Input;