import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function checkEmail(inputValue) {
    if (!inputValue.includes("@")) {
      alert("Invalid email !");
    }
  }

  return (
    <footer className="movie-footer">
      <div className="movie-footer-elem">Pour les passionné·e·s de cinéma 🎥 📽 🎬</div>
      <div className="movie-footer-elem">Laissez-nous votre mail :</div>
      <input
        type="email"
        id="email"
        name="email"
        value={inputValue}
        onBlur={() => checkEmail(inputValue)}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </footer>
  );
}

export default Footer;
