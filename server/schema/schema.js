const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const fetch = require("node-fetch");
const SearchType = require("./search_type");
const MovieType = require("./movie_type");

const url = "http://www.omdbapi.com/?apikey=";

function fetchSearch(apiKey, searchTerm) {
  return fetch(`${url}${apiKey}&s=${searchTerm}`).then(res => {
    return res.json();
  });
}

function fetchMovie(apiKey, id) {
  return fetch(`${url}${apiKey}&i=${id}`).then(res => {
    return res.json();
  });
}

const queryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    search: {
      type: SearchType,
      args: {
        apiKey: { type: GraphQLString },
        searchTerm: { type: GraphQLString },
        // more...
      },
      resolve: (root, args) => fetchSearch(args.apiKey, args.searchTerm),
    },
    movie: {
      type: MovieType,
      args: {
        apiKey: { type: GraphQLString },
        id: { type: GraphQLString },
        // more...
      },
      resolve: (root, args) => fetchMovie(args.apiKey, args.id),
    },
  },
});

const omdbSchema = new GraphQLSchema({
  query: queryType,
});

module.exports = omdbSchema;
