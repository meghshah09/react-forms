import React from 'react';

const Input = (props) =>{
		return (<div>
			<label for= {props.name}>{props.title}</label> &nbsp;
			<input type={props.type} id={props.name} name={props.name} placeholder={props.placeholder}/>
		</div>
		);
}
export default Input;