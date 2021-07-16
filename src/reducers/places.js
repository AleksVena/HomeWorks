

const places = (state = [
  {
    id: 0,
    name: "Алматы",
    favorites: false
  },
  {
    id: 1,
    name: "Москва",
    favorites: false
  }
], action) => {
  switch (action.type) {
    case 'set_fav':
      return state.map(pl =>
        (pl.id === action.id)
          ? { ...pl, favorites: true }
          : pl
      )
    case 'del_fav':
      return state.map(pl =>
        (pl.id === action.id)
          ? { ...pl, favorites: false }
          : pl
      )
    default:
      return state
  }
}



export default places;
