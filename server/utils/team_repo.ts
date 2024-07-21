import { Team } from "~/types";

import db from "./db";

const fetchTeam = (filter: QueryFilter): Promise<Team[]> => {
  return new Promise((resolve, reject) => {
    db.team
      ?.find({})
      .skip(filter.skip)
      .limit(filter.limit)
      .exec((err: Error, docs: Team[]) => {
        if (err) return reject(err);
        resolve(docs);
      });
  });
};

const findById = (id: string | number): Promise<Team> => {
  return new Promise((resolve, reject) => {
    db.team?.findOne({ _id: id }, (err: Error, doc: Team) => {
      if (err) return reject(err);
      resolve(doc);
    });
  });
};

const insert = (user: Partial<Team>) => {
  return db.team?.insert(user);
};

const remove = (id: string | number) => {
  return db.team?.remove(id);
};

const update = (id: string | number, user: Partial<Team>) => {
  return db.team?.update({ _id: id }, user);
};

export default { fetchTeam, findById, insert, remove, update };
