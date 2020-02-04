import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
const store = configureStore();
// function Hi() {
//   debugger;
//   return <p>Hi.</p>;
// }

render(
  <ReduxProvider store={store}>
    <Router>
      {/* <Hi></Hi> */}
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
