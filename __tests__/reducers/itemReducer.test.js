import itemReducer from '../../src/reducers/itemReducer'

describe('Initial State', () => {
  test('uses empty array as default initial state', () => {
    const action = { type: 'DUMMY_ACTION' }
    expect(itemReducer(undefined, action)).toEqual([])
  })
  
  test('ignores dummy actions', () => {
    const action = { type: 'DUMMY_ACTION' }
    const initialState = [{ label: 'Item1', count: 4 }]
    expect(itemReducer(initialState, action)).toEqual(initialState)
  })
})

describe('ADD_ITEM', () => {
  test('inserts new item at the end', () => {
    const action = { type: 'ADD_ITEM', payload: { label: 'Item1', count: 4 } };
    const initialState = [{ label: 'A', count: 4 }]
    const state = itemReducer(initialState, action);
    
    expect(state.length).toEqual(2)
    expect(state[1].label).toEqual(action.payload.label);
    expect(state[1].count).toEqual(action.payload.count);
  })

  test('inserts new empty item with correct defaults', () => {
    const action = { type: 'ADD_ITEM' };
    const state = itemReducer(undefined, action);

    expect(state.length).toEqual(1)
    expect(state[0].label).toEqual("Item1");
    expect(state[0].count).toEqual(1);
  })
})

describe('REMOVE_ITEM', () => {
  test('removed item at payload index', () => {
    const action = { type: 'REMOVE_ITEM', payload: { index: 1 } };
    const initialState = [{ label: 'X', count: 3 }, { label: 'X', count: 2 }, { label: 'Z', count: 1 }]
    const state = itemReducer(initialState, action);

    expect(state.length).toEqual(2)
    expect(state[0].label).toEqual('X');
    expect(state[0].count).toEqual(3);
    expect(state[1].label).toEqual('Z');
    expect(state[1].count).toEqual(1);
  })

  test('ignores if payload index not found', () => {
    const action = { type: 'REMOVE_ITEM', payload: {} };
    const initialState = [{ label: 'X', count: 3 }, { label: 'X', count: 2 }, { label: 'Z', count: 1 }]
    const state = itemReducer(initialState, action);

    expect(state).toEqual(initialState)
  })
})

describe('ADD_TO_ITEM_COUNT', () => {
  test('add payload.addCount to item at payload.index', () => {
    const action = { type: 'ADD_TO_ITEM_COUNT', payload: { index: 1, addCount: 4 } };
    const initialState = [{ label: 'X', count: 3 }, { label: 'X', count: 2 }, { label: 'Z', count: 1 }]
    const state = itemReducer(initialState, action);

    expect(state.length).toEqual(3);
    expect(state[1].count).toEqual(6);
  })

  test('ignores if payload.index not found', () => {
    const action = { type: 'ADD_TO_ITEM_COUNT', payload: {} };
    const initialState = [{ label: 'X', count: 3 }, { label: 'X', count: 2 }, { label: 'Z', count: 1 }]
    const state = itemReducer(initialState, action);

    expect(state).toEqual(initialState)
  })

  test('ignores if payload.addCount not found', () => {
    const action = { type: 'ADD_TO_ITEM_COUNT', payload: { index: 1 } };
    const initialState = [{ label: 'X', count: 3 }, { label: 'X', count: 2 }, { label: 'Z', count: 1 }]
    const state = itemReducer(initialState, action);

    expect(state[1]).toEqual(initialState[1])
  })
})

describe('CHANGE_ITEM_COUNT', () => {
  test('change count to payload.count for item at payload.index', () => {
    const action = { type: 'CHANGE_ITEM_COUNT', payload: { index: 1, count: 4 } };
    const initialState = [{ label: 'X', count: 3 }, { label: 'X', count: 2 }, { label: 'Z', count: 1 }]
    const state = itemReducer(initialState, action);

    expect(state.length).toEqual(3);
    expect(state[1].label).toEqual('X');
    expect(state[1].count).toEqual(4);
  })

  test('ignores if payload.index not found', () => {
    const action = { type: 'CHANGE_ITEM_COUNT', payload: { count: 4 } };
    const initialState = [{ label: 'X', count: 3 }, { label: 'X', count: 2 }, { label: 'Z', count: 1 }]
    const state = itemReducer(initialState, action);

    expect(state).toEqual(initialState)
  })

  test('ignores if payload.count not found', () => {
    const action = { type: 'CHANGE_ITEM_COUNT', payload: { index: 1 } };
    const initialState = [{ label: 'X', count: 3 }, { label: 'X', count: 2 }, { label: 'Z', count: 1 }]
    const state = itemReducer(initialState, action);

    expect(state[1]).toEqual(initialState[1])
  })
})

describe('CHANGE_ITEM_LABEL', () => {
  test('change count to payload.count for item at payload.index', () => {
    const action = { type: 'CHANGE_ITEM_LABEL', payload: { index: 1, label: 'NEW_LABEL' } };
    const initialState = [{ label: 'X', count: 3 }, { label: 'X', count: 2 }, { label: 'Z', count: 1 }]
    const state = itemReducer(initialState, action);

    expect(state.length).toEqual(3);
    expect(state[1].label).toEqual('NEW_LABEL');
    expect(state[1].count).toEqual(2);
  })

  test('ignores if payload.index not found', () => {
    const action = { type: 'CHANGE_ITEM_LABEL', payload: { label: 'NEW_LABEL' } };
    const initialState = [{ label: 'X', count: 3 }, { label: 'X', count: 2 }, { label: 'Z', count: 1 }]
    const state = itemReducer(initialState, action);

    expect(state).toEqual(initialState)
  })

  test('ignores if payload.label not found', () => {
    const action = { type: 'CHANGE_ITEM_LABEL', payload: { index: 1 } };
    const initialState = [{ label: 'X', count: 3 }, { label: 'X', count: 2 }, { label: 'Z', count: 1 }]
    const state = itemReducer(initialState, action);

    expect(state[1]).toEqual(initialState[1])
  })
})