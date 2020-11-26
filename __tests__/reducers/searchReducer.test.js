import searchReducer from '../../src/reducers/searchReducer'

describe('Initial State', () => {
  test('uses empty string as default initial state', () => {
    const action = { type: 'DUMMY_ACTION' }
    expect(searchReducer(undefined, action)).toEqual('')
  })

  test('ignores dummy actions', () => {
    const action = { type: 'DUMMY_ACTION' }
    const initialState = 'SEARCH String'
    expect(searchReducer(initialState, action)).toEqual(initialState)
  })
})

describe('UPDATE_SEARCH_TEXT', () => {
  test('updates state with lowercased version of payload string', () => {
    const action = { type: 'UPDATE_SEARCH_TEXT', payload: { searchText: 'NewText Playground' } }
    expect(searchReducer(undefined, action)).toEqual(action.payload.searchText)
  })
})

describe('RESET', () => {
  test('resets state to empty string', () => {
    const action = { type: 'RESET' }
    const initialState = 'search string'
    expect(searchReducer(initialState, action)).toEqual('')
  })
})