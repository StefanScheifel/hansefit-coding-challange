import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FormikHolidayForm from "../bookHoliday/holiday";
import DisplayBookedHolidays from "../displayBookedHolidays";

import Nav from "../nav";

import styled from "styled-components";

import { Flex } from "@rebass/grid";

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
        <Route exact path="/">
          <Container alignItems="center" justifyContent="center">
            <FormikHolidayForm />
          </Container>
        </Route>
        <Route exact path="/bookedHolidays">
          <Container alignItems="center" justifyContent="center">
            <DisplayBookedHolidays />
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
