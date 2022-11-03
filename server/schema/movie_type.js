const MovieRating = require("./movie_rating");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require("graphql");

const MovieType = new GraphQLObjectType({
  name: "MovieType",
  fields: {
    title: {
      type: GraphQLString,
      resolve: (result) => result.Title,
    },
    year: {
      type: GraphQLString,
      resolve: (result) => result.Year,
    },
    rated: {
      type: GraphQLString,
      resolve: (result) => result.Rated,
    },
    released: {
      type: GraphQLString,
      resolve: (result) => result.Released,
    },
    runtime: {
      type: GraphQLString,
      resolve: (result) => result.Runtime,
    },
    genre: {
      type: GraphQLString,
      resolve: (result) => result.Genre,
    },
    director: {
      type: GraphQLString,
      resolve: (result) => result.Director,
    },
    writer: {
      type: GraphQLList(GraphQLString),
      resolve: (result) => result.Writer.split(", "),
    },
    actors: {
      type: GraphQLList(GraphQLString),
      resolve: (result) => result.Actors.split(", "),
    },
    plot: {
      type: GraphQLString,
      resolve: (result) => result.Plot,
    },
    language: {
      type: GraphQLString,
      resolve: (result) => result.Language,
    },
    country: {
      type: GraphQLString,
      resolve: (result) => result.Country,
    },
    awards: {
      type: GraphQLString,
      resolve: (result) => result.Awards,
    },
    poster: {
      type: GraphQLString,
      resolve: (result) => result.Poster,
    },
    ratings: {
      type: GraphQLList(MovieRating),
      resolve: (result) => result.Ratings,
    },
    metascore: {
      type: GraphQLString,
      resolve: (result) => result.MetaScore,
    },
    imdbRating: {
      type: GraphQLString,
      resolve: (result) => result.imdbRating,
    },
    imdbVotes: {
      type: GraphQLString,
      resolve: (result) => result.imdbVotes,
    },
    imdbId: {
      type: GraphQLString,
      resolve: (result) => result.imdbId,
    },
    type: {
      type: GraphQLString,
      resolve: (result) => result.Type,
    },
    dvd: {
      type: GraphQLString,
      resolve: (result) => result.DVD,
    },
    boxOffice: {
      type: GraphQLString,
      resolve: (result) => result.BoxOffice,
    },
    production: {
      type: GraphQLString,
      resolve: (result) => result.Production,
    },
    website: {
      type: GraphQLString,
      resolve: (result) => result.Website,
    },
  },
});
module.exports = MovieType;

/* 
query:
getMovies(apiKey, tt0319343) {
  sear
  title
  date
}

*/
