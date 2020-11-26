
import React from 'react'
import { Table } from 'semantic-ui-react'
import ItemsTableHeader from './ItemsTableHeaderComponent'
import ItemsTableBody from './ItemsTableBodyComponent'
import ItemsTableFooter from './ItemsTableFooterComponent'

function ItemsTableComponent() {
  return (
    <Table selectable unstackable>
      <ItemsTableHeader />
      <ItemsTableBody />
      <ItemsTableFooter />
    </Table>
  )
}

export default ItemsTableComponent