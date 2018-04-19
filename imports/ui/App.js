import React from "react";
// allows us to write query in js
import gql from "graphql-tag";
// connect our query to component
import { graphql } from "react-apollo";

const App = ({ data }) => <h1>{data.hi}</h1>;

const hiQuery = gql`
  {
    hi
  }
`;

export default graphql(hiQuery)(App);
