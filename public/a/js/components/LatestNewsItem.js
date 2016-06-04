/**
 * Created by jkane on 6/4/16.
 */

define([
  'react',
  /* ======== */
  './resources/LatestNewItem.scss'
], function (React) {
  return React.createClass({
    
    render: function () {
      return (
        <div className="latest-news-item_--_ row">
          <div className="eight wide column">
            <img className="image full-width"
                 src="https://jovemnerd.com.br/wp-content/uploads/UT_figcombo_main_45b3d44c-7f25-4ab4-8a89-de7940688dd4-154x115.jpg"
                 alt="Alguma coisa"/>
          </div>
          <div className="eight wide column no-padding_--_">
            <h5 className="ui header">Estes figures de Undertale enchem você de determinação</h5>
            <p>But nobody came</p>
          </div>
        </div>
      )
    }
  })
});