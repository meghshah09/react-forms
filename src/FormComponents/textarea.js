import React from 'react';

const TextArea = (props) =>{
	return (
	<div>
	<label for={props.name}>Tell about yourself :</label>
	<br/>
	<textarea rows={props.row} cols={props.cols} placeholder={props.placeholder} />
	</div>
	);
}

export default TextArea;