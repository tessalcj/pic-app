import React from 'react'

export default function Picture(props) {
  const {picture} = props
  return (
    <div className='picture'>
        <p>{picture.image}</p>
        <p>{picture.name}</p>
        <p>{picture.tags}</p>
    </div>
  )
}