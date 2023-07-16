import {MiniReactRenderDOM} from "./lib/react.js";
import {route, router} from "./router.js";
import {TickComponent} from "./component/TickComponent.js";
import {TableComponent} from "./component/TableComponent.js";
import {HeaderComponent} from "./component/HeaderComponent.js";
import {PageComponent} from "./component/PageComponent.js";
import {ErrorNotFoundComponent} from "./component/NotFoundComponent.js";
import {JitterComponent} from "./component/JitterComponent.js";
import {InputFileComponent} from "./component/InputFileComponent.js";
import {ModalComponent} from "./component/ModalComponent.js";
import {ToggleComponent} from "./component/ToggleComponent.js";

// Initialisation de l'arboresence
MiniReactRenderDOM.render(PageComponent, document.getElementById("root"), {});
MiniReactRenderDOM.render(HeaderComponent, document.getElementById("header"), {
  router // Je me sers du routeur pour crée mon composant
});

// Detecte si l'initialisation de l'arboresence c'est bien effectué
let promise = new Promise(function (resolve, reject) {
  // Récuperation du content
  let contentElement = document.getElementById("content");

  // On vérifie qu'on a bien un content dans le DOM pour permettre au MiniReactRender de fonctionner
  if (contentElement)
    resolve("Content element found !  MiniReactRender can work ! Yay !");
  else
    reject(
      Error(
          "No  ontent element found... MiniReactRender won't work :( Please use Google Chrome !"
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
        MiniReactRenderDOM.render(TickComponent, contentElement, {
          interval: 1000
        });
        break;

      case "score":
        // Si on est sur la route tableau
        MiniReactRenderDOM.render(TableComponent, contentElement, {});
        break;

      case "jitterclick":
        // Si on est sur la route jitterclick
        MiniReactRenderDOM.render(JitterComponent, contentElement, {
            interval: 5
        });
          break;

        case "modal":
            MiniReactRenderDOM.render(ModalComponent, contentElement, {
                content:
                    'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.'
            });
            break;

        case "toggle":
            MiniReactRenderDOM.render(ToggleComponent, contentElement, {
                onText: "Activé",
                offText: "Désactivé",
            });
            break;

        case "file":
            // Si on est sur la route file
            MiniReactRenderDOM.render(InputFileComponent, contentElement, {});
            break;

        default:
            console.log("oui");
            // Not found
            MiniReactRenderDOM.render(ErrorNotFoundComponent, contentElement, {});
        break;
    }
  },
  function(err) {
    console.log(err);
  }
);