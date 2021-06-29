import { IResolvers } from "graphql-tools";

const query: IResolvers = {
  Query: {
    estudiantes(): string {
      return "todos los estudiantes";
    },
  },
};

export default query;
