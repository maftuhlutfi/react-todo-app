import React, {useContext}  from 'react';
import AddList from './AddList';
import List from './List';
import ListSelect from './ListSelect';

import { ListContext } from '../context/listContext';

const Content = () => {
  const { lists, listType } = useContext(ListContext);

  const showList = () => {
    switch (listType) {
            case 'all':
              return lists.map((list, index) => 
                    <List 
                      key={index}
                      name={list.name} 
                      isComplete={list.isComplete}
                    />
                    );
            case 'completed':
              return lists.map((list, index) => 
                    list.isComplete && <List
                      key={index} 
                      name={list.name} 
                      isComplete={list.isComplete}
                    />
                    );
            case 'incomplete':
              return lists.map((list, index) => 
                    !list.isComplete && <List
                      key={index} 
                      name={list.name} 
                      isComplete={list.isComplete}
                    />
                    );
            default: return null;
          }
  }

  return (
    <div className="list-container">
      <AddList />
      <div className="list-item-container">
        {showList()}
      </div>
      <ListSelect />
    </div>
  )
}


export default Content