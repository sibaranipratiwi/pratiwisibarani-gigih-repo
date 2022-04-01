import React, { useState, useEffect }from "react";
import axios from 'axios';

function LoginPage (){
    const CLIENT_ID = "b81e8d623d66405e9d6aaa779ea37555";
    const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
    const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/redirect";
    const RESPONSE_TYPE = "token";

    const [token, setToken]= useState("");
    const [searchKey, setSearchKey] = useState("");
    const [artists, setArtists] = useState([]);

    useEffect( () => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])


    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })

        setArtists(data.artists.items)
    };

    const renderArtists = () => {
        return artists.map(artist => (
            <div className="Song">
                <div key={artist.id}>
                    {artist.images.length ? <img width={"50%"} src={artist.images[0].url} alt=""/> 
                    
                    : <div>Not Found</div>}
                    <br></br>
                    {artist.name}

                    <div>
                        <button>Select</button>
                    </div>
                </div>
            </div>
        ))
    };

    return(
        <div className="login">
            <h1>Let's Jump To See More Playlist</h1>
            {!token ?
                <a href= {`${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&response_type=${RESPONSE_TYPE}`}>
                    LOGIN
                </a>
                
                : <button onClick={logout}>LOGOUT</button>
            }

            {token ?
                <form onSubmit={searchArtists}>
                    <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                    <button type={"submit"}>Search</button>
                </form>

                : <p>Please Login First</p>
            }

            {
                renderArtists()
            }
        </div>
    );
}

export default LoginPage;