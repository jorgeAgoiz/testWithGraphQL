import query from "./query";
import type from "./type";
import { IResolvers } from "graphql-tools";

const resolversMap: IResolvers = {
  ...query,
  ...type,
};

export default resolversMap;
