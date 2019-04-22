const numberReducer = (state = 0, action) => {
    switch (action.type) {
      case 'ADD':
        return state + 1
      case 'ADD2':
        return state + action.num
      case 'MINUS':
        return state - 1
      default:
        return state
    }
  }
  export default numberReducer