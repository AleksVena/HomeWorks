const curPlace = (state = 0, action) => {
  switch (action.type) {
    case 'set_cur':
      return state = action.id;
    default: return state
  }
}

export default curPlace;