import React, { Component } from 'react';

class Exhibit extends Component {
  render() {
      return (
        <figure className='rounded-xl bg-slate-800 ml-20 mr-20'>
          <h2 className='text-white text-lg font-poppins font-semibold text-center pt-6'>
            {this.props.name} 
          </h2>
          <div className='rounded-xl pb-6'>
            {this.props.children}  
          </div>
        </figure>
      );
  }
}

export default Exhibit;
