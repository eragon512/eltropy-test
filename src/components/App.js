import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import ItemsTable from './ItemsTable'

import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Container textAlign='center'>
      <br />
      <Header as='h1'>Welcome to the Eltropy Assignment!</Header>
      <br /><br />
      <ItemsTable />
    </Container>
  )
}

export default App