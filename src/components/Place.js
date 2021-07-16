import React from 'react'

const Place = ({ onClick, name }) => (
  <li
    onClick={onClick}
  >
    {name}
  </li>
)

export default Place
