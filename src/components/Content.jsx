import React, {useState}  from 'react';
import AddList from './AddList';
import List from './List';
import ListSelect from './ListSelect';

const initList = [
  {
    name: 'Add new list by enter the name',
    isComplete: false
  },
  {
    name: '<-- Check this if complete',
    isComplete: false
  },
  {
    name: 'Click this to delete -->',
    isComplete: false
  },
  {
    name: 'Select options below to filter lists',
    isComplete: false
  },
]

const Content = () => {
  const [lists, setLists] = useState(initList);
  const [listType, setListType] = useState('incomplete');

  const addList = name => {
    setLists(prev => [...prev, {name: name, isComplete: false}]);
  }

  const deleteList = name => {
    setLists(prev => prev.filter(list => list.name !== name));
  }

  const toggleIsCompleteList = name => {
    const newLists = [...lists];
    const index = lists.map(list => list.name).indexOf(name);

    newLists[index].isComplete = !newLists[index].isComplete;
    setLists(newLists);
  }

  const showList = () => {
    switch (listType) {
            case 'all':
              return lists.map((list, index) => 
                    <List 
                      key={index}
                      name={list.name} 
                      isComplete={list.isComplete}
                      deleteList={deleteList} 
                      toggleIsCompleteList={toggleIsCompleteList} 
                    />
                    );
            case 'completed':
              return lists.map((list, index) => 
                    list.isComplete && <List
                      key={index} 
                      name={list.name} 
                      isComplete={list.isComplete}
                      deleteList={deleteList} 
                      toggleIsCompleteList={toggleIsCompleteList} 
                    />
                    );
            case 'incomplete':
              return lists.map((list, index) => 
                    !list.isComplete && <List
                      key={index} 
                      name={list.name} 
                      isComplete={list.isComplete}
                      deleteList={deleteList} 
                      toggleIsCompleteList={toggleIsCompleteList} 
                    />
                    );
            default: return null;
          }
  }

  return (
    <div className="list-container">
      <AddList addList={addList} />
      <div className="list-item-container">
        {showList()}
      </div>
      <ListSelect setListType={setListType} />
    </div>
  )
}


export default Content