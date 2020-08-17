import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "../nav";
import FormikHolidayForm from "../bookHoliday/holiday";
import DisplayBookedHolidays from "../displayBookedHolidays";

import Container from "./container";

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
