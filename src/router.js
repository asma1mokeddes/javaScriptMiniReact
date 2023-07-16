import { Router, Route } from "./lib/react-routing.js";

// Creation du routeur
export let router = new Router("mainRouter", [
  new Route("Home", "home", "/", "link color"),
  new Route("Score", "score", "/score", "link color"),
  new Route("File", "file", "/file", "link color"),
  new Route("JitterClick", "jitterclick", "/jitterclick", "link color"),
  new Route("Modal", "modal", "/modal", "link color"),
]);

// Prend la route courrante
export let route = router.routes.filter(function(r) {
  return r.getPath() === window.location.pathname;
})[0];