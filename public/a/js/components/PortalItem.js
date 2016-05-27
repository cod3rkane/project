/**
 * Created by jkane on 5/21/16.
 */

define([
  'react',
  /* ======== */
  './resources/PortalItem.scss'
], function (React) {
  return React.createClass({
    
    render: function () {
      return (
        <div className="c-portal-item_--_ card">
          <div className="image">
            <img src="https://jovemnerd.com.br/wp-content/uploads/Thor-Ragnarok-Elenco-1-567x254.jpg"/>
          </div>
          <div className="extra">
            <h4 className="ui header">
              Thor: Ragnarok | Mark Ruffalo, Cate Blanchett, Jeff Goldblum e mais confirmados no elenco
            </h4>
            <p className="black">
              Tessa Thompson (Creed) e Karl Urban (Dredd) também estarão no filme
            </p>
          </div>
        </div>
      )
    }
  })
});