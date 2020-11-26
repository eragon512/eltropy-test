const INITIAL_STATE = ''

function searchReducer(state = INITIAL_STATE, action) {
  const { type, payload={} } = action;
  switch(type) {
    case 'UPDATE_SEARCH_TEXT':
      if (!payload.searchText && payload.searchText !== '') return state;
      return payload.searchText;
    case 'RESET':
      return ''
    default:
      return state
  }
}

export default searchReducer