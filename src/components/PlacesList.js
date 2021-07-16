import React from 'react'
import Place from './Place'

const PlacesList = ({ places, favPlaces, favPlaceAdd }) => (
  <ul>
    {places.map(place =>
      <Place
        key={place.id}
        {...place}
        onClick={() => favPlaceAdd(place.id)}
      />
    )}
    {favPlaces.map(place =>
      <Place
        key={place.id}
        {...place}
      />
    )}
  </ul>
)

export default PlacesList
