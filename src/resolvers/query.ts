import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";

const query: IResolvers = {
  Query: {
    estudiantes(): any {
      return database.estudiantes;
    },
  },
};

export default query;
