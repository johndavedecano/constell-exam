import { User } from "~/types";

import db from "./db";

const fetchStaff = (filter: QueryFilter): Promise<User[]> => {
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

const findById = (id: string | number): Promise<User> => {
  return new Promise((resolve, reject) => {
    db.staff?.findOne({ _id: id }, (err: Error, doc: User) => {
      if (err) return reject(err);
      resolve(doc);
    });
  });
};

const insert = (user: Partial<User>) => {
  return db.staff?.insert(user);
};

const remove = (id: string | number) => {
  return db.staff?.remove({ _id: id });
};

const update = (id: string | number, user: Partial<User>) => {
  return db.staff?.update({ _id: id }, user);
};

export default { fetchStaff, findById, insert, remove, update };
