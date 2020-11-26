import React from 'react'
import { connect } from 'react-redux'
import { Table, Grid, Input, Button, Icon } from 'semantic-ui-react'

function ItemsTableHeaderComponent(props) {
  const {
    addItem,
    searchText,
    changeSearchText,
  } = props

  return (
    <Table.Header>
      <tr>
        <Table.HeaderCell colSpan='12'>
          <Grid>
            <Grid.Column width={12}>
              <Input
                fluid
                icon='search'
                iconPosition='left'
                placeholder='Search by Item Name...'
                value={searchText}
                onChange={(e) => changeSearchText(e.target.value)}
              />
            </Grid.Column>
            <Grid.Column width={4} textAlign='right'>
              <Button positive icon onClick={() => addItem()}>
                <Icon name='add' /> &nbsp; Add
            </Button>
            </Grid.Column>
          </Grid>
        </Table.HeaderCell>
      </tr>
    </Table.Header>
  )
}

function mapStateToProps(state) {
  const { search } = state;

  return {
    searchText: search,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (item = {}) => dispatch({
      type: 'ADD_ITEM', 
      payload: { label: item.label, count: item.count },
    }),
    changeSearchText: (newSearchText) => dispatch({
      type: 'UPDATE_SEARCH_TEXT',
      payload: { searchText: newSearchText },
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsTableHeaderComponent)