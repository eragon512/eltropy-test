import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ItemsTableBody from '../../../src/components/ItemsTable/ItemsTableBodyComponent'
import { mount } from '../../setup/setupEnzyme'

describe('<ItemsTableBody />', () => {

  const initialState = { items: [{ label: 'A', count: 1 }], search: '' }
  const createMockStore = configureStore();

  let store;

  beforeEach(() => {
    store = createMockStore(initialState);
  })

  test('successfully mounts', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ItemsTableBody />
      </Provider>
    );

    expect(wrapper.find('input[type="text"]').props().value).toEqual('A');
    expect(wrapper.find('input[type="number"]').props().value).toEqual(1);
  });
});
