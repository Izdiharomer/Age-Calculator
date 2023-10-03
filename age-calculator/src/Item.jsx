import React from 'react'

function Item({name, isPacked, importance}) {
 if(isPacked) {
  return <li>{name} importance:({importance}) </li>
 }
 return <li>{name}</li>
}

export default Item


