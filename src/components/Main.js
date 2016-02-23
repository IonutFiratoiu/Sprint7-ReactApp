require('normalize.css');
require('styles/App.css');

import React from 'react';

class Point extends React.Component {
  getAbsolutePosition(index) {
    return {
      left: 50,
      top: 50
    }
  }

  const points = <Point index={0}/>

  render() {
    var style = this.getAbsolutePosition(this.props.index);
    return (<div style={style}>{this.props.index}</div>)
  }
}

class Board extends React.Component {
  render() {
    return (
      <div id="square">
        <div id="small-square"></div>
        <div id="small-square"></div>
        <div id="small-square"></div>
        <div id="small-square"></div>
        <div id="second-square">
          <div id="second-small-square"></div>
          <div id="second-small-square"></div>
          <div id="second-small-square"></div>
          <div id="second-small-square"></div>
          <div id="third-square"></div>
        </div>
      </div>
    )
  }
}

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        { points }
        <Board/>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
