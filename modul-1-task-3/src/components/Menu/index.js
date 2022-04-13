import data from "../../data";
import "../../Style/mainComponent/style.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Main = () => {
  return (
    <div class="main">
      <h1 class="titleup">Welcome to Bohemian Album</h1>
      <div class="top">
        {data.map((dataalbum, albums) => {
          return (
            <div className="playlistSong" key={albums}>
              <div class="top-mu">
                {dataalbum.album.images.map((dataimage) => {
                  if (dataimage.height === 300)
                    return (
                      <div className="topku">
                        <div class="" key={dataimage}>
                          <div class="imageSong">
                            <img
                              class="imageurls"
                              src={dataimage.url}
                              alt="Sorry There is nothing to show"
                            />
                          </div>

                          <p class="artistName">{dataalbum.name}</p>

                          {dataalbum.artists.map((artistAtribute, art) => {
                            return (
                              <div key={art}>
                                <p class="songTitle">{artistAtribute.name}</p>
                              </div>
                            );
                          })}

                          <div class="btn album">
                            <button type="submit" class="btn playlist" id="btn">
                              Select
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
