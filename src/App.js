import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Container from "@material-ui/core/Container";

import Main from "./components/subscription";

function App() {
  return (
    <Container>
      <Router>
        <Main />
      </Router>
    </Container>
  );
}

export default App;
