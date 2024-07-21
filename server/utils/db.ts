import Datastore from "nestdb";

type Database = {
  staff?: Datastore;
  team?: Datastore;
};

const db: Database = {};

db.staff = new Datastore();

db.team = new Datastore();

export default db;
