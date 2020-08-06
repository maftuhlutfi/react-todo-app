const listsReducer = (state, action) => {
	switch (action.type) {
		case "ADD_LIST":
			return {
				...state,
				lists: [...state.lists, action.payload]
			};
		case "REMOVE_LIST":
			return {
				...state,
				lists: state.lists.filter(list => list.name !== action.payload)
			};
		case "UPDATE_LIST":
			return {
				...state,
				lists: state.lists.map(list => 
					list.name === action.payload ? {...list, isComplete: !list.isComplete} : list)
			};
		case "SET_LIST_TYPE": 
			return {
				...state,
				listType: action.payload
			};
		default:
			return state;
	}
}

export default listsReducer;