import React from "react";
import Home from "modules/Home/Home";
import Modal from "react-modal";

import GlobalStyle from "styles";
import "index.css";

Modal.setAppElement("#root");

const App = () => (
  <>
    <GlobalStyle />
    <Home />
  </>
);

export default App;
