import React from 'react';
import Header from './components/Header';
import Content from './components/Content';

import { ListsProvider } from './context/listContext';

import './style.css';

function App() {

	return (
		<ListsProvider>
			<div>
				<Header />
				<Content />
			</div>
		</ListsProvider>
	);
}

export default App;
