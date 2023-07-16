import {prop_access} from "../lib/react-utils.js";
import {MiniReactRender} from "../lib/react.js";
import {Component} from "../lib/react-component.js";

export class HeaderComponent extends Component {
    constructor(properties) {
        super(properties);
        this.headerTitle = " ReactorX ".snake_case();
        this.routes = prop_access(properties.router, "routes");
        this.selectedLink = window.location.pathname;
    }

    // Fonction de rendu
  render = () => {
    // Recup
    console.log(this.selectedLink);

    // Construction des liens
    let routeHome = this.routes.filter(function(r) {
      return r.getId() === "home";
    })[0];
      let routeFile = this.routes.filter(function (r) {
          return r.getId() === "file";
      })[0];
      let routeScore = this.routes.filter(function (r) {
          return r.getId() === "score";
      })[0];
      let routeJitter = this.routes.filter(function (r) {
          return r.getId() === "jitterclick";
      })[0];
      let routeModal = this.routes.filter(function (r) {
          return r.getId() === "modal";
      })[0];

      // Creation de l'arboresence
      const result = MiniReactRender.createElement(
          "header",
          {class: "container text-center color mb-5"},
          MiniReactRender.createElement("h2", null, `${this.headerTitle}`),
          MiniReactRender.createElement(
              "nav",
              null,
              MiniReactRender.createElement(
                  "a",
                  {
                      class: routeHome.getClassName(),
                      id: routeHome.getId(),
                      href: "." + routeHome.getPath(),
                      style:
                          this.selectedLink === routeHome.getPath()
                              ? "text-decoration: underline"
                              : ""
                  },
          routeHome.getName()
        ),
              MiniReactRender.createElement(
                  "a",
                  {
                      class: routeJitter.getClassName(),
                      id: routeJitter.getId(),
                      href: "." + routeJitter.getPath(),
                      style:
                          this.selectedLink === routeJitter.getPath()
                              ? "text-decoration: underline"
                              : ""
                  },
          routeJitter.getName()
        ),
              MiniReactRender.createElement(
                  "a",
                  {
                      class: routeScore.getClassName(),
                      id: routeScore.getId(),
                      href: "." + routeScore.getPath(),
                      style:
                          this.selectedLink === routeScore.getPath()
                              ? "text-decoration: underline"
                              : ""
                  },
          routeScore.getName()
        ),
              MiniReactRender.createElement(
                  "a",
                  {
                      class: routeFile.getClassName(),
                      id: routeFile.getId(),
                      href: "." + routeFile.getPath(),
                      style:
                          this.selectedLink === routeFile.getPath()
                              ? "text-decoration: underline"
                              : ""
                  },
                  routeFile.getName()
              ),

              MiniReactRender.createElement(
                  "a",
                  {
                      class: routeModal.getClassName(),
                      id: routeModal.getId(),
                      href: "." + routeModal.getPath(),
                      style:
                          this.selectedLink === routeModal.getPath()
                              ? "text-decoration: underline"
                              : ""
                  },
                  routeModal.getName()
              ),

          )

    );

    return result;
  };
}