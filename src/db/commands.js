import db from "./db";
import schemas from "./schemas";

export const init = () => {
  console.log(schemas);
};

export const create = (table, fields) => {
  let query = "CREATE TABLE IF NOT EXISTS `" + table + "` (";
  let primaryField = false;

  fields.forEach((v, k) => {
    query += " `" + k + "`";

    if (v.type) {
      query += " " + v.type;
    }

    if (v.maxlength) {
      query += "(" + v.maxlength + ")";
    }

    if (!v.nullable) {
      query += " NOT NULL";
    }

    if (v.primary) {
      query += " PRIMARY KEY";
    }

    if (v.increments) {
      query += " AUTOINCREMENT";
    }

    if (v.default) {
      query += " DEFAULT '" + v.default + "'";
    }
  });

  query += ");";
};
