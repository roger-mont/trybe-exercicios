import React, { Component } from 'react'

export class Comentarios extends Component {
  render() {
    const { value, handlerChange } = this.props
    return (
      <textarea 
      name='comentarios'
      value={value}
      onChange={handlerChange}
      />

    )
  }
}

export default Comentarios