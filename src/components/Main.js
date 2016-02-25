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
    let background = 'white';

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
      red: 0,
      yellowPieces: [],
      redPieces: []
    };
  }

  onPointClick(index) {
    if(this.state.player === 1 && this.state.yellow !== 9 && this.state.yellowPieces.indexOf(index) === -1 && this.state.redPieces.indexOf(index) === -1){
      this.state.yellowPieces.push(index);
      this.state.yellow = this.state.yellow + 1;
      this.state.player = 2;
      this.forceUpdate();
    }else if(this.state.player === 2 && this.state.red !== 9 && this.state.redPieces.indexOf(index) === -1 && this.state.yellowPieces.indexOf(index) === -1){
      this.state.redPieces.push(index);
      this.state.red = this.state.red + 1;
      this.state.player = 1;
      this.forceUpdate();
    }
  }


  render() {
    const points = [];
    let player = this.state.player;
    let yellow = this.state.yellowPieces;
    let red = this.state.redPieces;
    let color = 'white';
    for (let i=0; i<24; i++){
      /*for(let j=0; j<yellow.length; j++){
        if(player===1){
          color = 'yellow';
        }
      }
      for(let k=0; k<red.length; k++){
        if(player===2){
          color = 'red';
        }
      }*/
      if(player===1 && yellow.indexOf(i) !== -1){
        console.log(player);
        console.log(yellow);
        color = 'yellow';
      }else if (player===2 && red.indexOf(i) !== -1){
        console.log(player);
        console.log(red);
        color = 'red';
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
        <p>{(this.state.player===1 ? 'Yellow' : 'Red' )} player</p>
        <p>Yellow Player: {this.state.yellow}</p>
        <p>Red Player: {this.state.red}</p>
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
