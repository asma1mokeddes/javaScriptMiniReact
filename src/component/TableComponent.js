// Importation des dépendances nécessaires
import { MiniReactRender } from "../lib/react.js";
import { Component } from "../lib/react-component.js";
import { prop_access } from "../lib/react-utils.js";

// Définition de la classe TableComponent qui hérite de Component
export class TableComponent extends Component {
  constructor(properties) {
    super(properties);

    // Définition du classement par défaut s'il n'existe pas dans le localStorage
    if (localStorage.getItem("classement") == null) {
      this.classement = {
        asma: 80,
        riadh: 58,
        hicham: 47,
        you: 0
      };
    } else {
      // Récupération du classement depuis le localStorage
      this.classement = JSON.parse(localStorage.getItem("classement"));
      console.log(this.classement);
    }
  }

  // Méthode de rendu du composant
  render = () => {
    // Création de l'élément de l'interface utilisateur représentant le tableau de classement
    const result = MiniReactRender.createElement(
      "div",
      { class: "container" },
      MiniReactRender.createElement(
        "h1",
        { class: "color text-center mb-1" },
        "Classement"
      ),
      MiniReactRender.createElement(
        "div",
        { class: "container text-center" },
        MiniReactRender.createElement(
          "h3",
          null,
          `Asmaa : ${prop_access(this.classement, "asma")}`
        ),
        MiniReactRender.createElement(
          "h3",
          null,
          `Riadh : ${prop_access(this.classement, "riadh")}`
        ),
        MiniReactRender.createElement(
          "h3",
          null,
          `Hicham : ${prop_access(this.classement, "hicham")}`
        ),
        MiniReactRender.createElement(
          "h3",
          { class: "color" },
          `You : ${prop_access(this.classement, "you")}`
        )
      )
    );
    return result; // Retourne l'élément de l'interface utilisateur
  };
}
