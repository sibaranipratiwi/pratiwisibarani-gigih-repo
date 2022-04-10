import '../../Style/Header/style.css';
import Spotify_Logo from '../../Spotify_Logo.png';


const Header = () => {
  return (
    <header>
      <div class="container">
        <div class="header-left">
          <img class="logo" src={Spotify_Logo} alt="No Logo This time"/>
        </div>
        <span class="fa fa-bars menu-icon"></span>
        <div class="header-right">
          <a href="/CreatePlaylist">Playlist</a>
          <a href="/">Register</a>
          <a href="/" class="login">Log in</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
