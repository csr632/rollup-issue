import Menu from "./menu";
// const Menu = {
//   name: "menu2",
// };
import Item from "./item";

Menu.Item = Item;
console.log("side effect in test-package-default-export");

export default Menu;
