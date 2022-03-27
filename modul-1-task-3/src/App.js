import logo from './logo.svg';
import "./styles.css";
import './App.css';
import data from "./data.js";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Playlist</h1>
      </header>

      <div class="main">
        <h1 class="titleup">Wecome to Bohemian Album</h1>
        <div class="top">
          {data.map((dataalbum, albums) => {
            return (<>
              <div class="playlist" key={albums}>
                <div>
                  <div class="top-mu">
                    {dataalbum.album.images.map((dataimage) => {
                    
                    return (
                      <div class="topku">
                        <div class="" key={dataimage}>
                          <div class="image">
                            <img class="img" src={dataimage.url}/>
                          </div>
                                
                          <p class="title">
                            Title: {dataalbum.name}
                          </p>
                                
                            {dataalbum.artists.map((artistAtribute, art) => {
                              return (
                                <div key={art}>
                                  <p class="title">
                                    {artistAtribute.name} -{" "}
                                    {dataalbum.album.name}
                                  </p>
                                        
                                  <div class="link">
                                    {artistAtribute.external_urls && (
                                      <a href={artistAtribute.external_urls.spotify}>
                                        Go to Spotify{" "}
                                      </a>
                                    )}
                                          
                                    OR{" "}
                                      <a href={ dataalbum.external_urls.spotify}>
                                        {" "}
                                        Song Liric
                                      </a>
                                  </div>
                                </div>
                              );
                            }
                          )}

                          <div class ="btn album">
                            <button
                              type="submit"
                              class="btn playlist"
                              id="btn">
                              Select
                            </button>
                          </div>
                        </div>
                      </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              </>
            );
          })}
        </div>
      </div>

      <footer>
        Copyright === West Playlist
      </footer>
    </div>
  );
}

export default App;
