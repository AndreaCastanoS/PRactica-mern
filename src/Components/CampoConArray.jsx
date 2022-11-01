import React from 'react'

export default function CampoConArray(props) {
  console.log(props);
  let {description, datos}= props
  
  return (
    <div className='datos white flex a-center'>
        <p>{description}  {datos}</p>
      </div>
  )
}
