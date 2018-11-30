import React, { Component } from "react";
import Accordion from "./Accordion";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_CONDUCT = gql`
  query {
    allConducts {
      title
      description
    }
  }
`;

class AccordionContainer extends Component {
  render() {
    return (
      <Query query={GET_CONDUCT}>
        {({ error, data }) => {
          if (error) return <Text>`Error, in accordion`</Text>;
          if (data) {
            console.log("DATAER", data);
            return <Accordion data={data} />;
          }
        }}
      </Query>
    );
  }
}

export default AccordionContainer;
