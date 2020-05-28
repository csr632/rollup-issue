import Menu from "./menu";
// const Menu = {
//   name: "menu2",
// };
import Item from "./item";

Menu.Item = Item;
console.log("side effect in test-package-named-export");

export { Menu };
