import Realm from "realm";
const FaveSchema = {
  name: "Fave",
  primaryKey: "id",
  properties: {
    id: "string",

    faved_on: { type: "date" }
  }
};
const realm = new Realm({ schema: [FaveSchema] });

export default realm;
