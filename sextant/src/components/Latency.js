import React, { Component } from 'react'

const ws = new WebSocket("ws://localhost:55455");

class Latency extends Component {
  constructor(props) {
    super(props);
    this.state = { ping: 0 };
  }

  componentDidMount() {
    ws.onopen = () => {
      console.log("WebSocket Connected");
    };

    ws.onmessage = (message) => {
      const data = new Date().getTime() - message.data;
      this.setState({ping : data});
    };
  }

  render() {
    return (
      <div className='text-white text-center'>
        {this.state.ping}
      </div>
    )
  }
}

export default Latency;
