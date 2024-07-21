import { User } from "~/types";

import db from "./db";

export type QueryFilter = {
  skip: number;
  limit: number;
};

export const fetchStaff = (filter: QueryFilter): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    db.staff
      ?.find({})
      .skip(filter.skip)
      .limit(filter.limit)
      .exec((err: Error, docs: User[]) => {
        if (err) return reject(err);
        resolve(docs);
      });
  });
};

export const findById = (id: string | number): Promise<User> => {
  return new Promise((resolve, reject) => {
    db.staff?.findOne({ _id: id }, (err: Error, doc: User) => {
      if (err) return reject(err);
      resolve(doc);
    });
  });
};

export const insert = (user: Partial<User>) => {
  return db.staff?.insert(user);
};

export const remove = (id: string | number) => {
  return db.staff?.remove(id);
};

export const update = (id: string | number, user: Partial<User>) => {
  return db.staff?.update({ _id: id }, user);
};

export default { fetchStaff, findById, insert, remove, update };
