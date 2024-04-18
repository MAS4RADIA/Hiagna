import { Switch } from "/Build/Room.js";
import { MovePointerTo } from "/Build/Navigation.js";

window.addEventListener ("load", Switch);
window.addEventListener ("popstate", Switch);
window.addEventListener ("resize", MovePointerTo);