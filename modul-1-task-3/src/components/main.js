import data from "../data";
import { useState } from "react";

const Main = () => {
  const [setQuery] = useState(""); 
  return (
    <div class="main">
      <div>
        <label>Search a song</label>
        <input type="text" onChange={e => setQuery(e.target.value)}/>
      </div>
      <h1 class="titleup">Welcome to Bohemian Album</h1>
      <div class="top">
        {data.map((dataalbum, albums) => {
          return (
            <>
              <div class="playlist" key={albums}>
                <div>
                  <div class="top-mu">
                    {dataalbum.album.images.map((dataimage) => {
                      return (
                        <div class="topku">
                          <div class="" key={dataimage}>
                            <div class="image">
                              <img class="imageurls" src={dataimage.url} alt="Sorry There is nothing to show"/>
                            </div>

                            <p class="title">Title: {dataalbum.name}</p>

                            {dataalbum.artists.map((artistAtribute, art) => {
                              return (
                                <div key={art}>
                                  <p class="title">
                                    {artistAtribute.name} -{" "}
                                    {dataalbum.album.name}
                                  </p>

                                  <div class="link">
                                    {artistAtribute.external_urls && (
                                      <a
                                        href={
                                          artistAtribute.external_urls.spotify
                                        }
                                      >
                                        Here for Spotify{" "}
                                      </a>
                                    )}
                                    {/* {" "} */}
                                    <hr />
                                    <a href={dataalbum.external_urls.spotify}>
                                      {" "}
                                      Here for Song Lyrics
                                    </a>
                                  </div>
                                </div>
                              );
                            })}

                            <div class="btn album">
                              <button
                                type="submit"
                                class="btn playlist"
                                id="btn"
                              >
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
  );
};

export default Main;
