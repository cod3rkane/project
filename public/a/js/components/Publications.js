/**
 * Created by jkane on 6/4/16.
 */

define([
  'react',
  './TopBarMenu',
  './MainSlider',
  './InfinityPublications',
  './Footer',
  /* ======== */
  './resources/Publications.scss'
], function (React, TopBarMenu, MainSlider, InfinityPublications, Footer) {
  return React.createClass({
    
    render: function () {
      return (
        <div className="c-publications_--_">
          <TopBarMenu />
          <div className="ui main container">
            <MainSlider />
            <InfinityPublications />
          </div>
          <Footer />
        </div>
      )
    }
  })
});