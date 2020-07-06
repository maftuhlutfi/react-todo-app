import React from 'react';
import { Checkbox, Icon } from 'semantic-ui-react';

export default function List({name, isComplete, deleteList, toggleIsCompleteList}) {
	const handleChange = e => {
		toggleIsCompleteList(name);
	}

	const handleClick = () => {
		deleteList(name);
	}

	return (
		<div className="list-item">
			<Checkbox 
				label={name}
				checked={isComplete ? true : false}
				style={isComplete ? {width: '90%', textDecoration: 'line-through'} : {width: '90%'}}
				onChange={handleChange}
			/>
			<Icon 
				style={{float: 'right', lineHeight: "2"}} 
				link 
				name='close' 
				size='small' 
				onClick={handleClick}
			/>
		</div>
	)
}