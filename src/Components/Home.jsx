import React from "react";
import './styles/Home.css';
import online_media from './resources/online_media.svg';
import beer_celebration from './resources/beer_celebration.svg'

const Home = () =>{
    return(
        <div class="min-h-screen flex flex-col">
          <header class="first">
          <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
            <a class="navbar-brand" href="">MEME'S GEN</a>
            
            <div class="navbar-nav justify-content-end" id="">
                <div class="navbar-nav">
                     <a class="btn btn-outline-info float-right">Gerar</a>
                 </div>
                 </div>
            </div>
        </nav>
            <div class="container pt-6 page-header">
                <h1>
                    GERADOR DE MEMES
                </h1>

                <p>Aqui você pode acessar seu meme favorito ou algo novo</p>
                
                <button class="btn btn-light">
                    Começar
                </button>
            </div>
          </header>

        <div className="container pd-4">
                <div class="float-left tp">
                    <h2>
                        Comece aqui sua aventura
                    </h2>
                    <p>
                        Com apenas alguns cliques, ache o seu proximo meme favorito <br />dos mais famosos subreddits.
                    </p>
                </div>

                <img class="svgs float-sm-right" src={online_media}>
                </img>
            </div>

            <div className="container third">
                <div class="float-right hp-right ">
                <h2>
                        Comece aqui sua aventura
                    </h2>
                    <p>
                        Com apenas alguns cliques, ache o seu proximo meme favorito <br />dos mais famosos subreddits.
                    </p>
                </div>

                <img class="svgs beer" src={beer_celebration}>

                </img>
            </div>

            <footer>
                <div className="container">
                    <p>Agradeço a atenção.</p>
                    <p>Espero que tenha gostado.🤓🙏</p>
                    <p><a class="link" href="https://github.com/D3vd/Meme_Api">Repositorio da API</a></p>

                        <div class="fs-4 mb-3">
                        <a target="_blank" href="https://google.com/">
                        <i class="bi bi-linkedin"></i>
                        </a>
                        <a target="_blank" href="https://github.com/moisesOliveira">
                        <i class="bi bi-github"></i>
                        </a>
                        </div>
                        
                </div>
            </footer>
        </div>
    )
}

export default Home;