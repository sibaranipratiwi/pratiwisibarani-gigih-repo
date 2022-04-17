import data from "../../data";
import "../../Style/mainComponent/style.css";

const Main = () => {
  return (
    <div className="main">
      <h1 className="titleup">Welcome to Bohemian Album</h1>
      <div className="top">
        {data.map((dataalbum, albums) => {
          return (
            <div className="playlistSong" key={albums}>
              <div className="top-mu">
                {dataalbum.album.images.map((dataimage) => {
                  if (dataimage.height === 300)
                    return (
                      <div className="topku">
                        <div className="">
                          <div className="imageSong">
                            <img
                              className="imageurls"
                              src={dataimage.url}
                              alt="Sorry There is nothing to show"
                            />
                          </div>

                          <p className="artistName">{dataalbum.name}</p>

                          {dataalbum.artists.map((artistAtribute, art) => {
                            return (
                              <div key={art}>
                                <p className="songTitle">{artistAtribute.name}</p>
                              </div>
                            );
                          })}

                          <div className="btn album">
                            <button type="submit" className="btn playlist" id="btn">
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
