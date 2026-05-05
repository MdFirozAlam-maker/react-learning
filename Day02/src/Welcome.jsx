import React from 'react'

const Welcome = (props) => {
  return (
    <div>
      <h1>Hello, {props.name} a.k.a {props.alias}</h1>
    </div>
  )
}

export default Welcome