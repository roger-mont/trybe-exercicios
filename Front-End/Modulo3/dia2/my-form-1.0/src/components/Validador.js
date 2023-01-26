import React, { Component } from 'react'

export class Validador extends Component {
  render() {
    const { value, handlerChange} = this.props
    return (
      <label htmlFor='validador'>
        <input
      type='checkbox'
      id='validador'
      name='validador'
      value={value}
      onChange={handlerChange}
        />
      {value === false ? 'Voce precisa passar pelo verificador' : 'Verificado'}
    </label>
    )
  }
}

export default Validador