import React from 'react'
import Place from './Place'
import PlaceFav from './PlaceFav'

const PlacesList = ({ places, favPlaces, favPlaceAdd, favPlaceDel }) => (
  <div>

    <table>
      <tbody>
        <tr><td><ul>
          {places.map(place =>
            <Place
              key={place.id}
              {...place}
              onClick={() => favPlaceAdd(place.id)}
            />
          )}
        </ul></td><td><ul>{favPlaces.map(place =>
          <PlaceFav
            key={place.id}
            {...place}
            onClick={() => favPlaceDel(place.id)}
          />
        )}
        </ul></td></tr>
      </tbody>
    </table>
  </div>
)

export default PlacesList
