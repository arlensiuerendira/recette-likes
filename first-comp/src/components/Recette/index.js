import React from "react";
import styles from "./styles";

const Recette = props => {
  return (
    <div style={styles.card}>
      <img
        style={{
          height: "100px",
          display: "flex",
          margin: "auto"
        }}
        src={props.image}
        alt={props.title}
      />
      <p>{props.description}</p>
      <button onClick={props.changeLikeCounter}>LIKE</button>
    </div>
  );
};

export default Recette;
