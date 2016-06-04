require([
  'react',
  'react-dom',
  'react-router',
  './util/Routes'
], function(React, ReactDOM, {Router, browserHistory}, Routes) {
  ReactDOM.render(
    <Router history={browserHistory} routes={Routes} />,
    document.getElementById('pdp-app')
  );
});
