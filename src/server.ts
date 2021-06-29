import express from "express";
import compression from "compression";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema/index";
import ExpressPlaygroundMiddleware from "graphql-playground-middleware-express";

const app = express();
const server = new ApolloServer({
  schema,
  introspection: true,
});

app.use(cors());
app.use(compression());
server.applyMiddleware({ app });

app.get(
  "/",
  ExpressPlaygroundMiddleware({
    endpoint: "/graphql",
  }),
);

app.listen(3000, () => {
  console.log("Listening in port 3000....");
});
