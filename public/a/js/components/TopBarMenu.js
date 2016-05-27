/**
 * Created by jkane on 5/21/16.
 */

define([
  'react',
  '../../img/pdp-logo.png',
  /* ======== */
  './resources/TopBarMenu.scss'
], function (React, pdpLogo) {
  return React.createClass({
    
    render: function () {
      return (
        <div className="c-top-bar-menu_--_ ui fixed inverted menu">
          <div className="ui container">
            <a href="/" className="header item borderless">
              <img src={pdpLogo} className="ui logo_--_" alt="Papo de Programador - Logo"/>
              <h3 className="no-margin_--_">Papo De Programador</h3>
            </a>
            <a href="#" className="item">
              News
            </a>
            <a href="#" className="item">
              PapoCódigo
            </a>
            <a href="#" className="item">
              Loja
            </a>
            <a href="#" className="item">
              Anuncie Aqui
            </a>
          </div>
        </div>
      )
    }
  })
});