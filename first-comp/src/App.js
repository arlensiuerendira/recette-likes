import React, { Component } from "react";
import Recette from "./components/Recette";
import Header from "./components/Header";

const style = {
  container: {
    padding: "60px",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center"
  },
  recettes: {
    display: "flex"
  }
};

class App extends Component {
  state = {
    recettesData: [
      {
        title: "Pot au feu",
        image:
          "https://image.shutterstock.com/image-photo/pot-au-feubroth-meat-vegetable-600w-724815274.jpg",
        description:
          "C’est un plat de viande de bœuf cuisant longuement à feu très doux dans un bouillon aromatisé par des légumes et un bouquet garni."
      },
      {
        title: "Pizza",
        image:
          "https://image.shutterstock.com/image-photo/pepperoni-pizza-on-wooden-board-600w-562149826.jpg",
        description:
          "La pizza est une recette de cuisine traditionnelle de la cuisine italienne, originaire de Naples en Italie (cuisine napolitaine) à base de galette de pâte à pain, garnie de divers mélanges d’ingrédients (sauce tomate, tomates séchées, légumes, fromage, charcuterie, olives, huile d'olive…)1 et cuite au four."
      },
      {
        title: "Burger",
        image:
          "https://image.shutterstock.com/image-photo/burguer-cheese-onions-bacon-600w-1471297691.jpg",
        description:
          "Un hamburger (initialement hamburg-er, soit « galette de Hambourg » en allemand, et non pas « galette de jambon » en anglais) ou par aphérèse burger, est un sandwich d'origine allemande, composé de deux pains de forme ronde (bun) généralement garnis de steak haché (généralement du bœuf) et de crudités, salade, tomate, oignon, cornichon (pickles), de fromage, et de sauce…"
      },
      {
        title: "Salade Cesar",
        image:
          "https://image.shutterstock.com/image-photo/bowl-traditional-caesar-salad-chicken-600w-171001007.jpg",
        description:
          "La salade César (en anglais, Caesar Salad) est une salade principalement composée de laitue romaine, de parmesan, d'œufs durs et de croûtons, arrosée de sa « sauce César » faite de parmesan râpé, d'huile d'olive, de pâte d'anchois, d'ail, de vinaigre de vin, de moutarde et d'un jaune d'œuf."
      }
    ],
    likeCounter: 0
  };

  changeLikeCounter = () => {
    this.setState({ likeCounter: this.state.likeCounter + 1 });
  };

  render() {
    return (
      <div style={style.container}>
        <Header likes={this.state.likeCounter} />
        <div style={style.recettes}>
          {this.state.recettesData.map(recette => (
            <Recette
              title={recette.title}
              description={recette.description}
              image={recette.image}
              changeLikeCounter={this.changeLikeCounter}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
