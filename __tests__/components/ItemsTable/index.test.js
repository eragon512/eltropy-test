import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ItemsTable from '../../../src/components/ItemsTable'
import { mount } from '../../setup/setupEnzyme'

describe('<ItemsTable />', () => {

  const initialState = { items: [], search: '' }
  const createMockStore = configureStore();

  let store;

  beforeEach(() => {
    store = createMockStore(initialState);
  })

  test('successfully mounts', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ItemsTable />
      </Provider>
    );

    expect(wrapper.find('table')).toBeDefined();
  });
});
