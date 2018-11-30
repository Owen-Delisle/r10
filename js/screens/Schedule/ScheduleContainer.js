import React, { Component } from "react";
import Schedule from "./Schedule";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ActivityIndicator } from "react-native";
import FavesContext from "../../context/FavesContext/FavesProvider";
import { formatSessionData } from "../../lib/helpers";

const GET_SESSIONS = gql`
  query {
    allSessions {
      id
      description
      location
      speaker {
        name
        image
        bio
        url
      }
      startTime
      title
    }
  }
`;

class ScheduleContainer extends Component {
  constructor() {
    super();
  }
  static navigationOptions = {
    title: "Schedule",
    headerTintColor: "white"
  };
  render() {
    return (
      <FavesContext.Consumer>
        {({ faveIds }) => {
          return (
            <Query query={GET_SESSIONS}>
              {({ loading, error, data }) => {
                if (loading) return <ActivityIndicator />;
                if (error) return <Text>`Error, ${error.message}`</Text>;
                if (data)
                  return (
                    <Schedule
                      data={formatSessionData(data.allSessions)}
                      navigation={this.props.navigation}
                      faveIds={faveIds}
                    />
                  );
              }}
            </Query>
          );
        }}
      </FavesContext.Consumer>
    );
  }
}

export default ScheduleContainer;
