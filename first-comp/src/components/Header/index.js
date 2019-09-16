import React from "react";
import styles from "./styles";

const Header = props => {
  return (
    <div style={{ width: "100%", "text-align": "center" }}>
      <h1>Le site de recettes d'Arlen</h1>
      <h4 style={styles.favorits}>Mes favorits : {props.likes}</h4>
    </div>
  );
};

export default Header;
