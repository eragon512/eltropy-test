const INITIAL_STATE = []

function itemReducer(state = INITIAL_STATE, action) {
  const { type='', payload={} } = action;
  switch(type) {
    case 'ADD_ITEM': 
      return state.concat({
        label: payload.label || 'Item'+Number(state.length+1).toString(),
        count: payload.count || 1,
      });
    case 'REMOVE_ITEM':
      if (typeof payload.index !== 'number' || payload.index < 0) return state;
      return []
        .concat(state.slice(0, payload.index))
        .concat(state.slice(payload.index+1))
    case 'ADD_TO_ITEM_COUNT':
      if (
        typeof payload.index !== 'number' || 
        payload.index < 0 || 
        typeof payload.addCount !== 'number'
      ) {
        return state;
      }

      return []
        .concat(state.slice(0, payload.index))
        .concat({
          ...state[payload.index],
          count: state[payload.index].count + payload.addCount
        })
        .concat(state.slice(payload.index + 1))
    case 'CHANGE_ITEM_COUNT':
      if (
        typeof payload.index !== 'number' ||
        payload.index < 0 ||
        typeof payload.count !== 'number'
      ) {
        return state;
      }

      return []
        .concat(state.slice(0, payload.index))
        .concat({
          ...state[payload.index],
          count: payload.count,
        })
        .concat(state.slice(payload.index + 1))
    case 'CHANGE_ITEM_LABEL':
      if (
        typeof payload.index !== 'number' ||
        payload.index < 0 ||
        typeof payload.label !== 'string'
      ) {
        return state;
      }

      return []
        .concat(state.slice(0, payload.index))
        .concat({
          ...state[payload.index],
          label: payload.label
        })
        .concat(state.slice(payload.index + 1))
    default:
      return state
  }
}

export default itemReducer;