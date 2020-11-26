import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ItemsTableHeader from '../../../src/components/ItemsTable/ItemsTableHeaderComponent'
import { mount } from '../../setup/setupEnzyme'

describe('<ItemsTableHeader />', () => {

  const initialState = { items: [], search: 'Search' }
  const createMockStore = configureStore();

  let store;

  beforeEach(() => {
    store = createMockStore(initialState);
  })

  test('successfully mounts', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ItemsTableHeader />
      </Provider>
    );

    expect(wrapper.find('input[type="text"]').props().value).toEqual('Search');
  });
});
