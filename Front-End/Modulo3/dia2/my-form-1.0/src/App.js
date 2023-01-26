import React, { Component } from 'react'

export class App extends Component {
  constructor () {
    super ();

    this.state = {
      ddd: 0,
      isAm: false,
    };

  }

  a = (event) => {
    this.setState({
      ddd: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <form>
        <textarea/>
        <input type='checkbox'/>
        <input type='text' name='ddd' value={this.state.ddd} onChange={this.a}/>
      </form>
    </div>
    )
  }
}

export default App