import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import FormikHolidayForm from "../bookHoliday/holiday";
import Nav from "../nav";

import styled from "styled-components";

import { Flex, Box } from "@rebass/grid";

const Container = styled(Flex)`
  max-width: 1024px;
  height: calc(100vh - 70px);
`;
Container.defaultProps = {
  mx: "auto",
};

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/holiday">
          <Container alignItems="center" justifyContent="center">
            <FormikHolidayForm />
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
