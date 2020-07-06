import React, {useState} from 'react'
import { Button, Icon, Input } from 'semantic-ui-react';

const AddList = ({addList}) => {
	const [toggle, setToggle] = useState(false);
	const [input, setInput] = useState("");

	const handleChange = e => {
		const {value} = e.target;

		setInput(value);
		value !== "" ? setToggle(true) : setToggle(false);
	}

	const handleClick = () => {
		addList(input);
		setInput("");
		setToggle(false);
	}

	return (
		<div className="add-list">
			<Input 
				style={toggle ? {width: "80%", marginRight: "2%"} : {width: "100%"}} 
				className="input-list" 
				placeholder="Add a new list"
				onChange={handleChange} 
				value={input}
			/>
			{toggle &&
				<Button onClick={handleClick} icon>
					<Icon name='add' />
				</Button>}
		</div>
	)
}

export default AddList