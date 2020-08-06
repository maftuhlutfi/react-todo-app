import React, {useContext} from 'react';
import { Checkbox, Icon } from 'semantic-ui-react';

import { ListContext } from '../context/listContext';

export default function List({name, isComplete}) {
	const { removeList, updateList } = useContext(ListContext)

	const handleChange = e => {
		updateList(name);
	}

	const handleClick = () => {
		removeList(name);
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