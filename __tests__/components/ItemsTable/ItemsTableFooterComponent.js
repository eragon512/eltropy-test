import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ItemsTableFooter from '../../../src/components/ItemsTable/ItemsTableFooterComponent'
import { mount } from '../../setup/setupEnzyme'

describe('<ItemsTableBody />', () => {

  const initialState = { items: [{ label: 'A', count: 1 }, { label: 'B', count: 4 }], search: '' }
  const createMockStore = configureStore();

  let store;

  beforeEach(() => {
    store = createMockStore(initialState);
  })

  test('successfully mounts', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ItemsTableFooter />
      </Provider>
    );

    expect(wrapper.find('input[type="text"]')).toBeDefined();
    expect(wrapper.find('input[type="number"]')).toBeDefined();
  });
});
