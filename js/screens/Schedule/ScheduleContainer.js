import React, { Component } from "react";
import Schedule from "./Schedule";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ActivityIndicator } from "react-native";

const GET_SESSIONS = gql`
  query {
    allSessions {
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

class ScheduleContainer extends Component {
  constructor() {
    super();
  }
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return (
      <Query query={GET_SESSIONS}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return `Error, ${error.message}`;
          if (data)
            return <Schedule data={data} navigation={this.props.navigation} />;
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
