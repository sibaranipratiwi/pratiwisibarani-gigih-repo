import React, { useState, useEffect, useRef}from "react";
import axios from 'axios';
import Modal from "./Modal";


function LoginPage (){
    const CLIENT_ID = "b81e8d623d66405e9d6aaa779ea37555";
    const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
    const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/redirect";
    const RESPONSE_TYPE = "token";

    const [token, setToken]= useState("");
    const [searchKey, setSearchKey] = useState("");
    const [artists, setArtists] = useState([]);
    const [playlist, setPlaylist] = useState({
        modal: false,
        playlists: {
            favorites: new Set()
        }

    })

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

    const playlistRef = useRef(null)
    const playlists = Object.keys(playlist.playlists)

    const addPlaylist = e => {
        e.preventDefault()
        const list = playlistRef.current.value
    
        setPlaylist({
          ...playlist,
          modal: false,
          playlists: { ...playlist.playlists, [list]: new Set() },
          toast: 'Your playlist was created successfully!'
        })
      }

    return(
        <div className="login">
            <ul className="Sidebar">
                <li className="library">List of Playlist</li>

                    {playlists.map(list => (
                        <li
                            key={list}
                            className={list === playlist.currentPlaylist ? 'active' : ''}
                            onClick={() => {
                            setPlaylist({ ...playlist, currentPlaylist: list })
                            }}
                        >
                            {list}
                        </li>
                    ))}
            </ul>

            <h1>Let's Jump To See More Playlist</h1>
            <button className="new-playist" onClick={() => {
                setPlaylist({...playlist, modal:true})
            }}>
                <span>
                    Create New Playlist
                </span>
            </button>
            <br></br>
            <Modal show={playlist.modal} close={() =>{
                setPlaylist({...playlist, modal:false})
            }}
            >
                <form onSubmit={addPlaylist}>
                    <div className="title">New Playlist</div>

                        <div className="content-wrap">
                            <input
                                className="inputTitle"
                                type="text"
                                placeholder="My Playlist"
                                ref={playlistRef}
                                required
                            />
                        <br />
                        <button className="buttonPlaylist" type="submit">Create</button>
                    </div>
                </form>
            </Modal>
            {!token ?
                <div>
                    <br></br>
                    <a href= {`${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&response_type=${RESPONSE_TYPE}`}>
                    LOGIN
                    </a>
                </div>
                
                : 
                <div>
                    <br></br>
                    <button onClick={logout}>
                    LOGOUT
                    </button> 
                </div>
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

            {/* <Modal>

            </Modal> */}
        </div>
    );
}

export default LoginPage;