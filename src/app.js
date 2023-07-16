import { MiniReactDOM } from "./lib/react.js";
import { router, route } from "./router.js";
import { TickComponent } from "./component/TickComponent.js";
import { TableComponent } from "./component/TableComponent.js";
import { HeaderComponent } from "./component/HeaderComponent.js";
import { PageComponent } from "./component/PageComponent.js";
import { ErrorNotFoundComponent } from "./component/NotFoundComponent.js";
import { JitterComponent } from "./component/JitterComponent.js";
import { InputFileComponent } from "./component/InputFileComponent.js";

// Initialisation de l'arboresence
MiniReactDOM.render(PageComponent, document.getElementById("root"), {});
MiniReactDOM.render(HeaderComponent, document.getElementById("header"), {
  router // Je me sers du routeur pour crée mon composant
});

// Detecte si l'initialisation de l'arboresence c'est bien effectué
let promise = new Promise(function(resolve, reject) {
  // Récuperation du content
  let contentElement = document.getElementById("content");

  // On vérifie qu'on a bien un content dans le DOM pour permettre au MiniReact de fonctionner
  if (contentElement)
    resolve("Content element found !  MiniReact can work ! Yay !");
  else
    reject(
      Error(
        "No  ontent element found... MiniReact won't work :( Please use Google Chrome !"
      )
    );
});

promise.then(
  function(result) {
    let contentElement = document.getElementById("content");
    console.log(result);
    // Affichage en fonction de la route
    switch (!route ? null : route.getId()) {
      case "home":
        // Si on est sur la route home
        MiniReactDOM.render(TickComponent, contentElement, {
          interval: 1000
        });
        break;

      case "score":
        // Si on est sur la route tableau
        MiniReactDOM.render(TableComponent, contentElement, {});
        break;

      case "jitterclick":
        // Si on est sur la route jitterclick
        MiniReactDOM.render(JitterComponent, contentElement, {
          interval: 5
        });
        break;

      case "file":
        // Si on est sur la route file
        MiniReactDOM.render(InputFileComponent, contentElement, {});
        break;

      default:
        console.log("oui");
        // Not found
        MiniReactDOM.render(ErrorNotFoundComponent, contentElement, {});
        break;
    }
  },
  function(err) {
    console.log(err);
  }
);