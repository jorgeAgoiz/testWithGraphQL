import query from "./query";
import type from "./type";
import { IResolvers } from "graphql-tools";
import mutation from "./mutation";

const resolversMap: IResolvers = {
  ...query,
  ...type,
  ...mutation,
};

export default resolversMap;
