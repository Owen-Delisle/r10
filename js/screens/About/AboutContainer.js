import React, { Component } from "react";
import About from "./About";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ActivityIndicator } from "react-native";

const GET_CONDUCT = gql`
  query {
    allConducts {
      title
      description
    }
  }
`;

class AboutContainer extends Component {
  static navigationOptions = {
    title: "About"
  };
  render() {
    return (
      <Query query={GET_CONDUCT}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>`Error, ${error.message}`</Text>;
          if (data) return <About data={data} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
