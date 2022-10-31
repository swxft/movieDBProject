const graphqlHTTP = require("express-graphql");
const express = require("express");
const { graphql } = require("graphql");
//const omdbSchema = require("./schema/schema");
const app = express();
// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
  );
  if ("OPTIONS" === req.method) {
    res.status(200).end();
  } else {
    next();
  }
});
// app.use(
//   “/graphql”,
//   graphqlHTTP({
//     schema: omdbSchema,
//   })
// );
app.listen(3000, () => console.log("running express on port 3000!"));
