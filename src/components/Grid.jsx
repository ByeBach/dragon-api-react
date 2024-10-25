import React from 'react'

export default function Grid ({characters}) {
    console.log(characters)


  return (
    <div className='grid'>{characters && characters.map((data, index) => (
        <p>{data.name}</p>
    ))}</div>
  )
}
