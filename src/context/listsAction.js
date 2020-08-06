export const addList = name => ({
	type: 'ADD_LIST',
	payload: {name, isComplete: false}
});

export const removeList = name => ({
	type: 'REMOVE_LIST',
	payload: name
})

export const updateList = name => ({
	type: 'UPDATE_LIST',
	payload: name
})

export const setListType = type => ({
	type: 'SET_LIST_TYPE',
	payload: type
})