import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";

const query: IResolvers = {
  Query: {
    estudiantes(): any {
      return database.estudiantes;
    },
    estudiante(_: void, { id }): any {
      return database.estudiantes.filter((estudiante) =>
        estudiante.id === id
      )[0];
    },
  },
};

export default query;
