import React from 'react'
import Card from './Card'

export default function Grid ({characters}) {

  return (
    <>
    <div className='grid'>{characters && characters.map((data) => (
        <Card key={data.id} character={data} />
    ))}</div>
    

    </>
  )
}
