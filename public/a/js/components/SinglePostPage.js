/**
 * Created by jkane on 6/4/16.
 */

define([
  'react',
  './TopBarMenu',
  './LatestNews',
  './AdvertisingHeader',
  './Footer',
  /* ======== */
  './resources/SinglePostPage.scss'
], function (React, TopBarMenu, LatestNews, AdvertisingHeader, Footer) {
  return React.createClass({
    
    render: function () {
      return (
        <div className="c-single-post-page_--_">
          <TopBarMenu />
          <div className="ui main container">
            <AdvertisingHeader />
            <div className="ui two column grid">
              <div className="eleven wide column">
                <div className="ui piled segment">
                  <div className="title_--_">
                    <h2 className="ui header">Crítica | Warcraft: O Primeiro Encontro de Dois Mundos</h2>
                    <time>04/06/2016</time>
                    <span>Por Cod3r Kane</span>
                  </div>
                  <img className="image full-width" src="https://jovemnerd.com.br/wp-content/uploads/warcraft-movie-poster-full_987.0.0-765x374.jpg"
                       alt="Warcraft"/>
                  <div className="ui secondary segment text-black_--_">
                    <p>
                      <b>Warcraft: O Primeiro Encontro de Dois Mundos</b> é um filme baseado na franquia Warcraft, que consiste em um universo construído ao longo de três jogos RTS, um MMORPG e em inúmeros livros e quadrinhos ao longo de mais de 20 anos. Trata-se de material suficiente para inspirar uma ótima história, ainda mais considerando que o diretor, Duncan Jones, é fã de longa data dos jogos da Blizzard.

                      Unindo isso à CG caprichada que vimos nos trailers, tudo levava a crer que Warcraft seria a primeira adaptação cinematográfica de um videogame a de fato honrar o original. E isso quase aconteceu de fato.
                    </p>
                    <img className="image full-width"
                      src="https://jovemnerd.com.br/wp-content/uploads/warcraft-movie-durotan-toby-kebbell1-700x291.jpg"
                      alt="Durotan"/>
                    <p>
                      Visualmente, o filme é um espetáculo que homenageia diversas CGs dos jogos e traz pequenos easter eggs que aquecem os corações dos fãs.
                    </p>
                    <p>
                      No longa, passeamos pelos corredores de Karazhan antes de ela se tornar o local destruído e infestado de demônios e assombrações que encontramos em World of Warcraft. Observamos orcs urrando e amassando armaduras (e humanos) com uma única martelada. Acompanhamos soldados humanos marchando com suas espadas reluzentes rumo a batalhas decisivas. Voamos junto com grifos cruzando os céus. E vemos a magia sendo usada tanto para destruir quanto salvar vidas.
                    </p>
                    <p>
                      Warcraft: O Primeiro Encontro de Dois Mundos tinha todos os elementos necessários para fazer com que o filme fosse um épico que marcaria uma nova fase para as adaptações cinematográficas de videogames. Porém, ele ficou alguns degraus abaixo do que poderia ter sido um longa incrível e o principal motivo é a maneira como a história foi contada.
                    </p>
                  </div>
                </div>
              </div>
              <div className="five wide column no-right-padding_--_">
                <LatestNews />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )
    }
  })
});