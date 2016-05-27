/**
 * Created by jkane on 5/21/16.
 */

define([
  'react',
  './MainSlider',
  './MainPortal',
  /* ======== */
  './resources/Main.scss'
], function (React, MainSlider, MainPortal) {
  return React.createClass({
    
    render: function () {
      return (
        <div className="c-main_--_ ui main container">
          <MainSlider />
          <MainPortal/>
          <h1 className="ui header">
            Semantic Ui Fixed Template
          </h1>
        </div>
      )
    }
  })
});