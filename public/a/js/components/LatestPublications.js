define([
  'react',
  './LatestPublicationItem'
], function (React, LatestPublicationItem) {
  return React.createClass({
    
    render: function () {
      return (
        <div className="c-latest-publications_--_ m-t-58">
          <h1 className="ui header">
            Últimas Publicações
          </h1>
          <div className="ui cards">
            <LatestPublicationItem />
            <LatestPublicationItem />
            <LatestPublicationItem />
            <LatestPublicationItem />
            <LatestPublicationItem />
          </div>
          <div className="ui right aligned grid">
            <div className="right floated left aligned sixteen wide column">
              <div className="ui text-center">
                <a href="/publicacoes" className="ui default fluid button">
                  Mais Publicações
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    }
  })
});