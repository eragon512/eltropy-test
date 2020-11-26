const INITIAL_STATE = ''

function searchReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'UPDATE_SEARCH_TEXT':
      return action.searchText.toLowerCase()
    case 'RESET':
      return ''
    default:
      return state
  }
}

export default searchReducer