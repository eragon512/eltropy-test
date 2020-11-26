import React from 'react'
import { connect } from 'react-redux'
import Table from 'semantic-ui-react/dist/es/collections/Table'
import Grid from 'semantic-ui-react/dist/es/collections/Grid'
import Form from 'semantic-ui-react/dist/es/collections/Form'
import Input from 'semantic-ui-react/dist/es/elements/Input'
import Button from 'semantic-ui-react/dist/es/elements/Button'
import Icon from 'semantic-ui-react/dist/es/elements/Icon'

function ItemsTableHeaderComponent(props) {
  const {
    addItem,
    searchText,
    changeSearchText,
  } = props

  return (
    <Table.Header>
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
    addItem: (item = {}) => dispatch({ type: 'ADD_ITEM', label: item.label, count: item.count }),
    changeSearchText: (newSearchText) => dispatch({ type: 'UPDATE_SEARCH_TEXT', searchText: newSearchText }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsTableHeaderComponent)