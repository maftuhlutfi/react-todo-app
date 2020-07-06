import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const HeaderLogo = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='calendar check outline' circular />
      <Header.Content>Todo List</Header.Content>
    </Header>
  </div>
)

export default HeaderLogo