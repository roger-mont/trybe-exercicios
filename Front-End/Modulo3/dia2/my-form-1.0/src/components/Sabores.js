import React, { Component } from 'react'

export class Sabores extends Component {
  render() {
    const { value, handlerChange } = this.props
    return (
      <label htmlFor='sabores'>
        <select name='sabores' value={value} onChange={handlerChange} id='sabores'>
        <option value="chocolate">Chocolate</option>
        <option value="baunilha">Baunilha</option>
        <option value="morango">Morango</option>
      </select>
      {!value ? 'Escolha o sabor' : ''}
    </label>
    )
  }
}

export default Sabores