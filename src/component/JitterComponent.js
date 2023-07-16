import { type_check, prop_access } from "../lib/react-utils.js";
import { MiniReactRender } from "../lib/react.js";
import { Component } from "../lib/react-component.js";
import { ButtonComponent } from "./ButtonComponent.js";

export class JitterComponent extends Component {
  // Définition du classement
  classement = {
    asma: 80,
    riadh: 23,
    hicham: 40,
    you: 0
  };

  // Boutton composant
  myBtn = new ButtonComponent({
    onClick: () => document.location.reload(true)
  }).render();

  constructor(properties) {
    super(properties);

    // Vérification des proprietes du composant
    if (this.specs) type_check(properties, this.specs);

    // Mise en place du decompte
    this.timer = setInterval(this.tick, 1000);
    this.temps_total = properties.interval;
    this.temps = 0;

    // Compteur de click
    this.nbr_click = 0;
  }

  // Affichage
  render = () => {
    return  MiniReactRender.createElement(
      "div",
      { class: "container text-center" },
      "Notre score 59 en 5s, seriez vous capable de nous battre ?",
      MiniReactRender.createElement(
        "h1",
        { class: "text-center", id: "counter" },
        "Clicker sur la touche 'Espace'"
      ),
      MiniReactRender.createElement(
        "div",
        { class: "text-center", id: "jitter" },
        "",
        MiniReactRender.createElement(
          "h1",
          { class: "align-middle" },
          `Your score : ${this.nbr_click}`
        )
      ),
      MiniReactRender.createElement(
        "h1",
        { class: "text-center" },
        `Counter : ${this.state.time != null ? this.state.time : "READY ?"}`
      ),
      MiniReactRender.createElement(
        "div",
        { class: "container text-center" },
        this.myBtn
      )
    );
  };

  // Decompteur
  tick = () => {
    if (this.state.time == null) this.setListener();
    if (this.state.time >= this.temps_total) this.stopCount();
    else this.setState({ time: this.temps++ });
  };

  // On stop le compteur de click
  stopCount = () => {
    // On retire le listener et on arrete le decomtpe
    window.onkeydown = null;
    clearInterval(this.timer);

    // si null
    if (localStorage.getItem("classement") == null)
      localStorage.setItem("classement", JSON.stringify(this.classement));

    // Sauvegarde du score
    if (
      prop_access(JSON.parse(localStorage.getItem("classement")), "you") <
      this.nbr_click
    ) {
      this.classement.you = this.nbr_click;
      localStorage.setItem("classement", JSON.stringify(this.classement));
    }

    // alert
    if (this.nbr_click < 59) alert("C'EST PAS TERRIBLE :/");
    else if (this.nbr_click === 59) alert("Impresionnant :o");
    else alert("Bien joué ! Ca mérite bien un 20/20 non ? ;)");
  };

  // On click
  setListener = () => {
    let element = document.getElementById("jitter");
    element.onclick = this.counter;
    window.onkeydown = this.counter;
  };

  // Compteur de click
  counter = e => {
    if (e.code === "Space") {
      this.nbr_click++;
      this.setState({ time: this.temps, count: this.nbr_click.createScore(1) });
    }
  };

  // Modèle des propriété
  specs = {
    properties: {
      interval: { type: "number" }
    }
  };
}