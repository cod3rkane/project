define([
  'react',
  '../../img/posts/Capa.png',
  /* ======== */
  './resources/LastYouTubeVideo.scss'
], function (React, Capa) {
  return React.createClass({
    
    render: function () {
      return (
        <div className="c-last-youtube-video_--_ m-t-58">
          <h1 className="ui header">
            Último Vídeo
          </h1>
          <div className="ui special cards">
            <div className="card full-width">
              <div className="blurring dimmable image">
                <div className="ui dimmer">
                  <div className="content">
                    <div className="center">
                      <div className="ui inverted button">Assistir</div>
                    </div>
                  </div>
                </div>
                <img src={Capa}/>
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
          </div>
        </div>
      )
    }
  })
});