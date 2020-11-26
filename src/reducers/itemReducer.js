const INITIAL_STATE = []

function itemReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_ITEM': 
      return state.concat({
        label: action.label || 'Item'+Number(state.length+1).toString(),
        count: action.count || 1,
        isLabelEditable: action.isLabelEditable || true,
      });
    case 'REMOVE_ITEM':
      return []
        .concat(state.slice(0, action.index))
        .concat(state.slice(action.index+1))
    case 'ADD_TO_ITEM_COUNT':
      return []
        .concat(state.slice(0, action.index))
        .concat({
          ...state[action.index],
          count: state[action.index].count+action.addCount
        })
        .concat(state.slice(action.index + 1))
    case 'CHANGE_ITEM_COUNT':
      return []
        .concat(state.slice(0, action.index))
        .concat({
          ...state[action.index],
          count: action.count,
        })
        .concat(state.slice(action.index + 1))
    case 'CHANGE_ITEM_LABEL':
      return []
        .concat(state.slice(0, action.index))
        .concat({
          ...state[action.index],
          label: action.label
        })
        .concat(state.slice(action.index + 1))
    default:
      return state
  }
}

export default itemReducer;