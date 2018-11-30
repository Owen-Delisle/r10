import React, { Component } from "react";
import realm from "../../config/models";

const FavesContext = React.createContext();
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: []
    };
  }

  async componentDidMount() {
    await this.queryAllFaves();
  }

  async addFave(id, date) {
    await realm.write(() => {
      realm.create("Fave", { id: id, faved_on: date });
    });
  }

  async removeFave(id) {
    await realm.write(() => {
      realm.delete(realm.objectForPrimaryKey("Fave", id));
    });
  }

  async queryAllFaves() {
    let favs = realm.objects("Fave").map(fav => fav.id);
    await this.setState({ faveIds: favs });
  }

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFave: this.addFave.bind(this),
          removeFave: this.removeFave.bind(this),
          queryAllFaves: this.queryAllFaves.bind(this),
          faveIds: this.state.faveIds
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export { FavesProvider };
export default FavesContext;
