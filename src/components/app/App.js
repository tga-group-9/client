import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../layout/Layout";
import AskQuestion from "../question/ask-question/AskQuestion";
import QuestionCard from "../question/card/Card";
import SignUp from "../user/signup/SignUp";
import LogIn from "../user/login/Login";
import Profile from "../user/profile/Profile";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import "./App.scss";

function App() {
  const TEST_QUERY = gql`
    {
      user(id: "24") {
        firstName
      }
    }
  `;
  return (
    // <query={TEST_QUERY}>
    //   {({ loading, error, data }) => {
    //     if (loading) return <div>Fetching</div>
    //     if (error) return <div>Error {console.log(error)}</div>
    //     const fname = data.user.firstName
    //     return (
    //       <Layout>
    //         {/* <AskQuestion /> */}
    //         {fname}
    //       </Layout>
    //     )Query
    //   }}

    // </Query>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <AskQuestion />
          </Route>
          <Route path="/question">
            <QuestionCard />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
