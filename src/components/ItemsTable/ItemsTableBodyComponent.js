import React from 'react'
import { connect } from "react-redux"
import Table from 'semantic-ui-react/dist/es/collections/Table'
import Form from 'semantic-ui-react/dist/es/collections/Form'
import Menu from 'semantic-ui-react/dist/es/collections/Menu'
import Message from 'semantic-ui-react/dist/es/collections/Message'
import Icon from 'semantic-ui-react/dist/es/elements/Icon'
import Input from 'semantic-ui-react/dist/es/elements/Input'

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
                >
                  <input disabled={!item.isLabelEditable} />
                </Form.Input>
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
      .filter(item => search ? item.label.toLowerCase().includes(search) : true),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeItem: (itemIndex) => dispatch({ type: 'REMOVE_ITEM', index: itemIndex }),
    incrementItemCount: (itemIndex) => dispatch({ type: 'ADD_TO_ITEM_COUNT', index: itemIndex, addCount: 1 }),
    decrementItemCount: (itemIndex) => dispatch({ type: 'ADD_TO_ITEM_COUNT', index: itemIndex, addCount: -1 }),
    changeItemCount: (itemIndex, newItemCount) => dispatch({
      type: 'CHANGE_ITEM_COUNT', 
      index: itemIndex, 
      count: newItemCount,
    }),
    changeItemLabel: (itemIndex, newItemLabel) => dispatch({
      type: 'CHANGE_ITEM_LABEL',
      index: itemIndex,
      label: newItemLabel,
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsTableBodyComponent)