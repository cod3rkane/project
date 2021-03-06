/**
 * Created by jkane on 5/21/16.
 */

define([
  'react',
  './MainSlider',
  './MainPortal',
  './LastYouTubeVideo',
  './LatestPublications',
  './Footer',
  /* ======== */
  './resources/Main.scss'
], function (React, MainSlider, MainPortal, LastYouTubeVideo, LatestPublications, Footer) {
  return React.createClass({
    
    render: function () {
      return (
        <div className="c-main_--_">
          <div className="ui main container">
            <MainSlider />
            <MainPortal/>
            <LastYouTubeVideo />
            <LatestPublications />
          </div>
          <Footer />
        </div>
      )
    }
  })
});