import React, {useContext} from 'react';
import { Dropdown } from 'semantic-ui-react';

import { ListContext } from '../context/listContext';

const listOptions = [
  { key: 'all', value: 'all', text: 'all' },
  { key: 'completed', value: 'completed', text: 'completed' },
  { key: 'incomplete', value: 'incomplete', text: 'incomplete', selected: true },
]

const ListSelect = () => {
  const { setListType } = useContext(ListContext);

  const handleChange = e => {
    setListType(e.target.innerText);
  }

  return (
    <div className="list-select">
      Show me&nbsp;{' '} 
      <Dropdown
        inline
        options={listOptions}
        defaultValue={listOptions[2].value}
        onChange={handleChange}
      />
      &nbsp;lists
    </div>
  )
}

export default ListSelect;