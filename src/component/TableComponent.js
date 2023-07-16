// Importation des dépendances nécessaires
import { MiniReact } from "../lib/react.js";
import { Component } from "../lib/react-component.js";
import { prop_access } from "../lib/react-utils.js";

// Définition de la classe TableComponent qui hérite de Component
export class TableComponent extends Component {
  constructor(properties) {
    super(properties);

    // Définition du scoreboard par défaut s'il n'existe pas dans le localStorage
    if (localStorage.getItem("scoreboard") == null) {
      this.scoreboard = {
        asma: 80,
        kev: 58,
        lolo: 47,
        you: 0
      };
    } else {
      // Récupération du scoreboard depuis le localStorage
      this.scoreboard = JSON.parse(localStorage.getItem("scoreboard"));
    }
  }

  // Méthode de rendu du composant
  render = () => {
    // Création de l'élément de l'interface utilisateur représentant le tableau de classement
    const result = MiniReact.createElement(
      "div",
      { class: "container" },
      MiniReact.createElement(
        "h1",
        { class: "color text-center mb-1" },
        "Classement"
      ),
      MiniReact.createElement(
        "div",
        { class: "container text-center" },
        MiniReact.createElement(
          "h3",
          null,
          `Asmaa : ${prop_access(this.scoreboard, "asma")}`
        ),
        MiniReact.createElement(
          "h3",
          null,
          `Ryad : ${prop_access(this.scoreboard, "kev")}`
        ),
        MiniReact.createElement(
          "h3",
          null,
          `Hicham : ${prop_access(this.scoreboard, "lolo")}`
        ),
        MiniReact.createElement(
          "h3",
          { class: "color" },
          `You : ${prop_access(this.scoreboard, "you")}`
        )
      )
    );
    return result; // Retourne l'élément de l'interface utilisateur
  };
}
