import React, { Component } from 'react'
import Cliente from './components/Cliente';
import Comentarios from './components/Comentarios';
import Sabores from './components/Sabores';
import Validador from './components/Validador';

export class App extends Component {

  state = {
    validador: false,
    comentarios:"",
    cliente:"",
    sabores:"",
  }

  handlerChange = ({target}) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="App">
      <form>
      <fieldset>

      <Comentarios value={this.state.comentarios} handlerChange={this.handlerChange}/>
      
      <Validador value={this.state.validador} handlerChange={this.handlerChange}/>

      <Cliente value={this.state.cliente} handlerChange={this.handlerChange}/>
      
      <Sabores value={this.state.sabores} handlerChange={this.handlerChange}/>

        <input type='file'/>
        </fieldset>
      </form>
    </div>
    )
  }
}

export default App