require([
  'react',
  'react-dom',
  './components/HomePage'
], function(React, ReactDOM, HomePage) {
  ReactDOM.render(<HomePage />,
    document.getElementById('page-content')
  );
});

