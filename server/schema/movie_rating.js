const {
  GraphQLObjectType,
  GraphQLString,
} = require("graphql");

const MovieRating = new GraphQLObjectType({
  name: "MovieRatings",
  fields: {
    source: {
      type: GraphQLString,
      resolve: (result) => result.Source,
    },
    value: {
      type: GraphQLString,
      resolve: (result) => result.Value,
    }
  }
})

module.exports = MovieRating;
