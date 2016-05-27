/**
 * Created by jkane on 5/21/16.
 */

define([
  'react',
  /* ======== */
  './resources/MainSlider.scss'
], function (React) {
  return React.createClass({
    
    render: function () {
      return (
        <div className="c-main-slider_--_">
          <div className="content-slider_--_">
            <p className="text-center">Full Slide</p>
          </div>
          <div className="ads-content_--_">
            <p className="text-center">Anuncie Aqui</p>
          </div>
        </div>
      )
    }
  })
});