/**
 * Created by jkane on 5/21/16.
 */

define([
  'react',
  './MainSlider',
  './MainPortal',
  './LastYouTubeVideo',
  /* ======== */
  './resources/Main.scss'
], function (React, MainSlider, MainPortal, LastYouTubeVideo) {
  return React.createClass({
    
    render: function () {
      return (
        <div className="c-main_--_ ui main container">
          <MainSlider />
          <MainPortal/>
          <LastYouTubeVideo />
        </div>
      )
    }
  })
});