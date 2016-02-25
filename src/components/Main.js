require('normalize.css');
require('styles/App.css');

import React from 'react';

class Point extends React.Component {

  getRing(index){
    let z;
    let offset;
    let size;

    if(Math.floor(index/8)===0){
      z=index;
      offset=50;
      size=400;
    }
    if(Math.floor(index/8)===1){
      z=index-8;
      offset=100;
      size=300;
    }
    if(Math.floor(index/8)===2){
      z=index-16;
      offset=150;
      size=200;
    }

    return{
      z: z,
      offset: offset,
      size: size
    }
  }

  getAbsolutePosition(index) {
    let x;
    let y;
    let background = '';

    if(index%8<3){
      x=this.getRing(index).offset+(this.getRing(index).z*(this.getRing(index).size/2));
      y=this.getRing(index).offset;
    }
    if(index%8===3){
      x=this.getRing(index).offset+((this.getRing(index).z-1)*(this.getRing(index).size/2));
      y=this.getRing(index).offset+(this.getRing(index).size/2);
    }
    if(index%8>3&&index%8<7){
      x=this.getRing(index).offset+this.getRing(index).size-((this.getRing(index).z-4)*(this.getRing(index).size/2));
      y=this.getRing(index).offset+(this.getRing(index).size);
    }
    if(index%8===7){
      x=this.getRing(index).offset+((this.getRing(index).z-7)*(this.getRing(index).size/2));
      y=this.getRing(index).offset+(this.getRing(index).size/2);
    }

    return {
      left: x,
      top: y,
      background: background
    }
  }

  onClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    let style = this.getAbsolutePosition(this.props.index);
    style.background = this.props.color;

    return (<div className="point" onClick={this.onClick.bind(this)} style={style}></div>)
  }
}

class Board extends React.Component {

  constructor() {
    super();
    this.state = {
      player: 1,
      yellow: 0,
      black: 0,
      yellowPieces: [],
      blackPieces: [],
      width: 30,
      height: 30
    };
  }

  onPointClick(index) {
    if(this.state.player === 1 && this.state.yellow !== 9 && this.state.yellowPieces.indexOf(index) === -1 && this.state.blackPieces.indexOf(index) === -1){
      this.state.yellowPieces.push(index);
      this.state.yellow = this.state.yellow + 1;
      this.state.player = 2;
      this.forceUpdate();
    }else if(this.state.player === 2 && this.state.black !== 9 && this.state.blackPieces.indexOf(index) === -1 && this.state.yellowPieces.indexOf(index) === -1){
      this.state.blackPieces.push(index);
      this.state.black = this.state.black + 1;
      this.state.player = 1;
      this.forceUpdate();
    }
  }


  render() {
    const points = [];
    let yellow = this.state.yellowPieces;
    let black = this.state.blackPieces;
    let color;
    for (let i=0; i<24; i++){
      color = '#E65100';
      if(yellow.indexOf(i) !== -1){
        color = '#FFFF00';
      }
      if (black.indexOf(i) !== -1){
        color = '#000';
      }
      points.push(<Point color={color} onClick={this.onPointClick.bind(this)} index={i} key={i}/>)
    }

    return (
    <div className="index">
      {points}
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
      <div className="info">
        <p><span style={{color: (this.state.player===1 ? 'yellow' : 'black' )}}>{(this.state.player===1 ? 'Yellow' : 'Black' )}</span> player</p>
        <p><span style={{color: 'black'}}>Black</span> Player: <span style={{color: 'black', font: 900}}>{this.state.black}</span></p>
        <p><span style={{color: 'yellow'}}>Yellow</span> Player: <span style={{color: 'yellow', font: 900}}>{this.state.yellow}</span></p>
      </div>
    </div>
    )
  }
}

class AppComponent extends React.Component {
  render() {
    return (
      <Board/>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
