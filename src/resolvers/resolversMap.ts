import { query } from "express";
import { IResolvers } from "graphql-tools";

const resolversMap: IResolvers = {
  ...query,
};

export default resolversMap;
