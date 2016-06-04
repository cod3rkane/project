/**
 * Created by jkane on 6/4/16.
 */

define([
  'react',
  './LatestNewsItem',
  /* ======== */
  './resources/LatestNews.scss'
], function (React, LatestNewsItem) {
  return React.createClass({
    
    render: function () {
      return (
        <section className="c-latest-news_--_">
          <h3 className="ui header">
            Últimas Notícias
          </h3>
          <div className="ui two column grid">
            <LatestNewsItem />
            <div className="ui divider"></div>
            <LatestNewsItem />
            <div className="ui divider"></div>
            <LatestNewsItem />
            <div className="ui divider"></div>
            <LatestNewsItem />
            <div className="ui divider"></div>
            <LatestNewsItem />
            <div className="ui divider"></div>
          </div>
        </section>
      )
    }
  })
});