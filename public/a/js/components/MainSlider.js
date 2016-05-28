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
        currentSlide: 0
      }
    },
    
    componentDidMount: function () {
    },
    
    render: function () {
      var slides = this.state.slides,
        index = this.state.currentSlide;
      return (
        <div className="c-main-slider_--_">
          <div className="content-slider_--_">
            <div className="full-slider-content_--_">
              <img src={slides[index]} alt="Slide"/>
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
      var slides = this.state.slides,
        index = this.state.currentSlide;
      
      if (index++ >= (slides.length - 1)) {
        return;
      }
      
      this.setState({
        currentSlide: index++
      })
    },
    
    _onClickLeft: function (e) {
      var index = this.state.currentSlide;
      
      if (index == 0) {
        return;
      }

      this.setState({
        currentSlide: --index
      })
    }
  })
});