import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Container from "@material-ui/core/Container";

import Main from "./components/Main";
// import FormProvider from "./components/form/context/FormState";
// import AddSubscriptionForm from "./components/form/formScreen/SubscriptionForm";

// const recipes = [
//   {
//     author: "Jim",
//     name: "Chicken Curry",
//     description: "Delicious spicy chicken curry",
//   },
//   {
//     author: "Aravind",
//     name: "Hamburger",
//     description: "Juicy burger with toppings and a soft bun",
//   },
// ];

function App() {
  return (
    <Container>
      <Router>
        <Main />
        {/* <FormProvider>
          <AddSubscriptionForm />
        </FormProvider> */}
      </Router>
    </Container>
  );
}

export default App;
