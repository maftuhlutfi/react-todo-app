import React, {createContext, useReducer} from 'react';
import {initLists} from './initLists';

import listsReducer from './listsReducer';
import { addList, removeList, updateList, setListType } from './listsAction';

const initState = {
	lists: initLists,
	listType: 'incomplete'
}

const ListContext = createContext(initState);

const ListsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(listsReducer, initState);

	return (
		<ListContext.Provider value={{
			lists: state.lists,
			listType: state.listType,
			addList: data => dispatch(addList(data)),
			removeList: data => dispatch(removeList(data)),
			updateList: data => dispatch(updateList(data)),
			setListType: data => dispatch(setListType(data))
		}}>
			{children}
		</ListContext.Provider>
	)
};

export { ListContext, ListsProvider };