

const places = (state = [
  {
    id: 0,
    name: "Алматы",
    favorites: false, 
    temp: 20,
    min: 18,
    max: 25,
    wind: 5
  },
  {
    id: 1,
    name: "Москва",
    favorites: false, 
    temp: 20,
    min: 20,
    max: 28,
    wind: 1
  },
  {
    id: 3,
    name: "Стамбул",
    favorites: false, 
    temp: 30,
    min: 20,
    max: 35,
    wind: 8
  },
  {
    id: 4,
    name: "Дубай",
    favorites: false, 
    temp: 40,
    min: 30,
    max: 48,
    wind: 1
  },
  {
    id: 5,
    name: "Бишкек",
    favorites: false, 
    temp: 24,
    min: 20,
    max: 28,
    wind: 1
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
