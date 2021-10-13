import "../styles/Header.css";
import appLogo from "../assets/movie_logo.jpeg";
import reel_img from "../assets/reel_img.jpeg";

function Header() {
  const title = "my movies app";
  return (
    <div className="movie-banner">
      <img src={appLogo} alt="my movies app" className="movie-logo" />
      <h1 className="movie-title">{title}</h1>
      <img className="reel_img" src={reel_img} alt="film reel" />
    </div>
  );
}

export default Header;
