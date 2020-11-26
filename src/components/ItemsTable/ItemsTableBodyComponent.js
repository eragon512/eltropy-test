import React from 'react'
import { connect } from "react-redux"
import { Table, Form, Menu, Input, Message, Icon } from 'semantic-ui-react'

function ItemsTableBodyComponent(props) {
  const {
    items,
    removeItem,
    incrementItemCount,
    decrementItemCount,
    changeItemCount,
    changeItemLabel,
  } = props

  return (
    <Table.Body>
      {
        items.map((item, itemIndex) => (
          <Table.Row key={itemIndex}>
            <Table.Cell colSpan='1' textAlign='right'>
              <Icon
                style={{ cursor: 'pointer' }}
                color='red'
                name='trash'
                onClick={() => removeItem(itemIndex)}
              />
            </Table.Cell>
            <Table.Cell>
              <Form>
                <Form.Input
                  transparent
                  size='large'
                  placeholder='Please enter a name for item...'
                  error={item.isDuplicate}
                  value={item.label}
                  onChange={(e) => changeItemLabel(itemIndex, e.target.value)}
                />
              </Form>
              {
                item.isDuplicate ? (
                  <Message negative>
                    <p>Item with same name exists, please change the item name</p>
                  </Message>
                ) : null
              }
            </Table.Cell>
            <Table.Cell colSpan='2'>
              <Menu compact floated='right'>
                <Menu.Item icon onClick={() => decrementItemCount(itemIndex)}>
                  <Icon color='red' name='minus circle' />
                </Menu.Item>
                <Menu.Item style={{ maxWidth: '5rem' }}>
                  <Input
                    transparent
                    type='number'
                    value={item.count}
                    onChange={(e) => changeItemCount(itemIndex, Number(e.target.value))}
                  />
                </Menu.Item>
                <Menu.Item icon onClick={() => incrementItemCount(itemIndex)}>
                  <Icon color='blue' name='plus circle' />
                </Menu.Item>
              </Menu>
            </Table.Cell>
          </Table.Row>
        ))
      }
    </Table.Body>
  )
}

function mapStateToProps(state) {
  const { items, search } = state;

  const itemLabels = items.map(item => item.label)

  return {
    items: items
      .map((item, itemIndex) => ({
        ...item,
        isDuplicate: itemLabels.indexOf(item.label) !== itemIndex,
      }))
      .filter(item => search ? item.label.toLowerCase().includes(search.toLowerCase()) : true),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeItem: (itemIndex) => dispatch({
      type: 'REMOVE_ITEM',
      payload: { index: itemIndex },
    }),
    incrementItemCount: (itemIndex) => dispatch({
      type: 'ADD_TO_ITEM_COUNT', 
      payload: { index: itemIndex, addCount: 1 },
    }),
    decrementItemCount: (itemIndex) => dispatch({
      type: 'ADD_TO_ITEM_COUNT',
      payload: { index: itemIndex, addCount: -1 },
    }),
    changeItemCount: (itemIndex, newItemCount) => dispatch({
      type: 'CHANGE_ITEM_COUNT', 
      payload: { index: itemIndex, count: newItemCount },
    }),
    changeItemLabel: (itemIndex, newItemLabel) => dispatch({
      type: 'CHANGE_ITEM_LABEL',
      payload: { index: itemIndex, label: newItemLabel },
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsTableBodyComponent)