import React from 'react'
import { Album } from 'components/Album'
import data from './data.json'

console.log(data)

export const App = () => {
  return (
    <div className="mainContainer">
      {data.albums.items.map((item) => (
        <Album
          key={item.id}
          name={item.name}
          item={item} />
      ))}
    </div>
  )
}