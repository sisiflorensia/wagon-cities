import React, { Component } from 'react';

class City extends Component {
  // handleClick = () => {
  //   this.props.selectCity(this.props.index);
  // }

  render() {
    return (
      <div className={this.props.selected ? '' : 'active-city'}>
        <h1 className="">{this.props.city.name}</h1>
        <h3 className="">{this.props.city.address}</h3>
      </div>
    );
  }
}

export default City;
