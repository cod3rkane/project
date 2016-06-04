/**
 * Created by jkane on 6/4/16.
 */

define([
  'react',
  './PublicationItemCard',
  '../../img/dot-loading.svg'
], function (React, PublicationItemCard, loading) {
  return React.createClass({
    
    render: function () {
      return (
        <div className="c-infinity-publications_--_ m-t-58">
          <h1 className="ui header">
            Todas as Publicações
          </h1>
          <div className="ui cards">
            <PublicationItemCard />
            <PublicationItemCard />
            <PublicationItemCard />
            <PublicationItemCard />
            <PublicationItemCard />
          </div>
          <div className="ui right aligned grid">
            <div className="right floated left aligned sixteen wide column">
              <div className="ui text-center">
                <img src={loading} alt="Loading"/>
              </div>
            </div>
          </div>
        </div>
      )
    }
  })
});