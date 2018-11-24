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

  componentDidMount() {
    this.queryAllFaves();
  }

  addFave(id, date) {
    realm.write(() => {
      realm.create("Fave", { id: id, faved_on: date });
    });
  }

  removeFave(id) {
    realm.delete("Faves", { id: id });
    let favs = realm.objects("Faves");
    this.setState({ faveIds: favs });
  }

  queryAllFaves() {
    let favs = realm.objects("Fave").map(fav => fav.id);
    this.setState({ faveIds: favs });
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
