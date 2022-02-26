import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SamuraiJSApp from "./App";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
/*import StoreContext, { Provider } from "./storeContext";*/
import { Provider } from "react-redux";


{/*let h1 = document.createElement("h1");
h1.innerHTML = "Hello";
document.querySelector("body").appendChild(h1);

React.createElement("h1", [ React.createElement(App) ])
*/}
let rerenderEntireTree = (state) => {
  console.log("Пропсы компоненты rerenderEntireTree:");
  console.log(state);
	ReactDOM.render(<SamuraiJSApp />,document.getElementById("root"));
};

rerenderEntireTree();

/*rerenderEntireTree(store.getState()); //Working version of code

store.subscribe(rerenderEntireTree);

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
*/
