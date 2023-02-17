import React, { Component } from 'react';

class Banner extends Component {
  render() {
      return (
        <div className='pb-6'>
          <h1 className='text-white text-3xl text-center font-poppins font-bold'>
            {this.props.bannerText}
          </h1>
        </div>
      );
  }
}
export default Banner
