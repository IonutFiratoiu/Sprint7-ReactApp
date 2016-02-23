require('normalize.css');
require('styles/App.css');

import React from 'react';

/*var Board = React.createClass ({
  getInitialState: function() {
    var board = [[-3,-3,-3],[-3,-3,-3],[-3,-3,-3]];
    return {
      board: board
    }
  }
});*/

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
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
       </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
