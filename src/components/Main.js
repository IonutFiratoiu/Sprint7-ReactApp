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

    if(index%8<3){
      x=this.getRing(index).offset+(this.getRing(index).z*(this.getRing(index).size/2));
      y=this.getRing(index).offset;
    }
    if(index%8===3){
      x=this.getRing(index).offset+((this.getRing(index).z-1)*(this.getRing(index).size/2));
      y=this.getRing(index).offset+(this.getRing(index).size/2);
    }
    if(index%8>3&&index%8<7){
      x=this.getRing(index).offset+((this.getRing(index).z-4)*(this.getRing(index).size/2));
      y=this.getRing(index).offset+(this.getRing(index).size);
    }
    if(index%8===7){
      x=this.getRing(index).offset+((this.getRing(index).z-7)*(this.getRing(index).size/2));
      y=this.getRing(index).offset+(this.getRing(index).size/2);
    }

    return {
      left: x,
      top: y
    }
  }

  render() {
    var style = this.getAbsolutePosition(this.props.index);
    return (<div className="point" style={style}>{this.props.index}</div>)
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
    const points = [];
    for (let i=0; i<24; i++){
      points.push(<Point index={i} key={i}/>)
    }

    return (
      <div className="index">
        {points}
        <Board/>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
