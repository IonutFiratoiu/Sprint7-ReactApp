require('normalize.css');
require('styles/App.css');

import React from 'react';

class Point extends React.Component {
  position(x, y) {
    /*let x;
    let y;*/
    for (let i = 0; i < 24; i++){
      if (i===0||i===1||i===2){
        y=0;
      }
    }
},

  render() {
    var style = this.getAbsolutePosition(this.props.index);
    return (<div style={style}>{this.props.index}</div>)
  }
}

class Border extends React.Component {
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
        {points}
        <Border/>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
