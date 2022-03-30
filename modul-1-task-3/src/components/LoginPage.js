import React from "react";
// import {connect} from 'react-redux';
// import {Button} from 'react-bootstrap';


const CLIENT_ID = "b81e8d623d66405e9d6aaa779ea37555";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/redirect";
const SPACE_DELIMITER = "%20";
const SCOPE = ["playlist-modify-public", "playlist-read-collaborative"];
const SCOPE_URL_PARAM = SCOPE.join(SPACE_DELIMITER);

const LoginPage = () => {
    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPE_URL_PARAM}&response_type=token&Show_dialog=true`;
    };
    
    return(
        <div className="login">
            <h1>To See More Playlist Let's Login First</h1>
            <button class="btn btn-success" type="submit" onClick={handleLogin}>
                LogIn
            </button>
        </div>
    );
};

export default LoginPage;