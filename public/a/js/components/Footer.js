define([
  'react',
  /* ======== */
  './resources/Footer.scss'
], function (React) {
  return React.createClass({
    
    render: function () {
      return (
        <div className="c-footer_--_ m-t-58">
          <div className="ui inverted vertical footer blue segment">
            <div className="ui container">
              <div className="ui two column grid">
                <div className="row">
                  <div className="column">
                    <p>Copyright © 2016 Papo de Programador. Todos os direitos reservados.</p>
                  </div>
                  <div className="column">
                    <p className="text-right">
                      Versão 1.0.2 (Babel)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  })
});