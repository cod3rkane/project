/**
 * Created by jkane on 5/21/16.
 */

define([
  'react',
  '../../img/posts/Capa.png',
  '../../img/posts/Default-post.png',
  /* ======== */
  './resources/MainSlider.scss'
], function (React, Capa, CapaDefault) {
  return React.createClass({
    
    getInitialState: function () {
      return {
        slides: [Capa, CapaDefault],
        currentSlide: []
      }
    },
    
    componentWillMount: function () {
      console.log('mounting component!!');
    },
    
    render: function () {
      console.log(this.state.slides);
      
      return (
        <div className="c-main-slider_--_">
          <div className="content-slider_--_">
            <div className="full-slider-content_--_">
              <img src={Capa} alt="Slide"/>
            </div>
            <span className="arrow_--_ left-arrow_--_" onClick={this._onClickLeft}>
              <button className="circular ui icon button">
                <i className="angle left icon"></i>
              </button>
            </span>
            <span className="arrow_--_ right-arrow_--_" onClick={this._onClickRight}>
              <button className="circular ui icon button">
                <i className="angle right icon"></i>
              </button>
            </span>
          </div>
          <div className="ads-content_--_">
            <p className="text-center">Anuncie Aqui</p>
          </div>
        </div>
      )
    },
    
    _onClickRight: function (e) {
      console.log(e);
      console.log('Right Clicked');
    },
    
    _onClickLeft: function (e) {
      console.log(e);
      console.log('Left Clicked');
    }
  })
});