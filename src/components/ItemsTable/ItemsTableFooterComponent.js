import React from "react";
import { connect } from "react-redux";
import { Table, Grid, Header } from 'semantic-ui-react'

function ItemsTableFooterComponent(props) {
  const { total } = props;

  return (
    <Table.Footer>
      <tr>
        <Table.HeaderCell colSpan='12'>
          <Grid verticalAlign='middle'>
            <Grid.Column width={14} textAlign='right'>
              <Header as='h3'>Total:</Header>
            </Grid.Column>
            <Grid.Column width={2} textAlign='center'>
              <Header as='h3'>{total}</Header>
            </Grid.Column>
          </Grid>
        </Table.HeaderCell>
      </tr>
    </Table.Footer>
  )
}

function mapStateToProps(state) {
  const { items, search } = state;

  return {
    total: items
      .filter(item => search ? item.label.toLowerCase().includes(search.toLowerCase()) : true)
      .map(item => item.count).reduce((a, b) => a + b, 0),
  }
}

export default connect(mapStateToProps)(ItemsTableFooterComponent)