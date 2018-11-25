import React, { Component } from "react";
import Favs from "./Favs";
import FavesContext from "../../context/FavesContext/FavesProvider";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ActivityIndicator, Text } from "react-native";

const GET_FAVE_SESSIONS = gql`
  query faveSessions($ids: SessionFilter) {
    allSessions(filter: $ids) {
      id
      description
      location
      speaker {
        name
        image
      }
      startTime
      title
    }
  }
`;

class FavsContainer extends Component {
  static navigationOptions = {
    title: "Faves",
    headerTintColor: "white"
  };
  render() {
    return (
      <FavesContext.Consumer>
        {({ faveIds }) => {
          return (
            <Query
              query={GET_FAVE_SESSIONS}
              variables={{ ids: { id_in: faveIds } }}
            >
              {({ loading, error, data }) => {
                if (loading) return <ActivityIndicator />;
                if (error) return <Text>`Error, ${error.message}`</Text>;
                if (data) return <Favs data={data} />;
              }}
            </Query>
          );
        }}
      </FavesContext.Consumer>
    );
  }
}

export default FavsContainer;
