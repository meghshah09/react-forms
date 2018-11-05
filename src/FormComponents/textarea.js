import React from 'react';

const TextArea = (props) =>{
	return (
	<div>
	<br/>
	<label>Tell about yourself :</label>
	<br/>
	<textarea rows={props.row} cols={props.cols} placeholder={props.placeholder} value={props.value}
	onChange={props.handleChange}/>
	</div>
	);
}

export default TextArea;