define([
  'react',
  './TopBarMenu',
  './Main',
  /* ======== */
  './resources/HomePage.scss'
], function (React, TopBarMenu, Main) {
  return React.createClass({
    render: function () {
      return (
        <div className="c-home-page_--_">
          <TopBarMenu/>
          <Main />
        </div>
      )
    }
  })
});