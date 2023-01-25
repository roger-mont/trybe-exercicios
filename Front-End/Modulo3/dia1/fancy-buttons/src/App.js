import React, { Component } from 'react'

export class App extends Component {
constructor () {
  super();
  this.state = {
    clicksA: 0,
    clicksB: 0,
    clicksC: 0,
  }
}
handlerAClick = () => {
  this.setState((prev) => ({
    clicksA: prev.clicksA +1
  }))
  }

 handlerBClick = () => {
this.setState((prev) => ({
    clicksB: prev.clicksB +1
  }))
  }

handlerCClick = () => {
this.setState((prev) => ({
  clicksC: prev.clicksC +1
}))
  }

  render() {
    const { clicksA, clicksB, clicksC } = this.state
    return (
      <>
      <button type='button' onClick={this.handlerAClick}>{`Cliques nesse botão é ${clicksA} `}</button>
      <button type='button' onClick={this.handlerBClick}>{`Cliques nesse botão é ${clicksB}`}</button>
      <button type='button' onClick={this.handlerCClick}>{`Cliques nesse botão é ${clicksC}`}</button>
      </>
    )
  }
}

export default App