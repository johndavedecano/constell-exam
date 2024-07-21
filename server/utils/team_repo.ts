import { Team } from "~/types";

import db from "./db";

export type QueryFilter = {
  skip: number;
  limit: number;
};

export const fetchTeam = (filter: QueryFilter): Promise<Team[]> => {
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

export const findById = (id: string | number): Promise<Team> => {
  return new Promise((resolve, reject) => {
    db.team?.findOne({ _id: id }, (err: Error, doc: Team) => {
      if (err) return reject(err);
      resolve(doc);
    });
  });
};

export const insert = (user: Partial<Team>) => {
  return db.team?.insert(user);
};

export const remove = (id: string | number) => {
  return db.team?.remove(id);
};

export const update = (id: string | number, user: Partial<Team>) => {
  return db.team?.update({ _id: id }, user);
};

export default { fetchTeam, findById, insert, remove, update };
