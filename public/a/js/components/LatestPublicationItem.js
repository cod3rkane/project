define([
  'react',
  '../../img/posts/Default-post.png',
  /* ======== */
  './resources/LatestPublicationItem.scss'
], function (React, DefautImage) {
  return React.createClass({
    
    render: function () {
      return (
        <div className="c-latest-publication-item_--_ card full-width">
          <div className="blurring dimmable image">
            <img src={DefautImage}/>
          </div>
          <div className="content">
            <a className="header">Como funciona o Google?</a>
            <div className="meta">
              <span className="date">Publicado em 27/05/2016</span>
            </div>
          </div>
          <div className="extra content">
            Neste vídeo Cod3r (Júlio C. Lopes) explica como o maior mecanismo de busca do mundo funciona.
          </div>
        </div>
      )
    }
  })
});