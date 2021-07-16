import React from 'react'
import Place from './Place'
import PlaceFav from './PlaceFav'

const PlacesList = ({ places, favPlaces, curPlace, favPlaceAdd, favPlaceDel, showPlace }) => (
  <div>

    <table>
      <tbody>
        <tr><td><ul>
          {places.map(place =>
            <Place
              key={place.id}
              {...place}
              onClick={() => favPlaceAdd(place.id)}
              placeClick={() => showPlace(place.id)}
            />
          )}
        </ul></td>
          <td>
            {curPlace.map(place =>
              <div key={place.id}>
                <h1>{place.name}</h1>
                <h2>Temp: {place.temp}°</h2>
                <h2>Min: {place.min}°</h2>
                <h2>Max: {place.max}°</h2>
                <h2>Wind: {place.wind}m/s</h2>
              </div>
            )}
          </td>
          <td><ul>{favPlaces.map(place =>
            <PlaceFav
              key={place.id}
              {...place}
              onClick={() => favPlaceDel(place.id)}
              placeClick={() => showPlace(place.id)}
            />
          )}
          </ul></td></tr>
      </tbody>
    </table>
  </div>
)

export default PlacesList
