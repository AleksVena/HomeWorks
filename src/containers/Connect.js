import { connect } from 'react-redux'
import PlacesList from '../components/PlacesList'

const mapStateToProps = state => ({
  places: state.places,
  favPlaces: state.places.filter(t => t.favorites),
  curPlace: state.places.filter(t => t.id == state.curPlace)
})

const mapDispatchToProps = dispatch  => ({
  favPlaceAdd: id => dispatch({type: "set_fav", id}),
  favPlaceDel: id => dispatch({type: "del_fav", id})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlacesList)
