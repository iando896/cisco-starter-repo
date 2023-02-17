import React, { Component } from 'react';

class DisplayIP extends Component {
    constructor(props) {
        super(props);

        this.state = { ips: [] };

    }

    componentDidMount() {
        let endpoint = null;
        if (this.props.ipv4) {
            endpoint = "https://api.ipify.org?format=json"
        } else {
            endpoint = "https://api64.ipify.org?format=json"
        }
        fetch(endpoint)
            .then((response) => response.json())
            .then((data) => this.setState({ips: data}));
    }
    
    render() {
        let header = null;
        if (this.props.ipv4) {
            header = <span>IPv4:</span>
        } else {
            header = <span>IPv6:</span>
        }
        return (
            <div className='w-full text-white text-center justify'>
                {header}
                <span> {this.state.ips["ip"]} </span>
            </div>
        );
    }
}

export default DisplayIP;