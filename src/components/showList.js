import React from 'react'

export default showList = type => {
	switch (type) {
		case 'all':
			return lists.map((list, index) => 
	          <List 
	          	key={index}
	            name={list.name} 
	            isComplete={list.isComplete}
	            deleteList={deleteList} 
	            toggleIsCompleteList={toggleIsCompleteList} 
	          />
          	)
			break;
		case 'completed':s
			return lists.map((list, index) => 
	          list.isComplete && <List 
	          	key={index}
	            name={list.name} 
	            isComplete={list.isComplete}
	            deleteList={deleteList} 
	            toggleIsCompleteList={toggleIsCompleteList} 
	          />
          	)
			break;
		case 'incomplete':
			return lists.map((list, index) => 
	          !list.isComplete && <List 
	          	key={index}
	            name={list.name} 
	            isComplete={list.isComplete}
	            deleteList={deleteList} 
	            toggleIsCompleteList={toggleIsCompleteList} 
	          />
          	)
			break;
	}
}