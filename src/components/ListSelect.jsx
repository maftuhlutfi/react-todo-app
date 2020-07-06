import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const listOptions = [
  { key: 'all', value: 'all', text: 'all' },
  { key: 'completed', value: 'completed', text: 'completed' },
  { key: 'incomplete', value: 'incomplete', text: 'incomplete', selected: true },
]

const ListSelect = ({setListType}) => {
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

export default ListSelect