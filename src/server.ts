import express from "express";
import compression from "compression";
import cors from "cors";

const app = express();

app.use(cors());
app.use(compression());

app.get("/", (req, res) => {
  res.send("Hola desde el futuro  servidor graphql!!");
});

app.listen(3000, () => {
  console.log("Listening in port 3000....");
});
