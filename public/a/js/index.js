require([
  'react',
  'react-dom',
  './components/App'
], function(React, ReactDOM, App) {
  ReactDOM.render(<App />,
    document.getElementById('pdp-app')
  );
});

