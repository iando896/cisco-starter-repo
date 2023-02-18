import React, { Component } from 'react'

class Latency extends Component {

  useWebSocket() {
    const ws = new WebSocket("ws://localhost");
  }
  render() {
    return (
      <div className='text-white text-center'>Latency</div>
    )
  }
}

export default Latency;
