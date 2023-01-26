import React, { Component } from 'react'

export class Cliente extends Component {
  render() {
    const { value,handlerChange} = this.props
    return (
      <label htmlFor='cliente'>
        Nome do Cliente: 
      <input 
      type='text' 
      id='cliente'
      name='cliente'
      value={value}
      onChange={handlerChange}
      />
      {!value ? 'O nome precisa ser preenchido' : ''}
      </label>
    )
  }
}

export default Cliente