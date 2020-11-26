import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import App from '../../src/components/App'
import { mount } from '../setup/setupEnzyme'

describe('<App />', () => {

  const initialState = { items: [], search: '' }
  const createMockStore = configureStore();

  let store;

  beforeEach(() => {
    store = createMockStore(initialState);
  })

  test('successfully mounts', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.find('h1').text()).toEqual('Welcome to the Eltropy Assignment!');
  });
});
