const defaultCommonState = {
  pageTitle: 'Home',
}

export const common = (state = defaultCommonState, action) => {
  switch (action.type) {
    case process.env.PAGE_LOAD:
      return Object.assign({}, state, action.payload || {})
    default:
      return Object.assign({}, state)
  }
}
